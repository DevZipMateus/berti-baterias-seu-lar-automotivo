import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              O que dizem nossos clientes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Avaliações no Google
            </h2>
            <p className="text-white/70 text-lg">
              A satisfação dos nossos clientes é nossa maior conquista.
            </p>
          </div>

          {/* Rating Display */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 animate-scale-in">
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-10 w-10 text-accent fill-accent"
                />
              ))}
            </div>
            
            <p className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
              5.0
            </p>
            
            <p className="text-white/70 text-lg mb-8">
              Avaliação média no Google Maps
            </p>

            <blockquote className="text-xl md:text-2xl text-white/90 italic mb-8 leading-relaxed">
              "Excelente atendimento, profissionais qualificados e produtos de qualidade. 
              Recomendo a todos!"
            </blockquote>

            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a
                href="https://share.google/7Zh0M2nopWEGuXxfw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Ver todas as avaliações
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
