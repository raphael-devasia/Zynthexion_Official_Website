import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 xs:py-10 sm:py-12 px-2 xs:px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 text-2xl font-heading font-bold hero-text glow-effect">
  <img src="/logo.png" alt="Zynthexion Logo Icon" className="h-28 w-40 object-contain" />
</div>
            <div className="flex items-start mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              <address className="text-xs xs:text-sm text-muted-foreground not-italic leading-snug">
                ZYNTHEXION TECHNOLOGIES PRIVATE LIMITED,<br />
                Suite No. A96, Door No. 63/700, D Space, 6th Floor, Sky Tower,<br />
                Mavoor Road Junction, Bank Road, Kozhikode-673001
              </address>
            </div>
            {/* <p className="text-xs xs:text-sm text-muted-foreground mt-2">
              Innovation in Software Development
            </p> */}
            <div className="flex items-center mt-1">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
  <a href="mailto:info@zynthexion.com" className="text-xs xs:text-sm text-primary hover:underline">info@zynthexion.com</a>
</div>
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