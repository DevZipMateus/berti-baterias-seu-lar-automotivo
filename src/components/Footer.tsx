import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import logo from '@/assets/logo-berti.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <footer className="bg-black-soft text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand */}
          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <motion.img
              src={logo}
              alt="Berti Baterias e Acessórios Automotivos"
              className="h-10 sm:h-12 lg:h-14 w-auto mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <p className="text-white/70 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Há 20 anos oferecendo qualidade e agilidade em baterias automotivas 
              e acessórios em Blumenau/SC. Sua satisfação é nossa prioridade.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <motion.a
                href="https://instagram.com/bertibaterias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram da Berti Baterias"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/bertibaterias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook da Berti Baterias"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre nós' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#produtos', label: 'Produtos' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <motion.a
                href="https://maps.app.goo.gl/aa8vTZxmQtuzqAWK6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  Rua Johann Sachase, 862<br />
                  Badenfurt, Blumenau - SC
                </span>
              </motion.a>
              <motion.a
                href="tel:4732321020"
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="text-xs sm:text-sm">(47) 3232-1020</span>
              </motion.a>
              <motion.a
                href="mailto:bertibateriaseacessorios@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="text-xs sm:text-sm break-all">bertibateriaseacessorios@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Berti Baterias e Acessórios Automotivos. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-xs sm:text-sm">
              CNPJ: 36.562.595/0001-16
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
