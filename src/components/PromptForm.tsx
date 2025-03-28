
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { CreativeType, Mood, Complexity, generatePrompt } from '@/lib/prompts';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import GlassMorphism from './GlassMorphism';
import FadeIn from './FadeIn';
import { ChevronDown, Sparkles, Edit, Wand } from 'lucide-react';
import { toast } from 'sonner';

const PromptForm = () => {
  const [creativeType, setCreativeType] = useState<CreativeType>('Writing');
  const [mood, setMood] = useState<Mood>('Whimsical');
  const [complexity, setComplexity] = useState<Complexity>(3);
  const [customPrompt, setCustomPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [useCustomPrompt, setUseCustomPrompt] = useState(false);
  const [showCustomPromptDialog, setShowCustomPromptDialog] = useState(false);

  const [typeOpen, setTypeOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const generatedPrompt = await generatePrompt(
        creativeType, 
        mood, 
        complexity, 
        useCustomPrompt ? customPrompt : undefined
      );
      navigate('/prompt', { state: { prompt: generatedPrompt } });
    } catch (error) {
      toast('Error generating prompt', {
        description: 'Please try again later.',
      });
      setGenerating(false);
    }
  };

  const handleCustomPromptSubmit = () => {
    setUseCustomPrompt(true);
    setShowCustomPromptDialog(false);
    toast('Custom prompt added', {
      description: 'Your custom prompt will be used for generation.',
    });
  };

  const creativeTypes: CreativeType[] = [
    'Writing', 
    'Art', 
    'Design', 
    'Coding', 
    'Marketing', 
    'Business', 
    'Education', 
    'Research',
    'Music',
    'Video'
  ];
  
  const moodTypes: Mood[] = ['Whimsical', 'Dark', 'Inspiring', 'Abstract', 'Technical', 'Professional'];

  return (
    <FadeIn className="w-full max-w-md mx-auto">
      <GlassMorphism className="p-6 md:p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-center mb-6">Create Your Spark</h2>
          
          {/* Custom Prompt Button */}
          <div className="flex justify-center mb-2">
            <Button 
              variant="outline" 
              className="gap-2 text-spark-teal border-spark-teal/30 hover:bg-spark-teal/10"
              onClick={() => setShowCustomPromptDialog(true)}
            >
              {useCustomPrompt ? <Edit size={16} /> : <Wand size={16} />}
              {useCustomPrompt ? "Edit Custom Prompt" : "Add Custom Prompt"}
            </Button>
          </div>
          
          {/* Custom Prompt Dialog */}
          <Dialog open={showCustomPromptDialog} onOpenChange={setShowCustomPromptDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Custom Prompt</DialogTitle>
                <DialogDescription>
                  Enter your own custom prompt for the AI to use directly instead of parameters.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Textarea
                  placeholder="Enter your custom prompt here..."
                  className="min-h-[100px]"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  The AI will use this prompt directly instead of generating one based on your parameters.
                </p>
              </div>
              <DialogFooter>
                <Button 
                  onClick={() => {
                    setUseCustomPrompt(false);
                    setShowCustomPromptDialog(false);
                  }} 
                  variant="outline"
                >
                  Use Parameters Instead
                </Button>
                <Button onClick={handleCustomPromptSubmit}>
                  Save Custom Prompt
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          {/* Parameter controls - conditionally show based on useCustomPrompt */}
          {!useCustomPrompt && (
            <>
              {/* Creative Type Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="creative-type">Task Type</Label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center"
                    onClick={() => setTypeOpen(!typeOpen)}
                  >
                    <span>{creativeType}</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${typeOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {typeOpen && (
                    <div className="absolute z-10 mt-1 w-full rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden">
                      <div className="py-1 max-h-60 overflow-y-auto">
                        {creativeTypes.map((type) => (
                          <button
                            key={type}
                            className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                            onClick={() => {
                              setCreativeType(type);
                              setTypeOpen(false);
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mood Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="mood">Style</Label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center"
                    onClick={() => setMoodOpen(!moodOpen)}
                  >
                    <span>{mood}</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${moodOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {moodOpen && (
                    <div className="absolute z-10 mt-1 w-full rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden">
                      <div className="py-1">
                        {moodTypes.map((moodType) => (
                          <button
                            key={moodType}
                            className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                            onClick={() => {
                              setMood(moodType);
                              setMoodOpen(false);
                            }}
                          >
                            {moodType}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Complexity Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="complexity">Complexity</Label>
                  <span className="text-sm bg-white/10 px-2 py-1 rounded-full">{complexity}</span>
                </div>
                <Slider
                  id="complexity"
                  defaultValue={[3]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => setComplexity(value[0] as Complexity)}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Simple</span>
                  <span>Complex</span>
                </div>
              </div>
            </>
          )}
          
          {/* Custom Prompt Note - show when custom prompt is active */}
          {useCustomPrompt && (
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-2">Custom Prompt Active</h3>
              <p className="text-sm text-white/70 mb-2 line-clamp-3">{customPrompt}</p>
              <div className="flex justify-end">
                <Button 
                  variant="ghost" 
                  className="h-8 px-2 text-xs"
                  onClick={() => setUseCustomPrompt(false)}
                >
                  Use Parameters Instead
                </Button>
              </div>
            </div>
          )}
          
          {/* Generate Button */}
          <Button 
            onClick={handleGenerate}
            disabled={generating || (useCustomPrompt && !customPrompt.trim())}
            className="w-full py-6 text-lg bg-gradient-to-r from-spark-teal to-spark-blue hover:opacity-90 transition-opacity"
          >
            <Sparkles className={`mr-2 h-5 w-5 ${generating ? 'animate-pulse' : ''}`} />
            {generating ? 'Generating...' : 'Generate'}
          </Button>
        </div>
      </GlassMorphism>
    </FadeIn>
  );
};

export default PromptForm;
