import { Battery, Zap, Shield, Clock, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
              <Battery className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">20 anos de experiência</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              Berti Baterias e Acessórios Automotivos
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
              Qualidade e agilidade em baterias automotivas e acessórios para seu veículo em Blumenau/SC
            </h2>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                  Solicite um orçamento
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 border-white bg-white/20 text-white hover:bg-white hover:text-foreground w-full sm:w-auto">
                <a href="#servicos">
                  Nossos serviços
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 border-primary bg-primary/20 text-white hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                <Link to="/vitrine" className="inline-flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Ver vitrine
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div className="text-center p-3 sm:p-4">
                <div className="flex justify-center mb-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold">20+</p>
                <p className="text-xs sm:text-sm text-white/60">Anos no mercado</p>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="flex justify-center mb-2">
                  <Battery className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold">1000+</p>
                <p className="text-xs sm:text-sm text-white/60">Baterias instaladas</p>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="flex justify-center mb-2">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold">100%</p>
                <p className="text-xs sm:text-sm text-white/60">Garantia</p>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="flex justify-center mb-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold">5★</p>
                <p className="text-xs sm:text-sm text-white/60">Avaliação Google</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center shadow-glow backdrop-blur-sm">
                <div className="w-48 h-48 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full bg-gradient-to-br from-primary/50 to-accent/30 flex items-center justify-center">
                  <Battery className="w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 xl:-top-4 xl:-right-4 w-16 h-16 xl:w-24 xl:h-24 rounded-full bg-primary flex items-center justify-center shadow-glow animate-pulse">
                <Zap className="w-8 h-8 xl:w-12 xl:h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
