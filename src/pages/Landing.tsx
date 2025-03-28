
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, PenTool, Palette, Star, MessageSquare, Image, Users, Award, Rocket } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';
import FadeIn from '@/components/FadeIn';
import LandingNav from '@/components/LandingNav';
import { Separator } from '@/components/ui/separator';
import GlassMorphism from '@/components/GlassMorphism';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <GradientBackground>
      <LandingNav />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn delay={300}>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 mb-4">
              Creativity at your fingertips
            </span>
          </FadeIn>
          
          <FadeIn delay={500}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Ignite Your Next</span> <br />
              <span>Masterpiece</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={700}>
            <p className="text-xl md:text-2xl text-white/80 mb-10">
              Creative prompts, instantly. Powered by AI.
            </p>
          </FadeIn>
          
          <FadeIn delay={900}>
            <Button 
              onClick={() => navigate('/home')}
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 transition-opacity shadow-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Spark It Up
            </Button>
          </FadeIn>
          
          <FadeIn delay={1100} className="mt-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="glass rounded-2xl overflow-hidden h-[300px] sm:h-[400px] max-w-xl mx-auto">
                <div className="grid grid-cols-3 gap-4 p-6 h-full">
                  <div className="col-span-1">
                    <div className="h-full space-y-4 flex flex-col justify-center items-center">
                      <div className="bg-white/5 rounded-lg w-full h-16 animate-pulse-slow"></div>
                      <div className="bg-white/5 rounded-lg w-full h-16 animate-pulse-slow delay-300"></div>
                      <div className="bg-white/5 rounded-lg w-full h-16 animate-pulse-slow delay-500"></div>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="glass-darker w-full h-[85%] rounded-lg p-4 flex flex-col justify-center">
                      <div className="h-4 w-3/4 bg-white/10 rounded mb-3 animate-pulse-slow"></div>
                      <div className="h-4 w-5/6 bg-white/10 rounded mb-3 animate-pulse-slow delay-200"></div>
                      <div className="h-4 w-2/3 bg-white/10 rounded mb-3 animate-pulse-slow delay-400"></div>
                      <div className="h-4 w-4/5 bg-white/10 rounded animate-pulse-slow delay-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Unlock Your <span className="text-gradient">Creative Potential</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn delay={300}>
              <div className="glass-card p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-spark-pink to-spark-purple rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Inspiration</h3>
                <p className="text-white/70">
                  Generate creative prompts for writing, art, music, and more with a single click.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="glass-card p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-spark-teal to-spark-blue rounded-full flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Prompts</h3>
                <p className="text-white/70">
                  Tailor your creative prompts to match your style and preferences with advanced customization.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={700}>
              <div className="glass-card p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-spark-purple to-spark-pink rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save & Organize</h3>
                <p className="text-white/70">
                  Keep track of your favorite prompts and create collections for different projects.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div id="how-it-works" className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It <span className="text-gradient">Works</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <FadeIn delay={300}>
              <div className="glass p-8 rounded-2xl relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-spark-pink to-spark-purple rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 mt-6">Choose Your Format</h3>
                <p className="text-white/70 mb-4">
                  Select from writing, art, music, or other creative formats to generate tailored prompts.
                </p>
                <Separator className="my-4 bg-white/10" />
                <p className="text-white/50 italic">
                  "SparkVibe helped me break through my creative block in minutes!"
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="glass p-8 rounded-2xl relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-spark-teal to-spark-blue rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 mt-6">Get Your Prompt</h3>
                <p className="text-white/70 mb-4">
                  Receive AI-generated prompts crafted to inspire your next creative project.
                </p>
                <Separator className="my-4 bg-white/10" />
                <p className="text-white/50 italic">
                  "The quality and variety of prompts is incredible - it's like having a creative partner."
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={700} className="mt-20 text-center">
            <Button 
              onClick={() => navigate('/home')}
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-spark-teal to-spark-blue hover:opacity-90 transition-opacity shadow-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating Now
            </Button>
          </FadeIn>
        </div>
      </div>
      
      <div id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What People Are <span className="text-gradient">Saying</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn delay={300}>
              <GlassMorphism className="p-6 h-full">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex space-x-1">
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                  </div>
                  <p className="text-white/80 italic">
                    "SparkVibe completely transformed my creative process. I use it daily for my design work and it's been a game-changer!"
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold">Alex K.</p>
                    <p className="text-sm text-white/60">Graphic Designer</p>
                  </div>
                </div>
              </GlassMorphism>
            </FadeIn>
            
            <FadeIn delay={500}>
              <GlassMorphism className="p-6 h-full">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex space-x-1">
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                  </div>
                  <p className="text-white/80 italic">
                    "As a writer, I often hit creative blocks. SparkVibe has been like having a creative muse on demand. Incredible tool!"
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold">Maya J.</p>
                    <p className="text-sm text-white/60">Author</p>
                  </div>
                </div>
              </GlassMorphism>
            </FadeIn>
            
            <FadeIn delay={700}>
              <GlassMorphism className="p-6 h-full">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex space-x-1">
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                    <Star className="w-5 h-5 text-spark-yellow" fill="#fbed96" />
                  </div>
                  <p className="text-white/80 italic">
                    "I teach creative writing, and I now use SparkVibe for all my class exercises. My students love the prompts it generates!"
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold">Daniel R.</p>
                    <p className="text-sm text-white/60">Writing Instructor</p>
                  </div>
                </div>
              </GlassMorphism>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div id="use-cases" className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Spark Your <span className="text-gradient">Creativity</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <FadeIn delay={300}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-gradient-to-br from-spark-pink to-spark-purple p-4 rounded-2xl">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Writing & Storytelling</h3>
                  <p className="text-white/70">
                    Break through writer's block with character ideas, plot twists, and narrative prompts that inspire your next bestseller or short story.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-gradient-to-br from-spark-blue to-spark-teal p-4 rounded-2xl">
                  <Image className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visual Arts & Design</h3>
                  <p className="text-white/70">
                    Discover fresh concepts for illustrations, paintings, and design projects with prompts that challenge your visual creativity.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-gradient-to-br from-spark-teal to-spark-yellow p-4 rounded-2xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-white/70">
                    Energize brainstorming sessions and team meetings with thought-provoking prompts that get everyone's creative juices flowing.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={600}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-gradient-to-br from-spark-yellow to-spark-pink p-4 rounded-2xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education & Learning</h3>
                  <p className="text-white/70">
                    Transform classroom activities and assignments with creative prompts that engage students and encourage critical thinking.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div id="getting-started" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn delay={300} className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-gradient">Elevate</span> Your Creative Process?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Start generating personalized creative prompts in seconds. No more staring at blank pages or screens – let SparkVibe ignite your imagination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/home')}
                  className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
                <Button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-white/20 hover:bg-white/5 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={500} className="w-full md:w-1/2">
              <div className="relative">
                <div className="glass-card p-8 h-[300px] sm:h-[350px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-spark-pink/20 blur-[50px] animate-pulse-slow" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-spark-teal/20 blur-[60px] animate-pulse-slow delay-300" />
                    <div className="absolute top-[50%] right-[20%] w-[25%] h-[25%] rounded-full bg-spark-purple/20 blur-[40px] animate-pulse-slow delay-600" />
                  </div>
                  <div className="relative z-10 text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-spark-yellow mb-4 animate-pulse-slow" />
                    <h3 className="text-2xl font-bold mb-2">Unlimited Possibilities</h3>
                    <p className="text-white/70 max-w-sm mx-auto">
                      With our advanced AI, discover new creative directions you never thought possible.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div className="py-12 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-spark-pink to-spark-purple bg-clip-text text-transparent">
                SparkVibe
              </h3>
              <p className="text-white/50 mt-2">Ignite your creativity</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="/terms" className="text-white/70 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/10" />
          
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} SparkVibe. All rights reserved.
          </p>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Landing;
