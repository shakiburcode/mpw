import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Shakiburrahmanwork@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent hover:opacity-80 transition-smooth"
            >
              Portfolio
            </button>
            <p className="mt-2 text-muted-foreground max-w-md">
              Building digital experiences with passion, precision, and purpose.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                className="hover:text-primary transition-smooth hover:scale-110"
                asChild
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p className="flex items-center">
              © {currentYear} Md. Shakibur Rahman. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              using React & Tailwind CSS
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;