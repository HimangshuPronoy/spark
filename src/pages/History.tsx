
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassMorphism from '@/components/GlassMorphism';
import GradientBackground from '@/components/GradientBackground';
import { Copy, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { GeneratedPrompt, getSavedPrompts } from '@/lib/prompts';
import FadeIn from '@/components/FadeIn';

const History = () => {
  const [savedPrompts, setSavedPrompts] = useState<GeneratedPrompt[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrompts = async () => {
      setLoading(true);
      try {
        const prompts = await getSavedPrompts();
        setSavedPrompts(prompts);
      } catch (error) {
        toast('Error loading prompts', { 
          description: 'There was a problem loading your saved prompts.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast('Copied to clipboard');
  };

  const handleViewPrompt = (prompt: GeneratedPrompt) => {
    navigate('/prompt', { state: { prompt } });
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy • h:mm a');
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <GradientBackground>
      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl font-bold mb-8">Your Saved Prompts</h1>
          </FadeIn>
          
          {loading ? (
            <FadeIn delay={200}>
              <GlassMorphism className="py-16 px-6 text-center">
                <p className="text-xl">Loading your prompts...</p>
              </GlassMorphism>
            </FadeIn>
          ) : savedPrompts.length === 0 ? (
            <FadeIn delay={200}>
              <GlassMorphism className="py-16 px-6 text-center">
                <h2 className="text-xl font-medium mb-4">No saved prompts yet</h2>
                <p className="text-white/70 mb-8">
                  Generate some prompts and save them to see your history here.
                </p>
                <Button 
                  onClick={() => navigate('/home')}
                  className="bg-gradient-to-r from-spark-teal to-spark-blue hover:opacity-90"
                >
                  Generate Prompts
                </Button>
              </GlassMorphism>
            </FadeIn>
          ) : (
            <div className="space-y-6">
              {savedPrompts.map((prompt, index) => (
                <FadeIn key={prompt.id} delay={100 * (index + 1)}>
                  <GlassMorphism className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex space-x-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10">
                            {prompt.type}
                          </span>
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10">
                            {prompt.mood}
                          </span>
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10">
                            Complexity: {prompt.complexity}
                          </span>
                        </div>
                        <span className="text-sm text-white/50">
                          {formatDate(prompt.date)}
                        </span>
                      </div>
                      
                      <p className="text-lg mb-4">{prompt.text}</p>
                      
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => handleCopyToClipboard(prompt.text)}
                          className="text-white/50 hover:text-white transition-colors flex items-center"
                        >
                          <Copy size={16} className="mr-1" />
                          <span className="text-sm">Copy</span>
                        </button>
                        <button
                          onClick={() => handleViewPrompt(prompt)}
                          className="text-white/50 hover:text-white transition-colors flex items-center"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          <span className="text-sm">View</span>
                        </button>
                      </div>
                    </div>
                  </GlassMorphism>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </GradientBackground>
  );
};

export default History;
