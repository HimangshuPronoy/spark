
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GradientBackground from '@/components/GradientBackground';
import GlassMorphism from '@/components/GlassMorphism';
import FadeIn from '@/components/FadeIn';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast('Account created successfully', {
          description: 'You can now sign in with your credentials.',
        });
        
        // Switch to sign in mode after successful signup
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast('Signed in successfully');
        navigate('/home');
      }
    } catch (error: any) {
      toast('Authentication error', {
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientBackground>
      <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <FadeIn>
            <h1 className="text-3xl font-bold text-center mb-8">
              {isSignUp ? 'Create Your Account' : 'Welcome Back'}
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <GlassMorphism className="p-8">
              <form onSubmit={handleAuth} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="bg-white/5 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="bg-white/5 border-white/10"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 transition-opacity"
                >
                  {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                  </button>
                </div>
              </form>
            </GlassMorphism>
          </FadeIn>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Auth;
