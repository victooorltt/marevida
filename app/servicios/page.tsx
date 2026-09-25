import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Zap,
  Flower2,
  Eye,
  Gift,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tratamientos y Servicios de Estética | Marevida Zaragoza",
  description:
    "Descubre nuestros tratamientos de estética facial y corporal en Zaragoza: radiofrecuencia TCS, ácido hialurónico, depilación láser diodo, presoterapia, manicura y pedicura.",
  openGraph: {
    title: "Tratamientos y Servicios de Estética | Marevida Zaragoza",
    description:
      "Cosmética inteligente, tecnología de vanguardia y atención personalizada en el Barrio Delicias de Zaragoza.",
    url: "https://www.marevida.es/servicios",
    images: [
      {
        url: "/images/hero-servicios.webp",
        width: 1376,
        height: 768,
        alt: "Tratamientos de Estética en Marevida Zaragoza",
      },
    ],
  },
};

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Follows Hero Design Standards)                          */}
      {/* ========================================================================= */}
      <section className="relative bg-gray-950 text-white overflow-hidden min-h-[540px] lg:min-h-[600px] flex items-center">
        {/* Subtle Background Grid Texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-white/20"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-white/20"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        {/* Right Photo Container with Desktop Left-to-Right Horizontal Fade */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] h-full">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/hero-servicios.webp"
            />
            <img
              src="/images/hero-servicios.webp"
              alt="Profesional aplicando tratamiento facial en cabina estética de Marevida Zaragoza"
              className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
              fetchPriority="high"
            />
          </picture>
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-gray-950/40 lg:hidden" />
          {/* Desktop Left-to-Right Horizontal Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 from-0% via-gray-950/70 via-30% to-transparent to-70% hidden lg:block" />
          {/* Desktop Subtle Vertical Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-gray-950/20 hidden lg:block" />
        </div>

        {/* Left Copy Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <div className="max-w-2xl">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#DA7715]/15 text-[#DA7715] border border-[#DA7715]/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#DA7715]" />
              <span>Centro de Estética Marevida · Delicias</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Nuestros Tratamientos
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-xl">
              Cosmética inteligente, tecnología de vanguardia y atención personalizada para realzar tu belleza natural.
            </p>

            {/* Trust Highlights */}
            <div className="mt-8 flex flex-wrap gap-y-3 gap-x-6 text-xs sm:text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Diagnóstico dérmico sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Aparatología médico-estética testada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Más de 20 años de experiencia</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:655656743"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all shadow-lg shadow-[#DA7715]/25 focus:outline-none focus:ring-2 focus:ring-[#DA7715] focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Cita: 655 65 67 43</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>Solicitar Diagnóstico Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUICK CATEGORY JUMP BAR                                                   */}
      {/* ========================================================================= */}
      <nav
        aria-label="Categorías de tratamientos"
        className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <li>
              <a
                href="#faciales"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Faciales Avanzados</span>
              </a>
            </li>
            <li>
              <a
                href="#corporales"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Corporal & Drenaje</span>
              </a>
            </li>
            <li>
              <a
                href="#depilacion"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Depilación</span>
              </a>
            </li>
            <li>
              <a
                href="#manos-pies"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Flower2 className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Manos & Pies</span>
              </a>
            </li>
            <li>
              <a
                href="#maquillaje"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Maquillaje & Mirada</span>
              </a>
            </li>
            <li>
              <a
                href="#bonos"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-orange-50/80 transition-colors flex items-center gap-1.5"
              >
                <Gift className="w-3.5 h-3.5 text-[#DA7715]" />
                <span>Tarjetas & Bonos</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. SERVICES BREAKDOWN                                                     */}
      {/* ========================================================================= */}
      <div className="divide-y divide-gray-100">
        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 1: TRATAMIENTOS FACIALES AVANZADOS                           */}
        {/* --------------------------------------------------------------------- */}
        <section id="faciales" className="py-20 lg:py-24 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-100">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>01 · Cuidado Dérmico Especializado</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Tratamientos Faciales Avanzados
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Activos biocompatibles, cosmética molecular y aparatología no invasiva concebidos para regenerar, tensar y devolver la luminosidad natural a tu rostro.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-orange-50/70 border border-orange-100 text-[#DA7715] text-xs font-medium">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Diagnóstico facial inicial gratuito</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Service 1 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Purificación Celular
                    </span>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Higiene Facial Detox
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Limpieza profunda respetuosa con la barrera lipídica cutánea. Purifica los poros, elimina impurezas y células desvitalizadas, restableciendo el equilibrio biológico de la piel sin agredirla ni dejar marcas.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Desobstrucción suave de poros y oxigenación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Exfoliación enzimática regeneradora</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Efecto cutáneo fresco, luminoso y calmado</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Ideal todo tipo de piel</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Rejuvenecimiento & Firmeza
                    </span>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Radiofrecuencia Iónica TCS
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Tecnología de última generación para rejuvenecimiento integral, tensado cutáneo visible y reducción eficaz de líneas de expresión. Estimula la producción fisiológica de colágeno y elastina dérmicos.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Efecto lifting no invasivo y progresivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Remodelación del óvalo facial y cuello</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Atenuación profunda de arrugas y flacidez</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Tratamiento estrella</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Hidratación Multicapa
                    </span>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Ácido Hialurónico y Colágeno
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Terapia intensiva de redensificación con ácido hialurónico de alto y bajo peso molecular con colágeno hidrolizado. Repara la pérdida hídrica, rellena surcos superficiales y recupera la turgencia y elasticidad.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Hidratación tridimensional profunda</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Relleno óptico de líneas de deshidratación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Tacto sedoso y mayor elasticidad dérmica</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Piel deshidratada o madura</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Antioxidante & Glow
                    </span>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Antimanchas y Vitamina C
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Tratamiento iluminador formulado con Vitamina C pura micro-encapsulada de alta estabilidad. Aclara discromías solares y de la edad, unifica el tono y protege frente a la oxidación medioambiental.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Atenuación progresiva de manchas y pecas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Potente acción antioxidante preventiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Luminosidad y resplandor inmediato</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Piel apagada o fotoenvejecida</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Mirada & Labios
                    </span>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Contorno de Ojos y Labios
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Cuidado drenante y antiarrugas específico para las zonas más finas del rostro. Descongestiona bolsas, suaviza la pigmentación de ojeras y alisa arrugas perioculares y código de barras.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Drenaje linfático y descongestión de bolsas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Aclarado visible de ojeras oscuras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Alisado de patas de gallo y comisuras</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Protocolo ultra-delicado</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 2: ESTÉTICA CORPORAL & DRENAJE                               */}
        {/* --------------------------------------------------------------------- */}
        <section id="corporales" className="py-20 lg:py-24 bg-stone-50/50 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200/60">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>02 · Silueta & Bienestar Integral</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Estética Corporal & Drenaje
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Técnicas avanzadas no invasivas y masajes sensoriales diseñados para remodelar la figura, reactivar la circulación y aliviar la pesadez corporal.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-700 text-xs font-medium shadow-sm">
                <Heart className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Planes combinados reductores a medida</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Service 1 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Remodelación & Firmeza
                    </span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Reductores y Anticelulíticos
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Tratamientos corporales personalizados según tu tipo de celulitis (edematosa, fibrosa o adiposa). Combinan principios lipolíticos concentrados con aparatología y maniobras reductoras para definir el contorno.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Acción directa sobre grasa localizada y nódulos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Alisamiento progresivo de la piel de naranja</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Tonificación dérmica en abdomen, flancos y piernas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Protocolo individualizado</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Termoestimulación Activa
                    </span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Vendas Activas Termoestimulantes
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Envolturas en vendas impregnadas con complejos botánicos drenantes y termoactivos. El calor fisiológico controlado acelera la combustión de depósitos grasos y la expulsión de líquidos acumulados.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Aceleración del metabolismo celular local</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Descongestión profunda de tejidos pesados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Sensación de ligereza y compacidad dérmica</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Resultados visibles en volumen</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Circulación & Drenaje
                    </span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Presoterapia Médica Linfática
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Compresión neumática secuencial que reactiva el retorno venoso y linfático de manera fisiológica. Alivio inmediato para piernas cansadas, eliminación de edemas y complemento esencial reductor.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Alivio instantáneo del dolor y pesadez en piernas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Disminución notable de la retención de líquidos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Disponible en sesiones sueltas o bonos económicos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Bienestar inmediato</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Relax Muscular & Aromaterapia
                    </span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Masajes Relajantes & Aromas
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Masajes terapéuticos y sensitivos con aceites esenciales botánicos de máxima pureza. Descontracturan zonas de tensión acumulada, bajan los niveles de estrés y restauran la serenidad integral del cuerpo.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Alivio de sobrecargas en espalda y hombros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Aceites botánicos relajantes y nutritivos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Desconexión mental en ambiente cálido y silencioso</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Desconexión y descanso</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service 5 - Rose Therapy */}
              <div className="group rounded-2xl p-7 bg-white border border-[#DA7715]/40 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DA7715] text-white">
                      Ritual Exclusivo Marevida
                    </span>
                    <Sparkles className="w-5 h-5 text-[#DA7715]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Tratamiento Exclusivo Rose Therapy
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Nuestra experiencia más sensorial y emblemática. Un ritual sublime que fusiona las virtudes curativas del aceite esencial puro de rosa búlgara (Rosa Damascena) con la terapia energética de cuarzos rosas facetados. Nutre profundamente la piel, desbloquea emociones y proporciona una paz inigualable.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Aceite esencial 100% puro de rosa búlgara</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Masaje con cuarzos rosas templados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Nutrición y tersura dérmica excepcional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Opción estrella para regalar o autoregalarse</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-gray-600 font-medium">Disponible también en Tarjeta Regalo física</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all"
                  >
                    <span>Reservar Ritual Rose Therapy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 3: DEPILACIÓN DE ALTA EFICACIA                               */}
        {/* --------------------------------------------------------------------- */}
        <section id="depilacion" className="py-20 lg:py-24 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-100">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>03 · Suavidad & Máxima Precisión</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Depilación de Alta Eficacia
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Soluciones confortables, higiénicas y definitivas adaptadas a la sensibilidad de cada piel y tipo de vello.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-orange-50/70 border border-orange-100 text-[#DA7715] text-xs font-medium">
                <Zap className="w-4 h-4 shrink-0" />
                <span>Eficaz en todo fototipo y época del año</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Laser Diodo */}
              <div className="group rounded-2xl p-8 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Depilación Definitiva
                    </span>
                    <Zap className="w-5 h-5 text-[#DA7715]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Láser de Diodo de Última Generación
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Aparatología láser de alta potencia con cabezal de refrigeración bajo cero de contacto continuo. Garantiza sesiones rápidas, confortables y prácticamente indoloras, destruyendo el folículo piloso de manera permanente en hombres y mujeres.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Apto para todo tipo de pieles, incluso morenas y bronceadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Cabezal refrigerado ultra-protector para máximo confort</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Máxima eficacia reductora de vello desde la primera sesión</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Zonas sueltas o packs combinados con descuento</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Valoración previa y prueba gratuita</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar tarifas de láser</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Cera Tradicional */}
              <div className="group rounded-2xl p-8 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Depilación Tradicional
                    </span>
                    <Zap className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Depilación con Cera Tibia y Caliente
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Método clásico realizado con ceras naturales de baja temperatura y máxima adherencia al vello. Usamos cera caliente desechable para áreas sensibles (cejas, labio, axilas, ingles) y cera tibia en bandas para piernas completas y brazos.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Resinas naturales con propiedades calmantes e hidratantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Extracción limpia de raíz sin roturas de vello</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Aplicación de loción descongestiva post-depilación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Higiene estricta con material 100% desechable</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Suavidad y rapidez</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita cera</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 4: BELLEZA DE MANOS & PIES                                   */}
        {/* --------------------------------------------------------------------- */}
        <section id="manos-pies" className="py-20 lg:py-24 bg-stone-50/50 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200/60">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>04 · Manicura & Pedicura de Precisión</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Belleza de Manos & Pies
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Cuidado minucioso de uñas y cutículas con productos profesionales que protegen la salud de la uña natural garantizando un acabado impecable y de larga duración.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-700 text-xs font-medium shadow-sm">
                <Flower2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Esmaltados duraderos y respetuosos</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Semipermanente */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Alta Durabilidad
                    </span>
                    <Flower2 className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Manicura Semipermanente
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Limpieza morfológica de cutículas, limado anatómico, hidratación de la lámina ungueal y esmaltado de alta adherencia que permanece impecable y brillante hasta 3 semanas sin descascarillarse.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Retirada cuidadosa sin limados agresivos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Amplia gama de colores de temporada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Brillo espejo intacto durante semanas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Cuidado de uñas</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Uñas Gel y Acrílico */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Reconstrucción & Nail Art
                    </span>
                    <Flower2 className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Uñas de Gel y Acrílicas
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Esculpido artesanal en acrílico o gel, perfecto para reconstruir uñas mordidas, alargar la uña natural y lucir diseños personalizados exclusivos (francesa moderna, baby boomer o arte a mano alzada).
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Reconstrucción eficaz de uñas mordidas o frágiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Máxima resistencia y aspecto natural y fino</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Mantenimientos y rellenos periódicos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Especialistas en reconstrucción</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Pedicura Bienestar */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Descanso Podal
                    </span>
                    <Flower2 className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Pedicura Completa de Descanso
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Los pies sostienen todo nuestro cuerpo y merecen un cuidado integral. Baño reparador con sales minerales, eliminación de durezas y callosidades, exfoliación, hidratación profunda y masaje relajante reflexológico.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Eliminación indolora de durezas y talones secos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Masaje podal descontracturante y relajante</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Esmaltado tradicional o semipermanente a elegir</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Salud y ligereza</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 5: MAQUILLAJE PROFESIONAL & MIRADA                           */}
        {/* --------------------------------------------------------------------- */}
        <section id="maquillaje" className="py-20 lg:py-24 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-100">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>05 · Expresión, Mirada & Eventos</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Maquillaje Profesional & Mirada
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Realzamos tus facciones con naturalidad y sofisticación. Maquillajes de larga duración a prueba de emociones y tratamientos para abrir la mirada sin esfuerzo.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-orange-50/70 border border-orange-100 text-[#DA7715] text-xs font-medium">
                <Eye className="w-4 h-4 shrink-0" />
                <span>Asesoramiento de estilismo y prueba previa</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Novia y Eventos */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Novias & Madrinas
                    </span>
                    <Eye className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Maquillaje de Novia y Eventos
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Servicio exclusivo diseñado para que luzcas radiante y segura en tu gran día. Incluye asesoría personalizada, estudio del vestido y estilo, prueba de maquillaje completa y fijación HD a prueba de lágrimas y fotos.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Prueba previa y preparación dérmica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Fijación extrema de más de 16 horas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Atención a novias, madres e invitadas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Reserva con antelación</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Consultar fechas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Graduación y Fiesta */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Tendencia & Fiesta
                    </span>
                    <Eye className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Maquillaje de Fiesta y Graduación
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Looks elegantes y sofisticados adaptados a tu estilo personal: piel luminosa, ojos ahumados o eyeliner gráfico, contouring natural y labios definidos para celebrar graduaciones, aniversarios o eventos de noche.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Técnicas actuales adaptadas a tu rostro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Cosméticos de alta gama no comedogénicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Acabado impecable tanto de día como con focos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Cita para eventos</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Lifting y Tinte Pestañas */}
              <div className="group rounded-2xl p-7 bg-white border border-gray-200/80 hover:border-[#DA7715]/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Mirada Radiante 24/7
                    </span>
                    <Eye className="w-5 h-5 text-gray-400 group-hover:text-[#DA7715] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#DA7715] transition-colors">
                    Lifting y Tinte de Pestañas
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Tratamiento estético que eleva y curva tus pestañas naturales desde la raíz creando un efecto de mayor longitud y densidad. El tinte intensivo negro azabache aporta profundidad a la mirada sin necesidad de máscara de pestañas.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Pestañas visiblemente más largas y curvadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Resistente al agua, piscina, playa y deporte</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DA7715] shrink-0" />
                      <span>Durabilidad continuada de 6 a 8 semanas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Efecto máscara natural</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7715] hover:text-[#c4650d]"
                  >
                    <span>Pedir cita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------- */}
        {/* CATEGORY 6: TARJETAS DE REGALO & BONOS                                */}
        {/* --------------------------------------------------------------------- */}
        <section id="bonos" className="py-20 lg:py-24 bg-stone-50/50 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200/60">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DA7715] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DA7715]" />
                  <span>06 · El Regalo Perfecto</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                  Tarjetas de Regalo & Bonos
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Sorprende a quien más quieres con momentos de relajación y bienestar, o invierte en tu propio autocuidado con tarifas preferenciales por packs de sesiones.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-700 text-xs font-medium shadow-sm">
                <Gift className="w-4 h-4 text-[#DA7715] shrink-0" />
                <span>Adaptados a cualquier presupuesto</span>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bonos de Sesiones */}
              <div className="rounded-2xl p-8 bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA7715] border border-orange-200/60">
                      Ahorro & Continuidad
                    </span>
                    <Gift className="w-5 h-5 text-[#DA7715]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Bonos Personalizados de Sesiones
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Diseñamos packs combinados de 5 o 10 sesiones adaptados a tus metas estéticas. Consigue el precio más ventajoso por sesión manteniendo la constancia que tu piel y tu cuerpo necesitan.
                  </p>
                  <ul className="mt-6 space-y-3 text-xs sm:text-sm text-gray-600 font-medium">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Bonos faciales de Radiofrecuencia TCS y tratamientos redensificantes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Bonos corporales de Presoterapia médica y termoestimulación</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Packs de depilación láser de diodo por zonas combinadas</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Total flexibilidad de horarios y sin caducidad apresurada</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-gray-600 font-medium">Presupuesto adaptado a tus necesidades</span>
                  <a
                    href="tel:655656743"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Preguntar por Bonos</span>
                  </a>
                </div>
              </div>

              {/* Tarjetas de Regalo */}
              <div className="rounded-2xl p-8 bg-gradient-to-br from-white to-orange-50/40 border border-[#DA7715]/30 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DA7715] text-white">
                      Detalle Inolvidable
                    </span>
                    <Sparkles className="w-5 h-5 text-[#DA7715]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Tarjetas de Regalo Marevida
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    El detalle más elegante para consentir a alguien especial. Elige un tratamiento cerrado (como nuestro ritual exclusivo Rose Therapy, una higiene detox o un spa podal) o un importe libre para que disfrute a su gusto.
                  </p>
                  <ul className="mt-6 space-y-3 text-xs sm:text-sm text-gray-600 font-medium">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Estuche de presentación físico listo para entregar</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Opción de tarjeta digital personalizada para envío inmediato</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Canjeable por cualquier tratamiento o producto de la clínica</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                      <span>Atención preferente y guiada para la persona agasajada</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-orange-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-gray-600 font-medium">Disponible para cualquier importe</span>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#DA7715] bg-white border border-[#DA7715]/40 hover:bg-[#DA7715] hover:text-white transition-all shadow-sm"
                  >
                    <span>Solicitar Tarjeta Regalo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 3. DIAGNOSIS COMMITMENT BANNER                                            */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#DA7715] shrink-0 border border-orange-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Diagnóstico Honesto Sin Compromiso
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Evaluamos el estado biológico de tu piel para recomendarte únicamente el protocolo necesario para ti.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#DA7715] shrink-0 border border-orange-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Puntualidad & Atención Sin Prisas
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Trabajamos con cita previa rigurosa para garantizar un espacio tranquilo, higiénico y dedicado 100% a tu bienestar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#DA7715] shrink-0 border border-orange-100">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Ubicación & Cita Telefónica
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  En el corazón del Barrio Delicias de Zaragoza. Llámanos directamente al 655 65 67 43 para reservar tu sesión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL CTA SECTION (As explicitly required by prompt)                   */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 bg-gray-950 text-white overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#DA7715]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#DA7715]/20 text-[#DA7715] border border-[#DA7715]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#DA7715]" />
            <span>Asesoramiento Personalizado en Zaragoza</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            ¿Tienes dudas sobre qué tratamiento es el idóneo para ti?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Realizamos diagnóstico sin compromiso. Visítanos en nuestro centro del Barrio Delicias y te guiaremos hacia el tratamiento más eficaz para tu tipo de piel y tus necesidades.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:655656743"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all shadow-xl shadow-[#DA7715]/25 focus:outline-none focus:ring-2 focus:ring-[#DA7715] focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar al 655 65 67 43</span>
            </a>
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>Ir a la Página de Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Centro de Estética Marevida · Calle Delicias, Zaragoza · Lunes a Viernes
          </p>
        </div>
      </section>
    </div>
  );
}
