import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Entre em contato pelos nossos canais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground">
                  Rua Johann Sachase, 862<br />
                  Badenfurt, Blumenau - SC<br />
                  CEP: 89070-400
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  Telefone
                </h3>
                <a
                  href="tel:4732321020"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (47) 3232-1020
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:bertibateriaseacessorios@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  bertibateriaseacessorios@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda a Sexta: 08:00 - 12:00 | 13:30 - 18:00</p>
                  <p>Sábados: 08:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  Redes sociais
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/bertibaterias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="Instagram da Berti Baterias"
                  >
                    <Instagram className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="https://facebook.com/bertibaterias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="Facebook da Berti Baterias"
                  >
                    <Facebook className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/554732321020" target="_blank" rel="noopener noreferrer">
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="animate-fade-in-right">
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
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
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/aa8vTZxmQtuzqAWK6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
