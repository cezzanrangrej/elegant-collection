
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-display font-semibold">Portfolio</h3>
            <p className="text-foreground/70 mt-2">
              Creating digital experiences through photography, <br className="hidden md:block" />
              video editing, and front-end development.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full animate-pulse-slow"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex items-center space-x-6 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
