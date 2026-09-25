import Link from "next/link";
import {
  Sparkles,
  Zap,
  Flower2,
  Heart,
  CheckCircle2,
  Star,
  Award,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkle,
  CalendarCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#DA7715]/20 selection:text-[#DA7715]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-stone-100 py-16 lg:py-24 min-h-[600px] lg:min-h-[680px] flex items-center">
        {/* Strict Hero Standard: Right Visual Container */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] h-full">
          <img
            src="/images/hero-home.webp"
            alt="Marevida Centro de Estética Zaragoza"
            className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30 lg:hidden" />
          {/* Desktop Left-to-Right Horizontal Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/60 via-30% to-transparent to-65% hidden lg:block" />
          {/* Desktop Subtle Vertical Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 hidden lg:block" />
        </div>

        {/* Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="relative z-10 max-w-2xl lg:max-w-xl">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.12]">
              Tu centro de estética de{" "}
              <span className="font-semibold text-stone-900 underline decoration-[#DA7715]/40 decoration-wavy decoration-1 underline-offset-8">
                confianza
              </span>{" "}
              en Zaragoza
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Especialistas en tratamientos faciales personalizados, estética corporal avanzada,
              láser de diodo y belleza integral en el Barrio Delicias.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:655656743"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Cita</span>
              </a>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-stone-700 bg-white/90 hover:bg-white border border-stone-300 hover:border-stone-400 hover:text-stone-900 shadow-sm transition-all"
              >
                <span>Ver Servicios</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Micro-trust indicators in Hero */}
            <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-stone-900">20+</div>
                <div className="text-xs sm:text-sm text-stone-500 font-medium">Años experiencia</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-stone-900 flex items-center gap-1">
                  4.7 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs sm:text-sm text-stone-500 font-medium">Google Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-stone-900">100%</div>
                <div className="text-xs sm:text-sm text-stone-500 font-medium">Personalizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES SECTION */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DA7715] mb-2 block">
              Tratamientos Destacados
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Cuidado experto para cada necesidad
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg">
              Tecnología de última generación combinada con cosmética inteligente de alta eficacia y manos expertas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Service 1: Tratamientos Faciales */}
            <div className="group relative bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DA7715] group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#DA7715] uppercase block mb-1">
                  Facial Avanzado
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-[#DA7715] transition-colors">
                  Tratamientos Faciales
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Rejuvenecimiento dérmico, higiene profunda detox, tratamiento de manchas y radiofrecuencia para una piel radiante, firme y oxigenada.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Rejuvenecimiento</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Detox</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Manchas</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Radiofrecuencia</span>
                </div>
              </div>
              <Link
                href="/servicios#faciales"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-[#DA7715] transition-colors pt-4 border-t border-stone-100"
              >
                <span>Descubrir faciales</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2: Belleza de Manos y Pies */}
            <div className="group relative bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DA7715] group-hover:text-white transition-all duration-300">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#DA7715] uppercase block mb-1">
                  Cuidado & Estilo
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-[#DA7715] transition-colors">
                  Belleza de Manos y Pies
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Manicura semipermanente duradera, uñas esculpidas de acrílico de máxima resistencia y pedicura spa completa para cuidar tu bienestar.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Semipermanente</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Acrílico</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Pedicura Spa</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Nail Care</span>
                </div>
              </div>
              <Link
                href="/servicios#manos-pies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-[#DA7715] transition-colors pt-4 border-t border-stone-100"
              >
                <span>Ver manicuras y pedicuras</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3: Láser Diodo */}
            <div className="group relative bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DA7715] group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#DA7715] uppercase block mb-1">
                  Depilación Definitiva
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-[#DA7715] transition-colors">
                  Láser Diodo Avanzado
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Tecnología de última generación con cabezal subcero para una depilación prácticamente indolora, segura y eficaz en cualquier época del año.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Máxima potencia</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Indoloro</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Todo el año</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Unisex</span>
                </div>
              </div>
              <Link
                href="/servicios#laser"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-[#DA7715] transition-colors pt-4 border-t border-stone-100"
              >
                <span>Conocer el láser</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 4: Masajes & Bienestar */}
            <div className="group relative bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DA7715] group-hover:text-white transition-all duration-300">
                  <Flower2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#DA7715] uppercase block mb-1">
                  Bienestar Holístico
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-[#DA7715] transition-colors">
                  Masajes & Bienestar
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Ritual exclusivo Rose Therapy con aceite de rosa de damasco y cuarzos rosas, masajes descontracturantes y técnicas drenantes profundas.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Rose Therapy</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Cuarzos rosas</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Descontracturante</span>
                  <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">Relajante</span>
                </div>
              </div>
              <Link
                href="/servicios#masajes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-[#DA7715] transition-colors pt-4 border-t border-stone-100"
              >
                <span>Explorar rituales</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & EXPERIENCE SECTION */}
      <section className="py-20 lg:py-28 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story & Leadership Info */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-[1.2]">
                Dirigido por{" "}
                <span className="font-semibold text-stone-900">
                  María José Álvarez González
                </span>
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                Con más de dos décadas dedicada a la belleza, la salud cutánea y el bienestar,
                María José Álvarez González fundó Marevida con una premisa clara: proporcionar una atención
                absolutamente personalizada, honesta y de confianza en el Barrio Delicias.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-stone-600 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                  <span>Diagnóstico personalizado sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                  <span>Atención directa y seguimiento continuo</span>
                </div>
              </div>

              {/* Métricas en fila horizontal */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 sm:gap-6 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-stone-900">20+ Años</div>
                  <div className="text-xs sm:text-sm text-stone-500 font-medium mt-1">Experiencia profesional</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-stone-900 flex items-center gap-1.5">
                    4.7 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                  </div>
                  <div className="text-xs sm:text-sm text-stone-500 font-medium mt-1">Google Reviews</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-stone-900">100%</div>
                  <div className="text-xs sm:text-sm text-stone-500 font-medium mt-1">Personalizado</div>
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-200/80 aspect-[4/3] lg:aspect-auto lg:h-[460px]">
                <img
                  src="/images/centro-detalle.webp"
                  alt="Detalle de cabina en Marevida Centro de Estética Zaragoza"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY & INTELLIGENT COSMETICS */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DA7715] mb-2 block">
              Filosofía Marevida
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
              Cosmética Inteligente & Respeto Biológico
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg">
              Creemos en una estética limpia, biocompatible y honesta. No tapamos signos de fatiga: estimulamos la regeneración celular natural de tu propia piel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6">
                <Sparkle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Activos Biocompatibles
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Seleccionamos formulaciones de grado profesional libres de componentes agresivos innecesarios. Activos puros capaces de actuar en sinergia respetando la barrera dérmica.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Tecnología Certificada
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Aparatología estética de vanguardia sometida a rigurosas calibraciones y revisiones periódicas para garantizar resultados seguros, indoloros y duraderos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Enfoque Holístico
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                El estado de la piel refleja el descanso, el estrés y las emociones. Nuestras cabinas proporcionan un entorno de calma y relajación absoluta para revitalizar cuerpo y mente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL BOOKING CALL-OUT BANNER */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#DA7715]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-stone-800 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-medium uppercase tracking-wider mb-6">
              <CalendarCheck className="w-3.5 h-3.5" />
              Cita Previa Personalizada
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              ¿Preparada para regalarte el cuidado que mereces?
            </h2>

            <p className="mt-5 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Contáctanos hoy mismo para resolver cualquier duda o concertar tu cita. Te asesoramos de manera sincera e individualizada en nuestro centro del Barrio Delicias.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:655656743"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar al 655 656 743</span>
              </a>

              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-stone-600 transition-all"
              >
                <span>Pedir Cita Online</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#DA7715]" />
                <span>Barrio Delicias, Zaragoza</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#DA7715]" />
                <span>Lunes a Viernes con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
