export type CreativeType = 'Writing' | 'Art' | 'Design' | 'Coding' | 'Marketing' | 'Business' | 'Education' | 'Research' | 'Music' | 'Video';
export type Mood = 'Whimsical' | 'Dark' | 'Inspiring' | 'Abstract' | 'Technical' | 'Professional';
export type Complexity = 1 | 2 | 3 | 4 | 5;

export interface PromptTemplate {
  type: CreativeType;
  mood: Mood;
  complexity: Complexity;
  text: string;
}

export interface GeneratedPrompt extends PromptTemplate {
  id: string;
  date: string;
  user_id?: string;
}

import { supabase } from "@/integrations/supabase/client";

// Prompt templates organized by type, mood, and complexity
const promptTemplates: PromptTemplate[] = [
  // Writing - Whimsical
  {
    type: 'Writing',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Write a short story about a talking cloud who runs a bakery in the sky.'
  },
  {
    type: 'Writing',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Write a fairy tale where kitchen appliances come to life at night and go on adventures.'
  },
  {
    type: 'Writing',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Create an episodic narrative following the misadventures of a time-traveling tea kettle visiting different eras in history.'
  },
  
  // Writing - Dark
  {
    type: 'Writing',
    mood: 'Dark',
    complexity: 1,
    text: 'Write a brief horror story about a mysterious shadow that follows someone home.'
  },
  {
    type: 'Writing',
    mood: 'Dark',
    complexity: 3,
    text: 'Create a gothic tale set in an abandoned lighthouse where the last keeper\'s ghost still maintains the light.'
  },
  {
    type: 'Writing',
    mood: 'Dark',
    complexity: 5,
    text: 'Write a psychological thriller about someone who discovers that their memories have been selectively altered throughout their life.'
  },
  
  // Writing - Inspiring
  {
    type: 'Writing',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Write a short story about someone who finds courage in an unexpected moment.'
  },
  {
    type: 'Writing',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Craft a narrative about a community coming together to overcome a natural disaster through acts of kindness.'
  },
  {
    type: 'Writing',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Create an epic journey of self-discovery spanning multiple generations, featuring characters who shape each other\'s destinies in profound ways.'
  },
  
  // Writing - Abstract
  {
    type: 'Writing',
    mood: 'Abstract',
    complexity: 1,
    text: 'Write a story using only sensory descriptions, without naming any objects directly.'
  },
  {
    type: 'Writing',
    mood: 'Abstract',
    complexity: 3,
    text: 'Create a narrative from the perspective of a color that is slowly fading from existence.'
  },
  {
    type: 'Writing',
    mood: 'Abstract',
    complexity: 5,
    text: 'Write a non-linear story where time moves backwards for half the characters and forwards for the others, until they converge at a single moment.'
  },
  
  // Art - Whimsical
  {
    type: 'Art',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Art',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Art',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Art - Dark
  {
    type: 'Art',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Art',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Art',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Art - Inspiring
  {
    type: 'Art',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Art',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Art',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Art - Abstract
  {
    type: 'Art',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Art',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Art',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Design - Whimsical
  {
    type: 'Design',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Design a playful logo for a children\'s toy store shaped like a smiling treehouse.'
  },
  {
    type: 'Design',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create packaging for a tea brand inspired by fairy tales, with interactive elements that tell a story as you prepare the tea.'
  },
  {
    type: 'Design',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a complete identity system for a whimsical theme park where each section is based on a different childhood dream, including wayfinding signs, mascots, and interactive elements.'
  },
  
  // Design - Dark
  {
    type: 'Design',
    mood: 'Dark',
    complexity: 1,
    text: 'Design a minimalist poster for a psychological thriller movie using only black and one accent color.'
  },
  {
    type: 'Design',
    mood: 'Dark',
    complexity: 3,
    text: 'Create packaging for a luxury candle brand inspired by forgotten alchemical ingredients and ancient mysteries.'
  },
  {
    type: 'Design',
    mood: 'Dark',
    complexity: 5,
    text: 'Design an immersive escape room experience based on a Victorian detective solving supernatural crimes, including the room layout, puzzle mechanics, and promotional materials.'
  },
  
  // Design - Inspiring
  {
    type: 'Design',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Design a simple, elegant logo for a nonprofit organization focused on education.'
  },
  {
    type: 'Design',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create an infographic that presents data about environmental conservation efforts in a way that inspires action.'
  },
  {
    type: 'Design',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design a complete campaign for a global initiative promoting unity and cultural exchange, including digital platforms, physical installations, and interactive experiences.'
  },
  
  // Design - Abstract
  {
    type: 'Design',
    mood: 'Abstract',
    complexity: 1,
    text: 'Design a simple pattern using geometric shapes that could be applied to various products.'
  },
  {
    type: 'Design',
    mood: 'Abstract',
    complexity: 3,
    text: 'Create a series of abstract icons representing different emotions or psychological states for a mental wellness app.'
  },
  {
    type: 'Design',
    mood: 'Abstract',
    complexity: 5,
    text: 'Design an interactive digital art installation that responds to movement, sound, and proximity with abstract visual elements that evolve based on collective participation.'
  },
  
  // Coding - Whimsical
  {
    type: 'Coding',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Write a short story about a talking cloud who runs a bakery in the sky.'
  },
  {
    type: 'Coding',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Write a fairy tale where kitchen appliances come to life at night and go on adventures.'
  },
  {
    type: 'Coding',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Create an episodic narrative following the misadventures of a time-traveling tea kettle visiting different eras in history.'
  },
  
  // Coding - Dark
  {
    type: 'Coding',
    mood: 'Dark',
    complexity: 1,
    text: 'Write a brief horror story about a mysterious shadow that follows someone home.'
  },
  {
    type: 'Coding',
    mood: 'Dark',
    complexity: 3,
    text: 'Create a gothic tale set in an abandoned lighthouse where the last keeper\'s ghost still maintains the light.'
  },
  {
    type: 'Coding',
    mood: 'Dark',
    complexity: 5,
    text: 'Write a psychological thriller about someone who discovers that their memories have been selectively altered throughout their life.'
  },
  
  // Coding - Inspiring
  {
    type: 'Coding',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Write a short story about someone who finds courage in an unexpected moment.'
  },
  {
    type: 'Coding',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Craft a narrative about a community coming together to overcome a natural disaster through acts of kindness.'
  },
  {
    type: 'Coding',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Create an epic journey of self-discovery spanning multiple generations, featuring characters who shape each other\'s destinies in profound ways.'
  },
  
  // Coding - Abstract
  {
    type: 'Coding',
    mood: 'Abstract',
    complexity: 1,
    text: 'Write a story using only sensory descriptions, without naming any objects directly.'
  },
  {
    type: 'Coding',
    mood: 'Abstract',
    complexity: 3,
    text: 'Create a narrative from the perspective of a color that is slowly fading from existence.'
  },
  {
    type: 'Coding',
    mood: 'Abstract',
    complexity: 5,
    text: 'Write a non-linear story where time moves backwards for half the characters and forwards for the others, until they converge at a single moment.'
  },
  
  // Marketing - Whimsical
  {
    type: 'Marketing',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Marketing',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Marketing',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Marketing - Dark
  {
    type: 'Marketing',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Marketing',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Marketing',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Marketing - Inspiring
  {
    type: 'Marketing',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Marketing',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Marketing',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Marketing - Abstract
  {
    type: 'Marketing',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Marketing',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Marketing',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Business - Whimsical
  {
    type: 'Business',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Business',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Business',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Business - Dark
  {
    type: 'Business',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Business',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Business',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Business - Inspiring
  {
    type: 'Business',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Business',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Business',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Business - Abstract
  {
    type: 'Business',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Business',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Business',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Education - Whimsical
  {
    type: 'Education',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Education',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Education',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Education - Dark
  {
    type: 'Education',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Education',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Education',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Education - Inspiring
  {
    type: 'Education',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Education',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Education',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Education - Abstract
  {
    type: 'Education',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Education',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Education',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Research - Whimsical
  {
    type: 'Research',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Research',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Research',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Research - Dark
  {
    type: 'Research',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Research',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Research',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Research - Inspiring
  {
    type: 'Research',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Research',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Research',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Research - Abstract
  {
    type: 'Research',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Research',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Research',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Music - Whimsical
  {
    type: 'Music',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Music',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Music',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Music - Dark
  {
    type: 'Music',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Music',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Music',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Music - Inspiring
  {
    type: 'Music',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Music',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Music',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Music - Abstract
  {
    type: 'Music',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Music',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Music',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  },
  
  // Video - Whimsical
  {
    type: 'Video',
    mood: 'Whimsical',
    complexity: 1,
    text: 'Draw a cat cafe in outer space, with floating coffee cups and pastries.'
  },
  {
    type: 'Video',
    mood: 'Whimsical',
    complexity: 3,
    text: 'Create an illustration of a village built on the back of a giant, friendly turtle swimming through the clouds.'
  },
  {
    type: 'Video',
    mood: 'Whimsical',
    complexity: 5,
    text: 'Design a fantastical carnival where each ride is based on a different dessert, populated by animal musicians and magical performers.'
  },
  
  // Video - Dark
  {
    type: 'Video',
    mood: 'Dark',
    complexity: 1,
    text: 'Sketch an abandoned house with one window illuminated by an eerie light.'
  },
  {
    type: 'Video',
    mood: 'Dark',
    complexity: 3,
    text: 'Create an illustration of ancient ruins being reclaimed by nature, with mysterious glyphs that seem to glow when no one is watching.'
  },
  {
    type: 'Video',
    mood: 'Dark',
    complexity: 5,
    text: 'Design a surreal landscape representing different stages of grief, with metaphorical elements transitioning from chaos to acceptance.'
  },
  
  // Video - Inspiring
  {
    type: 'Video',
    mood: 'Inspiring',
    complexity: 1,
    text: 'Depict a sunrise over a city skyline with people greeting the new day.'
  },
  {
    type: 'Video',
    mood: 'Inspiring',
    complexity: 3,
    text: 'Create a portrait of a diverse group of people linking hands to form a human chain across a divide in the landscape.'
  },
  {
    type: 'Video',
    mood: 'Inspiring',
    complexity: 5,
    text: 'Design an allegorical scene showing humanity\'s progress through the ages, with symbols of innovation, compassion, and hope integrated throughout a complex composition.'
  },
  
  // Video - Abstract
  {
    type: 'Video',
    mood: 'Abstract',
    complexity: 1,
    text: 'Create a composition using only circles and lines in three colors.'
  },
  {
    type: 'Video',
    mood: 'Abstract',
    complexity: 3,
    text: 'Design an abstract representation of music using shapes, patterns, and colors that evoke different sounds and rhythms.'
  },
  {
    type: 'Video',
    mood: 'Abstract',
    complexity: 5,
    text: 'Create a multi-layered abstract work that changes its apparent subject matter depending on the viewing distance, incorporating fractals and optical illusions.'
  }
];

// Function to generate a prompt via Gemini API
export const generatePrompt = async (
  type: CreativeType,
  mood: Mood,
  complexity: Complexity,
  customPrompt?: string
): Promise<GeneratedPrompt> => {
  try {
    // Try to generate a prompt using Gemini API
    const { data, error } = await supabase.functions.invoke('generate-prompt', {
      body: { type, mood, complexity, customPrompt }
    });

    if (error) throw error;

    // Create and return the generated prompt with ID and date
    return {
      type,
      mood,
      complexity,
      text: data.text,
      id: Math.random().toString(36).substring(2, 12),
      date: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error generating prompt with Gemini:', error);
    
    // Fallback to local generation if Gemini API fails
    return generatePromptLocally(type, mood, complexity);
  }
};

// Fallback function to generate a prompt locally if Gemini API fails
const generatePromptLocally = (
  type: CreativeType,
  mood: Mood,
  complexity: Complexity
): GeneratedPrompt => {
  // Filter templates by the user's selections
  const matchingTemplates = promptTemplates.filter(
    template => 
      template.type === type && 
      template.mood === mood &&
      template.complexity === complexity
  );
  
  // If there are no exact matches, find the closest match by complexity
  let selectedTemplate: PromptTemplate;
  
  if (matchingTemplates.length > 0) {
    // Randomly select one of the matching templates
    selectedTemplate = matchingTemplates[Math.floor(Math.random() * matchingTemplates.length)];
  } else {
    // Find templates with the same type and mood
    const sameTypeMood = promptTemplates.filter(
      template => template.type === type && template.mood === mood
    );
    
    if (sameTypeMood.length > 0) {
      // Sort by how close the complexity is to the desired complexity
      sameTypeMood.sort((a, b) => 
        Math.abs(a.complexity - complexity) - Math.abs(b.complexity - complexity)
      );
      
      selectedTemplate = sameTypeMood[0];
    } else {
      // Fall back to any template of the same type
      const sameType = promptTemplates.filter(template => template.type === type);
      
      if (sameType.length > 0) {
        selectedTemplate = sameType[Math.floor(Math.random() * sameType.length)];
      } else {
        // Complete fallback - just pick a random template
        selectedTemplate = promptTemplates[Math.floor(Math.random() * promptTemplates.length)];
      }
    }
  }
  
  // Create and return the generated prompt with ID and date
  return {
    ...selectedTemplate,
    id: Math.random().toString(36).substring(2, 12),
    date: new Date().toISOString()
  };
};

// Function to get saved prompts from Supabase
export const getSavedPrompts = async (): Promise<GeneratedPrompt[]> => {
  try {
    const { data, error } = await supabase
      .from('saved_prompts')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    
    return data as GeneratedPrompt[];
  } catch (error) {
    console.error('Error fetching saved prompts:', error);
    // Fallback to localStorage if Supabase fails
    const saved = localStorage.getItem('sparkVibe_savedPrompts');
    return saved ? JSON.parse(saved) : [];
  }
};

// Function to save a prompt to Supabase
export const savePrompt = async (prompt: GeneratedPrompt): Promise<void> => {
  if (!prompt.user_id) {
    throw new Error('User ID is required to save a prompt');
  }
  
  try {
    const { error } = await supabase
      .from('saved_prompts')
      .insert({
        id: prompt.id,
        user_id: prompt.user_id,
        type: prompt.type,
        mood: prompt.mood,
        complexity: prompt.complexity,
        text: prompt.text,
        date: prompt.date
      });
    
    if (error) throw error;
  } catch (error) {
    console.error('Error saving prompt to Supabase:', error);
    // Fallback to localStorage if Supabase fails
    const savedPrompts = await getSavedPrompts();
    const updatedPrompts = [prompt, ...savedPrompts];
    localStorage.setItem('sparkVibe_savedPrompts', JSON.stringify(updatedPrompts));
  }
};
