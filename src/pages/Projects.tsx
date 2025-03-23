
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

// Sample projects data
const categories = ['All', 'Web Design', 'React', 'Vue.js', 'E-Commerce', 'Portfolio'];

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce platform with a sleek UI and seamless checkout experience. Features include product filtering, user accounts, shopping cart, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1887',
    category: 'E-Commerce',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'June 2023',
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals. The project includes multiple page layouts, animations, and a lightweight CMS for content management.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955',
    category: 'Portfolio',
    tags: ['React', 'Next.js', 'Framer Motion', 'Styled Components'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'August 2023',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects with collaborative features. Users can create tasks, set deadlines, assign team members, and track progress in real-time.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072',
    category: 'Web Design',
    tags: ['Vue.js', 'TypeScript', 'Firebase', 'Vuex'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'April 2023',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays real-time weather information, forecasts, and historical data. The application uses multiple weather APIs for comprehensive data.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2065',
    category: 'React',
    tags: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'February 2023',
  },
  {
    id: 5,
    title: 'Restaurant Website',
    description: 'A responsive website for a restaurant featuring an online menu, reservation system, and customer reviews. The design emphasizes high-quality food photography and user experience.',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070',
    category: 'Web Design',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'December 2022',
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for social media management that integrates with multiple platforms. Features include content scheduling, analytics, and engagement tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    category: 'Vue.js',
    tags: ['Vue.js', 'Vuetify', 'Node.js', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    date: 'October 2023',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <div className="page-transition pt-24">
      <section className="section">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Development Projects</h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            A showcase of my front-end development work, featuring websites, applications, and interactive experiences.
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-xs text-foreground/70 mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{project.date}</span>
                  </div>
                  
                  <p className="text-foreground/70 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1 group hover:text-primary transition-colors px-0"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70">No projects found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveCategory('All')}
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
