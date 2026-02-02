import { Users, Target, Award, History } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import storeInterior from '@/assets/store-interior.jpg';
import batteryTesting from '@/assets/battery-testing.jpg';

const About = () => {
  return (
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Nossa história
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Sobre a Berti Baterias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Há 20 anos no mercado buscando trazer cada dia mais qualidade e agilidade em nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* History */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <History className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Nossa trajetória
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fundada por Edson Luiz Berti no ano de 2006, começou uma história na cidade de Blumenau. 
                  Administrou a empresa buscando sempre atender e trabalhar da melhor forma possível, 
                  atendendo os clientes e crescendo a cada dia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Nova geração
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em outubro de 2020, entregou a Berti Baterias ao seu filho Diego Luiz Berti, 
                  que administra até os dias atuais. A empresa cresceu e aumentou sua gama de produtos, 
                  hoje trabalhando com diversos acessórios automotivos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Nosso compromisso
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Buscamos nos aperfeiçoar e aprender a cada dia, sempre prestando um bom atendimento 
                  aos nossos clientes com qualidade, agilidade e preços justos.
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <img 
                src={storeInterior} 
                alt="Interior da loja Berti Baterias com prateleiras de produtos automotivos" 
                className="rounded-lg sm:rounded-xl shadow-card object-cover h-32 sm:h-40 lg:h-48 w-full"
              />
              <img 
                src={batteryTesting} 
                alt="Mecânico testando bateria automotiva com equipamento de diagnóstico" 
                className="rounded-lg sm:rounded-xl shadow-card object-cover h-32 sm:h-40 lg:h-48 w-full"
              />
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-right">
            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">Missão</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Oferecer produtos e serviços de qualidade com agilidade e preço justo.
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">Visão</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Ser referência em baterias e acessórios automotivos na região de Blumenau.
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border sm:col-span-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">Valores</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Honestidade, comprometimento, qualidade no atendimento e respeito aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
