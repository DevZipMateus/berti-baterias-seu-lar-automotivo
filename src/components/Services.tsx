import { Battery, Car, Truck, Bike, Shield, Wrench, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import servicesBg from '@/assets/services-bg.jpg';

const services = [
  {
    icon: Battery,
    title: 'Venda de baterias',
    description: 'Baterias para carros, motos, caminhões, tratores e sistemas de segurança.',
  },
  {
    icon: Wrench,
    title: 'Instalação',
    description: 'Instalação profissional com todos os cuidados necessários para seu veículo.',
  },
  {
    icon: Zap,
    title: 'Transferência de carga',
    description: 'Serviço de transferência de carga para baterias descarregadas.',
  },
  {
    icon: Shield,
    title: 'Garantia',
    description: 'Todas as nossas baterias possuem garantia de fábrica.',
  },
];

const vehicleTypes = [
  { icon: Car, label: 'Carros' },
  { icon: Bike, label: 'Motos' },
  { icon: Truck, label: 'Caminhões' },
  { icon: Shield, label: 'Segurança' },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-24 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nossos serviços
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços para manter seu veículo sempre funcionando.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Vehicle Types */}
        <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-2">
              Atendemos todos os tipos de veículos
            </h3>
            <p className="text-white/70">
              Trabalhamos com baterias para diversos tipos de veículos e aplicações.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {vehicleTypes.map((vehicle) => (
              <div key={vehicle.label} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <vehicle.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium">{vehicle.label}</p>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="bg-primary rounded-2xl p-6 md:p-8 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl md:text-2xl font-display font-bold text-primary-foreground mb-2">
              Instalação grátis!
            </h4>
            <p className="text-primary-foreground/80 mb-4">
              Na compra de baterias, ganhe a instalação com todos os cuidados para seu carro.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                Aproveite agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
