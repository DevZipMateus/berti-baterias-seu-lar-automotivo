import { Battery, Zap, Shield, Clock, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

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
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2"
            >
              <Battery className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">20 anos de experiência</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
            >
              Berti Baterias e Acessórios Automotivos
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl"
            >
              Qualidade e agilidade em baterias automotivas e acessórios para seu veículo em Blumenau/SC
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto hover:scale-105 transition-transform">
                <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                  Solicite um orçamento
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 border-white bg-white/20 text-white hover:bg-white hover:text-foreground w-full sm:w-auto hover:scale-105 transition-transform">
                <a href="#servicos">
                  Nossos serviços
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 border-primary bg-primary/20 text-white hover:bg-primary hover:text-primary-foreground w-full sm:w-auto hover:scale-105 transition-transform">
                <Link to="/vitrine" className="inline-flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Ver vitrine
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10"
            >
              {[
                { icon: Clock, value: '20+', label: 'Anos no mercado' },
                { icon: Battery, value: '1000+', label: 'Baterias instaladas' },
                { icon: Shield, value: '100%', label: 'Garantia' },
                { icon: Zap, value: '5★', label: 'Avaliação Google' },
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-3 sm:p-4"
                  variants={statsVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center shadow-glow backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div 
                  className="w-48 h-48 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full bg-gradient-to-br from-primary/50 to-accent/30 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Battery className="w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2 xl:-top-4 xl:-right-4 w-16 h-16 xl:w-24 xl:h-24 rounded-full bg-primary flex items-center justify-center shadow-glow"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 20px hsl(145 80% 28% / 0.3)',
                    '0 0 40px hsl(145 80% 28% / 0.5)',
                    '0 0 20px hsl(145 80% 28% / 0.3)',
                  ],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-8 h-8 xl:w-12 xl:h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
