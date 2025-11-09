import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_ADDRESS, COMPANY_HOURS } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-primary-foreground/80 mb-4">
              Especialistas en frenos y embragues con más de 20 años de experiencia. Tu satisfacción es nuestra prioridad.
            </p>
            <p className="text-sm text-primary-foreground/60">
              "Seguridad que se siente en todo momento"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Phone size={20} />
                <span>{COMPANY_PHONE}</span>
              </a>
              <a
                href={COMPANY_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-sm">{COMPANY_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock size={18} />
                <div>
                  <p className="font-medium">Lunes a Sábado</p>
                  <p className="text-primary-foreground/80">{COMPANY_HOURS.weekday}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} />
                <div>
                  <p className="font-medium">Domingo</p>
                  <p className="text-primary-foreground/80">{COMPANY_HOURS.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} {COMPANY_NAME}. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:text-secondary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm hover:text-secondary transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
