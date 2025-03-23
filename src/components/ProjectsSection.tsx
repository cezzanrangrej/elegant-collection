
import { ExternalLink, Github, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce platform with a sleek UI and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1887',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955',
    tags: ['React', 'Next.js', 'Framer Motion', 'Styled Components'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects with collaborative features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072',
    tags: ['Vue.js', 'TypeScript', 'Firebase', 'Vuex'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const ProjectsSection = () => {
  return (
    <section className="section">
      <h2 className="section-title">Development Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card group animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 flex space-x-2">
                  <Button size="sm" className="rounded-full flex items-center gap-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="rounded-full flex items-center gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg" className="rounded-full flex items-center gap-2">
          <Link2 className="h-5 w-5" />
          <span>View All Projects</span>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
