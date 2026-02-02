import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Fale conosco
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Estamos prontos para atender você. Entre em contato pelos nossos canais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-5 sm:space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >

            {/* Address */}
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 group"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0 transition-colors duration-200 group-hover:bg-primary/20">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Rua Johann Sachase, 862<br />
                  Badenfurt, Blumenau - SC<br />
                  CEP: 89070-400
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 group"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0 transition-colors duration-200 group-hover:bg-primary/20">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-1">
                  Telefone
                </h3>
                <a
                  href="tel:4732321020"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  (47) 3232-1020
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 group"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0 transition-colors duration-200 group-hover:bg-primary/20">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:bertibateriaseacessorios@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
                >
                  bertibateriaseacessorios@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div 
              className="flex items-start gap-3 sm:gap-4 group"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0 transition-colors duration-200 group-hover:bg-primary/20">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <div className="text-muted-foreground space-y-1 text-sm sm:text-base">
                  <p>Segunda a Sexta: 08:00 - 12:00 | 13:30 - 18:00</p>
                  <p>Sábados: 08:00 - 12:00</p>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div 
              className="flex items-start gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">
                  Redes sociais
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://instagram.com/bertibaterias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-200"
                    aria-label="Instagram da Berti Baterias"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                  </a>
                  <a
                    href="https://facebook.com/bertibaterias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-200"
                    aria-label="Facebook da Berti Baterias"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button size="lg" className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02]" asChild>
                <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                  Fale pelo WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-card h-[300px] sm:h-[350px] lg:h-full lg:min-h-[400px] transition-shadow duration-300 hover:shadow-card-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4!2d-49.0831!3d-26.8867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzEyLjEiUyA0OcKwMDQnNTkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Berti Baterias - Rua Johann Sachase, 862, Badenfurt, Blumenau SC"
              />
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/aa8vTZxmQtuzqAWK6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base transition-colors duration-200"
              >
                <MapPin className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
