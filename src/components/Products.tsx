import { Battery, CircleDot, Droplets, Lightbulb, Car, Sparkles, ArrowUpDown, ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import productsBg from '@/assets/products-bg.jpg';
import batteriesCollection from '@/assets/batteries-collection.jpg';
import accessoriesDisplay from '@/assets/accessories-display.jpg';

const products = [
  {
    icon: Battery,
    title: 'Baterias',
    description: 'Baterias para carros, motos, caminhões, tratores e sistemas de segurança com garantia.',
  },
  {
    icon: CircleDot,
    title: 'Calotas',
    description: 'Calotas de diversos modelos e tamanhos para personalizar seu veículo.',
  },
  {
    icon: Car,
    title: 'Tapetes',
    description: 'Tapetes automotivos de alta qualidade para proteção e conforto.',
  },
  {
    icon: Droplets,
    title: 'Palhetas',
    description: 'Palhetas para limpador de para-brisa de todas as marcas e modelos.',
  },
  {
    icon: Lightbulb,
    title: 'Lâmpadas',
    description: 'Lâmpadas automotivas de alta performance e durabilidade.',
  },
  {
    icon: ArrowUpDown,
    title: 'Borrachas',
    description: 'Borrachas automotivas para vedação e acabamento.',
  },
  {
    icon: Sparkles,
    title: 'Estética automotiva',
    description: 'Produtos para limpeza e cuidado do seu veículo.',
  },
  {
    icon: ArrowUpDown,
    title: 'Amortecedor',
    description: 'Amortecedores de qualidade para seu conforto e segurança.',
  },
];

const Products = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="produtos" className="relative py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productsBg})` }}
      >
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Catálogo completo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Trabalhamos com uma ampla variedade de produtos automotivos de alta qualidade.
          </p>
        </motion.div>

        {/* Featured Images */}
        <motion.div 
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={batteriesCollection} 
              alt="Coleção de baterias automotivas de diversos tamanhos" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <h3 className="text-white text-lg sm:text-xl font-display font-bold">Baterias</h3>
                <p className="text-white/80 text-xs sm:text-sm">Para todos os tipos de veículos</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={accessoriesDisplay} 
              alt="Display de acessórios automotivos incluindo calotas, tapetes e palhetas" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <h3 className="text-white text-lg sm:text-xl font-display font-bold">Acessórios</h3>
                <p className="text-white/80 text-xs sm:text-sm">Variedade completa para seu carro</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vitrine Section */}
        <motion.div 
          className="mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                  <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-medium">Loja online</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-2 sm:mb-3">
                  Conheça nossa vitrine virtual
                </h3>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-xl">
                  Explore nossos produtos com preços, descrições e fotos. 
                  Veja tudo o que temos disponível para você!
                </p>
                <Button size="lg" variant="secondary" asChild className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02]">
                  <Link to="/vitrine" className="inline-flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                    Acessar vitrine
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex-shrink-0 hidden sm:block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              className="group bg-card/90 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-200">
                <product.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-display font-bold text-foreground mb-1 sm:mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button size="lg" asChild className="transition-transform duration-200 hover:scale-[1.02]">
            <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
              Consultar disponibilidade
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
