import { Battery, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-hero pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Berti Baterias e Acessórios Automotivos
            </h1>

            <h2 className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Qualidade e agilidade em baterias automotivas e acessórios para seu veículo em Blumenau/SC
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                  Solicite um orçamento
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">
                <a href="#servicos">
                  Nossos serviços
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm text-white/60">Anos no mercado</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm text-white/60">Baterias instaladas</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-white/60">Garantia</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">5★</p>
                <p className="text-sm text-white/60">Avaliação Google</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center shadow-glow">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/50 to-accent/30 flex items-center justify-center">
                  <Battery className="w-32 h-32 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-glow animate-pulse">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
