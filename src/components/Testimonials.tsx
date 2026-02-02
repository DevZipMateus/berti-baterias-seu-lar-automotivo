import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import testimonialsBg from '@/assets/testimonials-bg.jpg';

const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${testimonialsBg})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div 
            className="mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              O que dizem nossos clientes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
              Avaliações no Google
            </h2>
            <p className="text-white/70 text-base sm:text-lg">
              A satisfação dos nossos clientes é nossa maior conquista.
            </p>
          </motion.div>

          {/* Rating Display */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Star
                      className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-accent fill-accent"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              5.0
            </motion.p>
            
            <motion.p 
              className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Avaliação média no Google Maps
            </motion.p>

            <motion.blockquote 
              className="text-lg sm:text-xl md:text-2xl text-white/90 italic mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              "Excelente atendimento, profissionais qualificados e produtos de qualidade. 
              Recomendo a todos!"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Button size="lg" variant="outline" asChild className="border-white bg-white/20 text-white hover:bg-white hover:text-foreground w-full sm:w-auto hover:scale-105 transition-transform">
                <a
                  href="https://share.google/7Zh0M2nopWEGuXxfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Ver todas as avaliações
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
