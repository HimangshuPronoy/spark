import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, mood, complexity, customPrompt } = await req.json();

    // Log request details for debugging
    console.log("Request received with params:", { type, mood, complexity, hasCustomPrompt: !!customPrompt });

    // Create a prompt for Gemini to generate a creative prompt
    let prompt;
    
    if (customPrompt && customPrompt.trim()) {
      // If the user provided a custom prompt, use it directly
      prompt = customPrompt.trim();
    } else {
      // Otherwise, create a dynamic prompt based on the parameters
      let contextPrefix = "";
      
      // Add context based on type
      if (type === "writing") {
        contextPrefix = "You are a creative writing coach. ";
      } else if (type === "art") {
        contextPrefix = "You are an art director. ";
      } else if (type === "design") {
        contextPrefix = "You are a design consultant. ";
      } else if (type === "music") {
        contextPrefix = "You are a music producer. ";
      } else if (type === "coding") {
        contextPrefix = "You are a software architect. ";
      } else {
        contextPrefix = "You are a creative assistant. ";
      }
      
      prompt = `
        ${contextPrefix}
        Generate a creative ${type} prompt with a ${mood} style.
        The complexity level should be ${complexity} out of 5 (where 1 is simple and 5 is complex).
        The prompt should inspire creativity and be specific enough to give clear direction.
        Only return the prompt text with no additional commentary or explanation.
      `;
    }

    // Check if we have an API key
    if (!GEMINI_API_KEY) {
      console.error("Missing GEMINI_API_KEY environment variable");
      throw new Error("API configuration error. Please check the server configuration.");
    }

    console.log("Sending request to Gemini API...");

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        }
      })
    });

    // Handle non-200 responses
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API returned ${response.status}: ${errorText}`);
      throw new Error(`Error from Gemini API: ${response.status}`);
    }

    const data = await response.json();
    
    // Check for errors in the Gemini response
    if (data.error) {
      console.error("Gemini API error:", data.error);
      throw new Error(data.error.message || "Error from Gemini API");
    }

    // Extract the prompt text from the response
    let generatedText = "";
    try {
      generatedText = data.candidates[0].content.parts[0].text.trim();
      console.log("Successfully generated prompt");
    } catch (e) {
      console.error("Failed to parse Gemini API response:", e);
      console.error("Response data:", JSON.stringify(data));
      throw new Error("Failed to extract prompt from Gemini response");
    }

    return new Response(JSON.stringify({ text: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating prompt:', error);
    return new Response(
      JSON.stringify({ error: error.message || "An unknown error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
