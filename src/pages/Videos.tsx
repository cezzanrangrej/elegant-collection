
import { useEffect, useState } from 'react';
import { Play, Clock, Tag } from 'lucide-react';
import Footer from '@/components/Footer';

// Sample video categories and items
const categories = ['All', 'Cinematic', 'Documentary', 'Commercial', 'Animation', 'Travel'];

const videoItems = [
  {
    id: 1,
    title: 'Cinematic City Tour',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144',
    category: 'Cinematic',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A cinematic journey through urban landscapes.',
    duration: '3:42',
    tags: ['Urban', 'Cinematic', 'Architecture'],
  },
  {
    id: 2,
    title: 'Nature Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070',
    category: 'Documentary',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Exploring the beauty of natural landscapes.',
    duration: '5:16',
    tags: ['Nature', 'Wildlife', 'Documentary'],
  },
  {
    id: 3,
    title: 'Product Showcase',
    thumbnail: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2069',
    category: 'Commercial',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Sleek product showcase with dynamic transitions.',
    duration: '2:30',
    tags: ['Product', 'Commercial', 'Advertising'],
  },
  {
    id: 4,
    title: 'Motion Graphics Reel',
    thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2074',
    category: 'Animation',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Motion graphics and animation showcase.',
    duration: '1:45',
    tags: ['Animation', 'Motion Graphics', 'Creative'],
  },
  {
    id: 5,
    title: 'Travel Montage: Japan',
    thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092',
    category: 'Travel',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Visual journey through the cities and countryside of Japan.',
    duration: '4:20',
    tags: ['Travel', 'Japan', 'Culture'],
  },
  {
    id: 6,
    title: 'Urban Hyperlapse',
    thumbnail: 'https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?q=80&w=2036',
    category: 'Cinematic',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Fast-paced hyperlapse through city streets.',
    duration: '2:15',
    tags: ['Hyperlapse', 'City', 'Cinematic'],
  },
];

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState(videoItems);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredVideos(videoItems);
    } else {
      setFilteredVideos(videoItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedVideo(null);
  };

  return (
    <div className="page-transition pt-24">
      <section className="section">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Video Projects</h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            A showcase of my video editing and filmmaking work across various genres and styles.
          </p>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Video Player */}
            <div className="lg:col-span-2 glass-card overflow-hidden rounded-lg animate-fade-in">
              {selectedVideo !== null ? (
                <div className="aspect-video">
                  <iframe 
                    src={videoItems.find(v => v.id === selectedVideo)?.videoUrl}
                    title="Video player"
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-secondary/50 to-secondary/10 dark:from-secondary/20 dark:to-secondary/5 flex items-center justify-center">
                  <p className="text-center text-foreground/70">Select a video to play</p>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">
                  {selectedVideo !== null 
                    ? videoItems.find(v => v.id === selectedVideo)?.title 
                    : 'Video Portfolio'
                  }
                </h3>
                
                {selectedVideo !== null && (
                  <>
                    <div className="flex items-center gap-4 text-sm text-foreground/70 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {videoItems.find(v => v.id === selectedVideo)?.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        <span>
                          {videoItems.find(v => v.id === selectedVideo)?.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-4">
                      {videoItems.find(v => v.id === selectedVideo)?.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {videoItems
                        .find(v => v.id === selectedVideo)
                        ?.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-secondary/70 dark:bg-secondary/30 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </>
                )}
                
                {selectedVideo === null && (
                  <p className="text-foreground/70">
                    Browse through my selected video projects and showreels. Click on any thumbnail to watch.
                  </p>
                )}
              </div>
            </div>
            
            {/* Video List */}
            <div className="animate-slide-up space-y-4">
              <h3 className="text-xl font-medium mb-4">
                {activeCategory === 'All' ? 'All Videos' : `${activeCategory} Videos`}
              </h3>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredVideos.map((video) => (
                  <div 
                    key={video.id}
                    className={`glass-card overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedVideo === video.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <div className="flex">
                      <div className="relative w-1/3 aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="p-3 w-2/3">
                        <h4 className="font-medium line-clamp-1">{video.title}</h4>
                        <p className="text-xs text-foreground/70 line-clamp-2 mt-1">
                          {video.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs bg-secondary/50 px-2 py-0.5 rounded-full">
                            {video.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Videos;
