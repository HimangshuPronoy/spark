
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link 
            to="#features" 
            className="text-white/70 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link 
            to="#how-it-works" 
            className="text-white/70 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </Link>
          <Link 
            to="/auth" 
            className="text-white/70 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Sign In
          </Link>
          <Link to="/home">
            <Button 
              className="bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90"
              onClick={closeMenu}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </Link>
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
            <Link 
              to="#features" 
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link 
              to="#how-it-works" 
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={closeMenu}
            >
              How It Works
            </Link>
            <Link 
              to="/auth" 
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={closeMenu}
            >
              Sign In
            </Link>
            <Link to="/home" onClick={closeMenu}>
              <Button 
                className="bg-gradient-to-r from-spark-pink to-spark-purple hover:opacity-90 w-full"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;
