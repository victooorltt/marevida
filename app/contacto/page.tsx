import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkle,
  MessageSquare,
  Navigation,
  Bus,
  Car,
  Footprints,
  Calendar,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto & Citas | Marevida Centro de Estética Zaragoza",
  description:
    "Pide tu cita o consúltanos cualquier duda sin compromiso en Marevida Centro de Estética en Barrio Delicias, Zaragoza. Teléfono, WhatsApp 655 65 67 43 y ubicación en Calle Barcelona 59.",
  openGraph: {
    title: "Contacto & Citas | Marevida Centro de Estética Zaragoza",
    description:
      "Pide tu cita o consúltanos cualquier duda sin compromiso. Te atenderemos encantadas en Calle Barcelona 59, Delicias, Zaragoza.",
    images: ["/images/hero-contact.webp"],
  },
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col w-full bg-white text-stone-900 selection:bg-[#DA7715]/20 selection:text-[#DA7715]">
      {/* 1. HERO SECTION (Strict Hero Standard: Text-Left / Image-Right with Gradient Mask) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 min-h-[500px] lg:min-h-[540px] flex items-center border-b border-stone-100">
        {/* Right Visual Container with Directional Gradient Mask */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] h-full">
          <img
            src="/images/hero-contact.webp"
            alt="Contacto y Citas - Marevida Centro de Estética Zaragoza"
            className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30 lg:hidden" />
          {/* Desktop Left-to-Right Horizontal Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/60 via-30% to-transparent to-65% hidden lg:block" />
          {/* Desktop Subtle Vertical Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 hidden lg:block" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl lg:max-w-xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase text-[#DA7715] bg-[#DA7715]/10 border border-[#DA7715]/20 mb-5 backdrop-blur-sm">
              <Sparkle className="w-3.5 h-3.5 fill-[#DA7715]" />
              Atención Personalizada · Barrio Delicias
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.1]">
              Contacto &amp; Citas
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Pide tu cita o consúltanos cualquier duda sin compromiso. Te atenderemos encantadas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:655656743"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar al 655 65 67 43</span>
              </a>

              <a
                href="https://wa.me/34655656743?text=Hola%20Marevida,%20me%20gustar%C3%ADa%20pedir%20cita%20o%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp directo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID (Left: Interactive Form | Right: Direct Details & Hours) */}
      <section className="py-16 lg:py-24 bg-stone-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Interactive Contact Form (7 cols on lg) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Contact & Details Cards (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Teléfono directo y WhatsApp */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DA7715]/10 border border-[#DA7715]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#DA7715]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#DA7715]">
                      Atención Inmediata
                    </span>
                    <h2 className="text-xl font-medium text-stone-900 mt-0.5">
                      Teléfono directo y WhatsApp
                    </h2>
                    <p className="mt-1 text-sm text-stone-600">
                      Para citas urgentes o consultas directas, contacta con nuestro equipo:
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                      <a
                        href="tel:655656743"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#DA7715]" />
                        <span>655 65 67 43</span>
                      </a>

                      <a
                        href="https://wa.me/34655656743?text=Hola%20Marevida,%20me%20gustar%C3%ADa%20pedir%20cita%20o%20informaci%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Correo Electrónico */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DA7715]/10 border border-[#DA7715]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#DA7715]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Consultas por correo
                    </span>
                    <h2 className="text-xl font-medium text-stone-900 mt-0.5">
                      Correo Electrónico
                    </h2>
                    <p className="mt-1 text-sm text-stone-600">
                      Escríbenos para presupuestos, información de tratamientos o cualquier duda detallada:
                    </p>

                    <div className="mt-3.5">
                      <a
                        href="mailto:marevidaestetica@gmail.com"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#DA7715] hover:text-[#c4680e] hover:underline transition-colors break-all"
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span>marevidaestetica@gmail.com</span>
                      </a>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-400">
                      Respondemos en un plazo máximo de 24 horas laborables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Dirección & Ubicación */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DA7715]/10 border border-[#DA7715]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#DA7715]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Dónde estamos
                    </span>
                    <h2 className="text-xl font-medium text-stone-900 mt-0.5">
                      Dirección en Delicias
                    </h2>
                    <p className="mt-1 text-sm text-stone-800 font-medium leading-relaxed">
                      Calle Barcelona 59, local 02<br />
                      50017 Zaragoza (Barrio Delicias)
                    </p>
                    <p className="mt-1 text-xs text-stone-500">
                      Local a pie de calle entre Calle Santander y Vía Universitas.
                    </p>

                    <div className="mt-3.5">
                      <a
                        href="https://maps.google.com/?q=Calle+Barcelona+59+Zaragoza"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4680e] underline underline-offset-4"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Abrir en Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Horario de Apertura */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DA7715]/10 border border-[#DA7715]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#DA7715]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Disponibilidad
                    </span>
                    <h2 className="text-xl font-medium text-stone-900 mt-0.5">
                      Horario de Atención
                    </h2>

                    <div className="mt-3.5 space-y-2.5 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                        <span className="text-stone-700 font-medium">Lunes a Viernes</span>
                        <div className="text-right text-stone-900 font-semibold text-xs sm:text-sm">
                          <div>9:00 - 14:00</div>
                          <div className="text-stone-600 font-normal">15:30 - 19:00</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                        <span className="text-stone-700 font-medium">Sábado</span>
                        <span className="text-stone-900 font-semibold text-xs sm:text-sm">
                          10:00 - 13:00
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-stone-400">
                        <span className="font-medium">Domingo</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                          Cerrado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP & LOCATION SECTION (Interactive Google Maps Embed + Directions Card) */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase text-[#DA7715] bg-[#DA7715]/10 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#DA7715]" />
              Localización Privilegiada
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Cómo llegar a Marevida en Barrio Delicias
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              Estamos en Calle Barcelona 59, local 02. Un espacio tranquilo y acogedor con excelentes comunicaciones tanto en transporte público como en vehículo privado.
            </p>
          </div>

          {/* Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Map Iframe Embed (7 cols on lg) */}
            <div className="lg:col-span-7 bg-stone-100 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md relative min-h-[380px] lg:min-h-[460px] flex flex-col">
              <iframe
                title="Ubicación de Marevida Centro de Estética en Google Maps"
                src="https://maps.google.com/maps?q=Calle+Barcelona+59,+50017+Zaragoza&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa interactivo con la ubicación de Calle Barcelona 59, Zaragoza"
              />

              {/* Floating banner on top of map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DA7715] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Marevida Centro de Estética</h4>
                  <p className="text-xs text-stone-600">Calle Barcelona 59, 50017 Zaragoza</p>
                </div>
              </div>
            </div>

            {/* Directions Card (5 cols on lg) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-stone-50 via-white to-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-6 flex items-center gap-2.5">
                  <Navigation className="w-6 h-6 text-[#DA7715]" />
                  <span>Indicaciones de llegada</span>
                </h3>

                <div className="space-y-5 text-sm text-stone-700">
                  {/* Bus */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm">En Autobús Urbano</h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                        Líneas <strong>24, 32, 33 y 36</strong> con paradas a escasos 2 minutos a pie en Calle Santander, Vía Universitas y Av. Madrid.
                      </p>
                    </div>
                  </div>

                  {/* A pie */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                      <Footprints className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm">A Pie desde Delicias</h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                        A un paso del eje comercial de Calle Delicias y Plaza Roma. Acceso peatonal llano y cómodo a pie de calle.
                      </p>
                    </div>
                  </div>

                  {/* Tren / AVE */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm">Estación Delicias (AVE / Cercanías)</h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                        Situado a solo 10-12 minutos caminando de la Estación Intermodal Zaragoza Delicias o 4 minutos en bus urbano (línea 32).
                      </p>
                    </div>
                  </div>

                  {/* Coche */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm">En Vehículo Privado</h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                        Fácil conexión desde Vía Universitas y Tercer Cinturón (Z-30). Estacionamiento regulado y parkings de rotación cercanos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-stone-200">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Calle+Barcelona+59,+50017+Zaragoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md hover:shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Cómo llegar en Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TRUST ASSURANCE CARDS */}
      <section className="py-14 bg-stone-50 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 text-base">Cita Previa Sin Esperas</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Gestionamos tu agenda para que disfrutes de tu tratamiento en cabina privada a la hora exacta acordada.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 text-base">Diagnóstico Gratuito</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  En tu primera visita realizamos un diagnóstico previo para aconsejarte el tratamiento ideal para tu piel.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-[#DA7715]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 text-base">Garantía Profesional</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Más de dos décadas de experiencia y aparatología estética certificada para tu total tranquilidad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. QUICK FAQ ACCORDION / GRID */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#DA7715] bg-[#DA7715]/10 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#DA7715]" />
              Resolvemos tus dudas
            </span>
            <h2 className="text-3xl font-light text-stone-900 tracking-tight">
              Preguntas Frecuentes sobre Citas y Visitas
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/70">
              <h3 className="text-base font-medium text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                ¿Con cuánta antelación debo solicitar mi cita?
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed pl-6">
                Te recomendamos solicitar cita con al menos 24 a 48 horas de antelación para asegurar el horario que mejor te convenga, especialmente en tardes o sábados por la mañana.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/70">
              <h3 className="text-base font-medium text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                ¿Qué ocurre si necesito cambiar o cancelar mi cita?
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed pl-6">
                Agradecemos que nos avises con al menos 24 horas de antelación por teléfono o WhatsApp para poder reorganizar la agenda y ceder tu hueco a otra clienta.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/70">
              <h3 className="text-base font-medium text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                ¿Qué métodos de pago tenéis disponibles?
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed pl-6">
                Aceptamos pago en efectivo, tarjeta de débito/crédito y Bizum directamente en recepción al finalizar tu sesión.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/70">
              <h3 className="text-base font-medium text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                ¿Puedo regalar un tratamiento o bono de estética?
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed pl-6">
                ¡Sí! Disponemos de elegantes tarjetas regalo personalizadas para cualquier tratamiento o importe que elijas. Puedes solicitarlas por teléfono, WhatsApp o directamente en nuestro centro.
              </p>
            </div>
          </div>

          {/* Quick CTA Bottom */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl border border-orange-200/60">
            <h3 className="text-xl font-light text-stone-900">
              ¿Tienes otra duda o consulta urgente?
            </h3>
            <p className="mt-2 text-sm text-stone-600 max-w-lg mx-auto">
              Estamos a tu disposición en el <strong className="text-stone-900">655 65 67 43</strong> de lunes a viernes y sábados por la mañana.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="tel:655656743"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar ahora</span>
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 shadow-sm transition-all"
              >
                <span>Explorar Tratamientos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
