
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/App';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll for transparent/solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sign out
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast('Error signing out', { description: error.message });
    } else {
      toast('Signed out successfully');
    }
    closeMenu();
  };

  // Only show navbar on specific routes
  if (location.pathname === '/') return null;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-black/50 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto px-4 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-spark-pink to-spark-purple bg-clip-text text-transparent">
          SparkVibe
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {user ? (
            <>
              <Link 
                to="/home" 
                className="text-white/70 hover:text-white transition-colors"
                onClick={closeMenu}
              >
                Create
              </Link>
              <Link 
                to="/history" 
                className="text-white/70 hover:text-white transition-colors"
                onClick={closeMenu}
              >
                History
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-white/70 hover:text-white transition-colors"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button 
                className="bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90"
                onClick={closeMenu}
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="flex flex-col space-y-4 p-4">
            {user ? (
              <>
                <Link 
                  to="/home" 
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={closeMenu}
                >
                  Create
                </Link>
                <Link 
                  to="/history" 
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={closeMenu}
                >
                  History
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={handleSignOut}
                  className="text-white/70 hover:text-white transition-colors justify-start"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/auth" onClick={closeMenu}>
                <Button 
                  className="bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 w-full"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
