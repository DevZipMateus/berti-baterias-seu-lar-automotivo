import { Battery, CircleDot, Droplets, Lightbulb, Car, Sparkles, ArrowUpDown, ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  return (
    <section id="produtos" className="relative py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productsBg})` }}
      >
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Catálogo completo
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trabalhamos com uma ampla variedade de produtos automotivos de alta qualidade.
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={batteriesCollection} 
              alt="Coleção de baterias automotivas de diversos tamanhos" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-display font-bold">Baterias</h3>
                <p className="text-white/80 text-sm">Para todos os tipos de veículos</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={accessoriesDisplay} 
              alt="Display de acessórios automotivos incluindo calotas, tapetes e palhetas" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-display font-bold">Acessórios</h3>
                <p className="text-white/80 text-sm">Variedade completa para seu carro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vitrine Section */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-sm font-medium">Loja online</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Conheça nossa vitrine virtual
                </h3>
                <p className="text-white/80 text-lg mb-6 max-w-xl">
                  Explore nossos produtos com preços, descrições e fotos. 
                  Veja tudo o que temos disponível para você!
                </p>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                  <Link to="/vitrine" className="inline-flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Acessar vitrine
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <product.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button size="lg" asChild>
            <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
              Consultar disponibilidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
