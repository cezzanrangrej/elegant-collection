
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Sample video data
const videoItems = [
  {
    id: 1,
    title: 'Cinematic City Tour',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A cinematic journey through urban landscapes.',
    duration: '3:42',
  },
  {
    id: 2,
    title: 'Nature Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Exploring the beauty of natural landscapes.',
    duration: '5:16',
  },
  {
    id: 3,
    title: 'Product Showcase',
    thumbnail: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2069',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Sleek product showcase with dynamic transitions.',
    duration: '2:30',
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="section bg-secondary/30 dark:bg-secondary/10">
      <h2 className="section-title">Video Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Featured Video Player */}
        <div className="lg:row-span-2 animate-fade-in">
          <div className="glass-card overflow-hidden rounded-lg">
            {activeVideo !== null ? (
              <div className="aspect-video w-full">
                <iframe 
                  src={videoItems.find(v => v.id === activeVideo)?.videoUrl}
                  title="Video player"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-secondary to-secondary/50 dark:from-secondary/20 dark:to-secondary/10 flex items-center justify-center">
                <p className="text-center text-foreground/70">Select a video to play</p>
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">
                {activeVideo !== null 
                  ? videoItems.find(v => v.id === activeVideo)?.title 
                  : 'Video Portfolio'
                }
              </h3>
              <p className="text-foreground/70 mb-4">
                {activeVideo !== null 
                  ? videoItems.find(v => v.id === activeVideo)?.description 
                  : 'Browse through my selected video projects and showreels.'
                }
              </p>
              
              {activeVideo !== null && (
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>View on YouTube</span>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Video Thumbnails */}
        <div className="space-y-6 animate-slide-up">
          {videoItems.map((video, index) => (
            <div 
              key={video.id}
              className={`glass-card overflow-hidden rounded-lg flex flex-col sm:flex-row cursor-pointer transition-all duration-300 ${
                activeVideo === video.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
              }`}
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative sm:w-48 aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-base font-medium mb-1">{video.title}</h3>
                <p className="text-sm text-foreground/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
