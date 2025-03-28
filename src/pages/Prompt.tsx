
import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw, Save, Copy, CheckCheck } from 'lucide-react';
import GlassMorphism from '@/components/GlassMorphism';
import GradientBackground from '@/components/GradientBackground';
import { toast } from 'sonner';
import { 
  GeneratedPrompt, 
  generatePrompt, 
  savePrompt 
} from '@/lib/prompts';
import FadeIn from '@/components/FadeIn';
import { AuthContext } from '@/App';

const Prompt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState<GeneratedPrompt | null>(null);
  const [copied, setCopied] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Get prompt from location state or redirect to home
    if (location.state?.prompt) {
      setPrompt(location.state.prompt);
    } else {
      navigate('/home');
    }
  }, [location.state, navigate]);

  const handleRegenerate = async () => {
    if (prompt) {
      setRegenerating(true);
      try {
        // Note: we don't pass custom prompt here as we want to regenerate 
        // based on parameters only
        const newPrompt = await generatePrompt(
          prompt.type,
          prompt.mood,
          prompt.complexity
        );
        setPrompt(newPrompt);
      } catch (error) {
        toast('Error regenerating prompt', {
          description: 'Please try again later.',
        });
      } finally {
        setRegenerating(false);
      }
    }
  };

  const handleSave = async () => {
    if (!prompt) return;
    
    if (!user) {
      toast('Authentication required', {
        description: 'Please sign in to save prompts.',
        action: {
          label: "Sign In",
          onClick: () => navigate('/auth'),
        }
      });
      return;
    }
    
    setSaving(true);
    try {
      await savePrompt({
        ...prompt,
        user_id: user.id,
      });
      
      toast('Prompt saved successfully', {
        description: 'You can view it in your history.',
        action: {
          label: "View History",
          onClick: () => navigate('/history'),
        }
      });
    } catch (error) {
      toast('Error saving prompt', {
        description: 'Please try again later.',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast('Copied to clipboard');
    }
  };

  if (!prompt) {
    return null;
  }

  return (
    <GradientBackground>
      <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Your Creative Prompt</h1>
                <div className="flex space-x-2 mt-2">
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
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <GlassMorphism className="p-8 mb-8">
              <p className="text-xl leading-relaxed">{prompt.text}</p>
              <button 
                onClick={handleCopyToClipboard}
                className="mt-5 text-white/50 hover:text-white transition-colors flex items-center"
              >
                {copied ? (
                  <>
                    <CheckCheck size={16} className="mr-1" />
                    <span className="text-sm">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-1" />
                    <span className="text-sm">Copy to clipboard</span>
                  </>
                )}
              </button>
            </GlassMorphism>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleRegenerate}
                disabled={regenerating}
                variant="outline"
                className="flex-1 py-6 border-spark-teal/50 text-spark-teal hover:bg-spark-teal/10"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${regenerating ? 'animate-spin' : ''}`} />
                {regenerating ? 'Regenerating...' : 'Regenerate'}
              </Button>
              
              <Button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-6 bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 transition-opacity"
              >
                <Save className="mr-2 h-4 w-4" />
                {saving ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Prompt;
