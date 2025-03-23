
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PhotoGallery from '@/components/PhotoGallery';
import VideoShowcase from '@/components/VideoShowcase';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Hero />
      <About />
      <PhotoGallery />
      <VideoShowcase />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
