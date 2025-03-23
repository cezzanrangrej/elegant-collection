
import { Camera, Code, Film, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg">
              I'm a multidisciplinary creative specializing in visual storytelling through photography, 
              video editing, and front-end development. With an eye for detail and a passion for 
              creating immersive digital experiences, I bring ideas to life through captivating visuals 
              and intuitive interfaces.
            </p>
            <p className="text-lg">
              My approach combines technical expertise with artistic vision, allowing me to create work 
              that is both aesthetically pleasing and functionally sound. Whether I'm behind the camera, 
              in the editing suite, or coding a website, my goal is always the same: to create meaningful 
              experiences that resonate with audiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            <div className="glass-card p-6 hover-scale">
              <Camera className="h-10 w-10 mb-4 text-primary dark:text-white" />
              <h3 className="text-xl font-medium mb-2">Photography</h3>
              <p className="text-foreground/70">Capturing moments and emotions through compelling imagery.</p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <Film className="h-10 w-10 mb-4 text-primary dark:text-white" />
              <h3 className="text-xl font-medium mb-2">Video Editing</h3>
              <p className="text-foreground/70">Crafting engaging narratives through dynamic editing techniques.</p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <Code className="h-10 w-10 mb-4 text-primary dark:text-white" />
              <h3 className="text-xl font-medium mb-2">Development</h3>
              <p className="text-foreground/70">Building responsive, intuitive websites and applications.</p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <Award className="h-10 w-10 mb-4 text-primary dark:text-white" />
              <h3 className="text-xl font-medium mb-2">Experience</h3>
              <p className="text-foreground/70">Years of professional expertise across creative disciplines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
