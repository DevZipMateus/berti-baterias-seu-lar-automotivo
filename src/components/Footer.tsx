import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo-berti.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-soft text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <img
              src={logo}
              alt="Berti Baterias e Acessórios Automotivos"
              className="h-10 sm:h-12 lg:h-14 w-auto mb-3 sm:mb-4"
            />
            <p className="text-white/70 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Há 20 anos oferecendo qualidade e agilidade em baterias automotivas 
              e acessórios em Blumenau/SC. Sua satisfação é nossa prioridade.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://instagram.com/bertibaterias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram da Berti Baterias"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://facebook.com/bertibaterias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook da Berti Baterias"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <a href="#inicio" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                Início
              </a>
              <a href="#sobre" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                Sobre nós
              </a>
              <a href="#servicos" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                Serviços
              </a>
              <a href="#produtos" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                Produtos
              </a>
              <a href="#contato" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://maps.app.goo.gl/aa8vTZxmQtuzqAWK6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  Rua Johann Sachase, 862<br />
                  Badenfurt, Blumenau - SC
                </span>
              </a>
              <a
                href="tel:4732321020"
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="text-xs sm:text-sm">(47) 3232-1020</span>
              </a>
              <a
                href="mailto:bertibateriaseacessorios@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="text-xs sm:text-sm break-all">bertibateriaseacessorios@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
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
      </div>
    </footer>
  );
};

export default Footer;
