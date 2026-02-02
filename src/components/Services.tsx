import { Battery, Car, Truck, Bike, Shield, Wrench, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import servicesBg from '@/assets/services-bg.jpg';
import batteryInstallation from '@/assets/battery-installation.jpg';

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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="servicos" className="relative py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            O que oferecemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Oferecemos uma gama completa de serviços para manter seu veículo sempre funcionando.
          </p>
        </motion.div>

        {/* Services Grid with Image */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Image Column */}
          <motion.div 
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 order-last lg:order-first"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src={batteryInstallation} 
              alt="Instalação profissional de bateria automotiva" 
              className="rounded-xl sm:rounded-2xl shadow-glow object-cover w-full h-48 sm:h-64 lg:h-full lg:min-h-[300px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Services Cards */}
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(34, 197, 94, 0.3)',
                y: -5,
              }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-display font-bold mb-2">{service.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vehicle Types */}
        <motion.div 
          className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-2">
              Atendemos todos os tipos de veículos
            </h3>
            <p className="text-white/70 text-sm sm:text-base">
              Trabalhamos com baterias para diversos tipos de veículos e aplicações.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {vehicleTypes.map((vehicle) => (
              <motion.div 
                key={vehicle.label} 
                className="text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2 sm:mb-3"
                  whileHover={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.4)',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <vehicle.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </motion.div>
                <p className="font-medium text-sm sm:text-base">{vehicle.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Special Offer */}
          <motion.div 
            className="bg-primary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex justify-center mb-3 sm:mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
              </motion.div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary-foreground mb-2">
                Instalação grátis!
              </h4>
              <p className="text-primary-foreground/80 mb-4 text-sm sm:text-base">
                Na compra de baterias, ganhe a instalação com todos os cuidados para seu carro.
              </p>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto hover:scale-105 transition-transform">
                <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                  Aproveite agora
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
