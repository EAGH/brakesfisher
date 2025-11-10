import { Wrench, Hammer, ShoppingCart, Cog, Star, MapPin, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_ADDRESS, SERVICES } from "@/const";

export default function Home() {
  const galleryImages = [
    { id: 1, src: "/images/2I5Ezh9ltJGM.jpg", alt: "Servicio de frenos" },
    { id: 2, src: "/images/UfdRrZdtyVTn.jpg", alt: "Reparación de frenos" },
    { id: 3, src: "/images/5Evwln1KqaKy.jpg", alt: "Pastillas de freno" },
    { id: 4, src: "/images/Hi6sv0Nbg5VV.jpeg", alt: "Taller profesional" },
    { id: 5, src: "/images/NDDfSaX4Ak24.jpeg", alt: "Ambiente de trabajo" },
    { id: 6, src: "/images/rcC89naAuh0v.jpeg", alt: "Equipos modernos" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlos García",
      text: "Excelente servicio, profesionales muy atentos y rápidos. Recomendado 100%.",
      rating: 5
    },
    {
      id: 2,
      name: "María López",
      text: "Trabajo de calidad garantizado. Confío en J&FISHER para el mantenimiento de mi vehículo.",
      rating: 5
    },
    {
      id: 3,
      name: "Juan Rodríguez",
      text: "Precios justos y atención personalizada. Definitivamente vuelvo.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="title">{COMPANY_NAME}</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Especialistas en Frenos y Embragues
              </p>
              <p className="text-lg text-primary-foreground/80">
                Con más de 20 años de experiencia, ofrecemos los mejores servicios de reparación, mantenimiento y venta de componentes automotrices de calidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* <a
                  href={COMPANY_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Contactar por WhatsApp
                </a> */}
                {/* <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Phone size={20} />
                  Llamar Ahora
                </a> */}
              </div>
              <div className="flex items-center gap-2 text-sm pt-4">
                <Star size={18} className="text-yellow-400" />
                <span className="font-semibold">Confía en verdaderos expertos - Seguridad que se siente en todo momento</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/images/G0gid7ydCSch.jpg"
                alt="Taller profesional"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados en frenos y embragues con las mejores marcas del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const icons: Record<string, any> = {
                Wrench: <Wrench size={32} />,
                Hammer: <Hammer size={32} />,
                ShoppingCart: <ShoppingCart size={32} />,
                Cog: <Cog size={32} />
              };

              return (
                <div key={service.id} className="card-service group">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Services Info */}
          <div className="mt-12 bg-muted/50 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Productos Especializados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Pastillas de Freno</h4>
                <p className="text-muted-foreground">Pastillas metálicas, ceramicadas y bornizadas de las mejores marcas.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Líquidos y Componentes</h4>
                <p className="text-muted-foreground">Líquidos de frenos, zapatas y componentes de embrague de calidad garantizada.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Importadores Autorizados</h4>
                <p className="text-muted-foreground">Trabajamos directamente con las mejores marcas del mercado internacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Galería de Trabajos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestros trabajos realizados y la calidad de nuestros servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-64"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confía en la experiencia y calidad de nuestro trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-accent">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                    <a href={`tel:${COMPANY_PHONE}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500 text-white">
                      <MessageCircle size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={COMPANY_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">{COMPANY_ADDRESS}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes a Sábado:</span>
                      <span className="text-muted-foreground">7:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingo:</span>
                      <span className="text-muted-foreground">8:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
              {/* Mapa embebido de Google Maps: se usa la dirección en COMPANY_ADDRESS.
                  No requiere API key; usamos el endpoint público de Google Maps con query. */}
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <iframe title={`Ubicación de ${COMPANY_NAME}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.7090008385!2d-76.93964966492622!3d-12.224970463264189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bb7fb7420c0f%3A0xbff668c37b8b7bd2!2sFRENOS%20CORPORACI%C3%93N%20J%26FISHER%20EIRL!5e0!3m2!1ses-419!2spe!4v1762730519408!5m2!1ses-419!2spe" allowFullScreen className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
