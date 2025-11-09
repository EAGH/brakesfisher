import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_PHONE, COMPANY_WHATSAPP } from "@/const";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <a
        href={COMPANY_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Phone Button */}
      {/* <a
        href={`tel:${COMPANY_PHONE}`}
        className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Llamar"
      >
        <Phone size={24} />
      </a> */}
    </div>
  );
}
