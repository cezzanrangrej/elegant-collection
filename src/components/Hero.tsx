
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToProjects = () => {
    navigate('/projects');
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background/80 z-10"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-20">
        <div className="animate-slide-down">
          <span className="text-sm md:text-base uppercase tracking-widest text-foreground/70">Visual Storyteller</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Crafting <span className="text-primary dark:text-white">Digital</span> <br />
            Experiences
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mt-6 text-foreground/80">
            A portfolio of creative work spanning photography, video editing, and 
            front-end development. Each project tells a unique story.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full" onClick={handleNavigateToProjects}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" onClick={handleNavigateToContact}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Button 
          variant="ghost" 
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <ArrowDownCircle className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
