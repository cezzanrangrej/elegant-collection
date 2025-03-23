
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

// Sample gallery categories and items
const categories = ['All', 'Architecture', 'Nature', 'Portrait', 'Street', 'Abstract', 'Minimalist'];

const galleryItems = [
  {
    id: 1,
    title: 'Urban Architecture',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    description: 'Modern architectural designs in the heart of the city.',
  },
  {
    id: 2,
    title: 'Natural Landscapes',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070',
    description: 'Serene landscapes capturing the beauty of nature.',
  },
  {
    id: 3,
    title: 'Portrait Photography',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888',
    description: 'Expressive portraits that tell a story.',
  },
  {
    id: 4,
    title: 'Street Photography',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1519575706483-221027bfbb31?q=80&w=2071',
    description: 'Candid moments captured on city streets.',
  },
  {
    id: 5,
    title: 'Abstract Art',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1887',
    description: 'Abstract compositions exploring form and color.',
  },
  {
    id: 6,
    title: 'Minimalist Design',
    category: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1888',
    description: 'Clean, minimalist compositions with strong visual impact.',
  },
  {
    id: 7,
    title: 'City Skyline',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144',
    description: 'Breathtaking city skylines from around the world.',
  },
  {
    id: 8,
    title: 'Forest Pathways',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070',
    description: 'Mysterious and serene forest pathways.',
  },
  {
    id: 9,
    title: 'Urban Portrait',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887',
    description: 'Portraits set against urban backgrounds.',
  },
  {
    id: 10,
    title: 'City Life',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1890',
    description: 'The vibrant pulse of city life captured in candid moments.',
  },
  {
    id: 11,
    title: 'Color Study',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1490535004632-42f383ff3f3f?q=80&w=1935',
    description: 'A study of color interaction and harmony.',
  },
  {
    id: 12,
    title: 'Negative Space',
    category: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067',
    description: 'Exploration of negative space in composition.',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const currentImage = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="page-transition pt-24">
      <section className="section">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Photo Gallery</h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-center mb-12">
            A collection of my photography work, showcasing a range of styles and subjects from architectural studies to natural landscapes.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg animate-fade-in cursor-pointer glass-card"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(item.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-10 text-white" 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="relative flex-1 overflow-hidden">
              <img 
                src={currentImage.image} 
                alt={currentImage.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="bg-black/70 p-4 rounded-b-lg">
              <h3 className="text-xl text-white font-medium">{currentImage.title}</h3>
              <p className="text-white/80">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
