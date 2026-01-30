import { Battery, CircleDot, Droplets, Lightbulb, Car, Sparkles, ArrowUpDown, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="produtos" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 animate-fade-in"
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
