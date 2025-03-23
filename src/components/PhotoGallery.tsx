
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample gallery data
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
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
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
    <section className="section">
      <h2 className="section-title">Photography Portfolio</h2>
      
      <div className="photo-grid">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden rounded-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => openLightbox(item.id)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
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
    </section>
  );
};

export default PhotoGallery;
