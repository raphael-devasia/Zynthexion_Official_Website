import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-glow-gradient opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold hero-text glow-effect animate-float break-words">
            ZYNTHEXION
          </h1>
          <div className="mt-6 xs:mt-8 text-base xs:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-2xl mx-auto px-2">
            Leading the future of software development with innovation and excellence
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 xs:bottom-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-primary hover:text-primary-glow transition-colors duration-300 group"
        >
          <span className="text-sm font-medium tracking-wide">SCROLL DOWN</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;