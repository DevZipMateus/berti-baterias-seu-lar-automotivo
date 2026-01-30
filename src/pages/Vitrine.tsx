import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Disable scrolling on the page
    document.body.style.overflow = 'hidden';
    
    // Hide MonteSite badge on this page
    const montesiteBadge = document.getElementById('montesite-footer-badge');
    if (montesiteBadge) {
      montesiteBadge.style.display = 'none';
    }
    
    return () => {
      // Re-enable scrolling when leaving the page
      document.body.style.overflow = 'auto';
      
      // Show MonteSite badge again when leaving
      if (montesiteBadge) {
        montesiteBadge.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      
      {/* Main content area - iframe */}
      <main 
        className="w-full flex-1"
        style={{ 
          marginTop: '80px', 
          height: 'calc(100vh - 80px)' 
        }}
      >
        <iframe 
          src="https://diegobertibaterias.egestor.com.br/vitrine/" 
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Demonstração de Vitrine - Berti Baterias"
        />
      </main>
    </div>
  );
};

export default Vitrine;
