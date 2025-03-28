
import GradientBackground from '@/components/GradientBackground';
import PromptForm from '@/components/PromptForm';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, Star, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <GradientBackground>
      <div className="pt-28 pb-16 px-4 min-h-screen w-full overflow-y-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-4">Spark Your Creativity</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-white/70 max-w-lg text-center mx-auto mb-12">
            Select your preferences below and we'll generate a creative prompt tailored just for you.
          </p>
        </FadeIn>
        
        <PromptForm />

        {/* Featured Examples Section */}
        <section className="w-full max-w-5xl mx-auto mt-24 mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">Featured Examples</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fantasy Voyage",
                description: "Create a narrative about a journey through an enchanted forest where trees whisper ancient secrets.",
                icon: <Sparkles className="text-spark-pink" />
              },
              {
                title: "Urban Perspectives",
                description: "Design a series of minimalist illustrations capturing the essence of city life at different hours.",
                icon: <Star className="text-spark-teal" />
              },
              {
                title: "Data Storytelling",
                description: "Develop an infographic that transforms climate data into a compelling visual narrative.",
                icon: <BarChart className="text-spark-purple" />
              }
            ].map((example, index) => (
              <FadeIn key={index} delay={100 * (index + 1)}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="mb-4">{example.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-white/70 mb-4 flex-grow">{example.description}</p>
                  <Button variant="ghost" className="self-start hover:bg-white/10">
                    Try this prompt
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Creative Exploration Section */}
        <section className="w-full max-w-5xl mx-auto mb-16 px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">Explore Your Creative Potential</h2>
          </FadeIn>
          
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Endless Possibilities</h3>
                  <p className="text-white/70 mb-6">
                    Whether you're a writer seeking inspiration, an artist looking for new concepts, 
                    or a designer exploring fresh ideas, our prompt generator helps you break 
                    through creative blocks and discover unexplored territories.
                  </p>
                  <ul className="space-y-2 text-white/70 mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-spark-pink" />
                      <span>Customized to your preferences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-spark-teal" />
                      <span>Adjustable complexity levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-spark-purple" />
                      <span>Save and revisit your favorite prompts</span>
                    </li>
                  </ul>
                  <Link to="/home">
                    <Button className="bg-gradient-to-r from-spark-pink to-spark-purple">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="glass-darker rounded-2xl p-6 bg-gradient-to-br from-black/40 to-black/20 border border-white/10">
                  <div className="space-y-4">
                    <div className="h-12 w-full bg-white/5 rounded-md animate-pulse-slow"></div>
                    <div className="h-12 w-3/4 bg-white/5 rounded-md animate-pulse-slow delay-300"></div>
                    <div className="h-32 w-full bg-white/5 rounded-md animate-pulse-slow delay-500"></div>
                    <div className="h-12 w-1/2 bg-white/5 rounded-md animate-pulse-slow delay-600"></div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full max-w-5xl mx-auto mb-16 px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "This tool completely transformed my creative process. I use it daily for new writing ideas!",
                author: "Alex K., Writer"
              },
              {
                quote: "As an illustrator, I often hit creative blocks. These prompts always help me see things from fresh perspectives.",
                author: "Maya T., Artist"
              },
              {
                quote: "The complexity adjustment is brilliant. I can get simple concepts for quick projects or deep, layered ideas for major works.",
                author: "James L., Creative Director"
              }
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={100 * (index + 1)}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <Star className="text-spark-yellow h-6 w-6" />
                  </div>
                  <p className="text-white/80 mb-4 flex-grow italic">"{testimonial.quote}"</p>
                  <p className="text-white/60 text-sm">{testimonial.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-4xl mx-auto mb-8 px-4">
          <FadeIn>
            <div className="glass-card bg-gradient-to-r from-black/50 via-black/30 to-black/50 p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Join thousands of creative minds who use SparkVibe to generate fresh ideas and break through creative blocks.
              </p>
              <Link to="/home">
                <Button size="lg" className="bg-gradient-to-r from-spark-pink via-spark-purple to-spark-teal">
                  <Sparkles className="mr-2" />
                  Generate Your First Prompt
                </Button>
              </Link>
            </div>
          </FadeIn>
        </section>
      </div>
    </GradientBackground>
  );
};

export default Index;
