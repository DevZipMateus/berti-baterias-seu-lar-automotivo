import { Users, Target, Award, History } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import aboutBg from '@/assets/about-bg.jpg';
import storeInterior from '@/assets/store-interior.jpg';
import batteryTesting from '@/assets/battery-testing.jpg';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
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
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Nossa história
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Sobre a Berti Baterias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Há 20 anos no mercado buscando trazer cada dia mais qualidade e agilidade em nossos serviços.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* History */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                icon: History,
                title: 'Nossa trajetória',
                text: 'Fundada por Edson Luiz Berti no ano de 2006, começou uma história na cidade de Blumenau. Administrou a empresa buscando sempre atender e trabalhar da melhor forma possível, atendendo os clientes e crescendo a cada dia.',
              },
              {
                icon: Users,
                title: 'Nova geração',
                text: 'Em outubro de 2020, entregou a Berti Baterias ao seu filho Diego Luiz Berti, que administra até os dias atuais. A empresa cresceu e aumentou sua gama de produtos, hoje trabalhando com diversos acessórios automotivos.',
              },
              {
                icon: Target,
                title: 'Nosso compromisso',
                text: 'Buscamos nos aperfeiçoar e aprender a cada dia, sempre prestando um bom atendimento aos nossos clientes com qualidade, agilidade e preços justos.',
              },
            ].map((item) => (
              <motion.div 
                key={item.title}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Image Gallery */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6"
              variants={itemVariants}
            >
              <motion.img 
                src={storeInterior} 
                alt="Interior da loja Berti Baterias com prateleiras de produtos automotivos" 
                className="rounded-lg sm:rounded-xl shadow-card object-cover h-32 sm:h-40 lg:h-48 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={batteryTesting} 
                alt="Mecânico testando bateria automotiva com equipamento de diagnóstico" 
                className="rounded-lg sm:rounded-xl shadow-card object-cover h-32 sm:h-40 lg:h-48 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Values Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { icon: Target, title: 'Missão', text: 'Oferecer produtos e serviços de qualidade com agilidade e preço justo.' },
              { icon: Award, title: 'Visão', text: 'Ser referência em baterias e acessórios automotivos na região de Blumenau.' },
              { icon: Users, title: 'Valores', text: 'Honestidade, comprometimento, qualidade no atendimento e respeito aos nossos clientes.', span: true },
            ].map((card) => (
              <motion.div 
                key={card.title}
                className={`bg-card/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-card border border-border ${card.span ? 'sm:col-span-2' : ''}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px hsl(0 0% 0% / 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
