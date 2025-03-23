
import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="page-transition pt-24">
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
