import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 xs:py-10 sm:py-12 px-2 xs:px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 text-2xl font-heading font-bold hero-text glow-effect">
  <img src="/logo.png" alt="Zynthexion Logo Icon" className="h-8 w-8 object-contain" />
  <span>Zynthexion</span>
</div>
            <p className="text-xs xs:text-sm text-muted-foreground mt-2">
              Innovation in Software Development
            </p>
            <a href="mailto:info@zynthexion.com" className="block text-xs xs:text-sm text-primary hover:underline mt-1">info@zynthexion.com</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 xs:space-x-6">
            {/* <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a> */}
            <a 
              href="https://www.linkedin.com/company/zynthexion/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a 
              href="#" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        <div className="mt-6 xs:mt-8 pt-6 xs:pt-8 border-t border-border text-center">
          <p className="text-xs xs:text-sm text-muted-foreground">
            © 2025 Zynthexion Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;