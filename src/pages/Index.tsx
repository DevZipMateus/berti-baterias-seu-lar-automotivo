import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Vitrine iframe */}
        <section id="vitrine" className="w-full bg-black">
          <iframe 
            src="https://diegobertibaterias.egestor.com.br/vitrine/" 
            className="w-full border-none"
            style={{ height: '100vh' }}
            title="Vitrine - Berti Baterias"
          />
        </section>

        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
