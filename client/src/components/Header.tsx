import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_WHATSAPP, APP_LOGO } from "@/const";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold">J&FISHER</h1>
            <p className="text-xs opacity-90">Frenos y Embragues</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="hover:text-secondary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="hover:text-secondary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="hover:text-secondary transition-colors"
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-secondary transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Contact Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* <a
            href={`tel:${COMPANY_PHONE}`}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-all duration-300"
            title="Llamar"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">Llamar</span>
          </a> */}
          <a
            href={COMPANY_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
            title="WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-primary/80 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/20">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left hover:text-secondary transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left hover:text-secondary transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-left hover:text-secondary transition-colors py-2"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left hover:text-secondary transition-colors py-2"
            >
              Contacto
            </button>
            <div className="flex gap-2 pt-2">
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Phone size={18} />
                Llamar
              </a>
              <a
                href={COMPANY_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
