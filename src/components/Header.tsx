import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo-berti.png';

const navLinks = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#produtos', label: 'Produtos' },
  { href: '/vitrine', label: 'Vitrine' },
  { href: '/#contato', label: 'Contato' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isAnchorLink = (href: string) => href.startsWith('/#') || href.startsWith('#');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 sm:h-18 lg:h-20 ${
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Berti Baterias e Acessórios Automotivos - Logo"
              className="h-9 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              isAnchorLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
                  } ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4732321020"
              className={`flex items-center gap-2 font-medium transition-colors hover:text-primary ${
                isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              (47) 3232-1020
            </a>
            <Button asChild>
              <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-white'}`}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                isAnchorLink(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`text-foreground font-medium py-2 hover:text-primary transition-colors ${
                      location.pathname === link.href ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href="tel:4732321020"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (47) 3232-1020
                </a>
                <Button asChild className="w-full mt-2">
                  <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                    Fale conosco
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
