import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 text-2xl font-heading font-bold hero-text glow-effect">
  <img src="/logo.png" alt="Zynthexion Logo Icon" className="h-28 w-40 object-contain" />
  {/* <span>ZYNTHEXION</span> */}
</div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link text-sm font-medium tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-sm font-medium tracking-wide"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link text-sm font-medium tracking-wide"
            >
              SERVICES
            </button>
          </div>

          {/* Get In Touch Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="hidden md:inline-flex bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
          >
            GET IN TOUCH
          </Button>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 bg-background rounded shadow-lg p-4">
            <button
              onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }}
              className="nav-link text-base font-medium tracking-wide text-left"
            >
              HOME
            </button>
            <button
              onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}
              className="nav-link text-base font-medium tracking-wide text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
              className="nav-link text-base font-medium tracking-wide text-left"
            >
              SERVICES
            </button>
            <Button
              onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
              variant="outline"
              className="w-full mt-2 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
            >
              GET IN TOUCH
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;