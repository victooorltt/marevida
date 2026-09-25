import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  UserCheck,
  Heart,
  MapPin,
  Phone,
  ArrowRight,
  Award,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes Somos | Marevida Centro de Estética Zaragoza",
  description:
    "Conoce la historia de Marevida y a su directora María José Álvarez González. Más de dos décadas de experiencia en estética avanzada y bienestar en el Barrio Delicias de Zaragoza.",
  openGraph: {
    title: "Quiénes Somos | Marevida Centro de Estética Zaragoza",
    description:
      "Más de dos décadas de pasión, profesionalidad y dedicación al cuidado de tu belleza y bienestar en Zaragoza.",
    images: ["/images/hero-about.webp"],
  },
};

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* 1. HERO SECTION (Strict Hero Standard: Text-Left / Image-Right with Gradient Mask) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 min-h-[520px] flex items-center border-b border-gray-100">
        {/* Right Visual Container with Directional Gradient Mask */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] h-full">
          <img
            src="/images/hero-about.webp"
            alt="Quiénes Somos - Marevida Centro de Estética Zaragoza"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Quiénes Somos
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Más de dos décadas de pasión, profesionalidad y dedicación al cuidado de tu belleza y bienestar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="tel:655656743"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Cita</span>
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
              >
                <span>Nuestros Tratamientos</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">2009</p>
                <p className="text-xs text-gray-500 mt-1">Fundación en Delicias</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#DA7715]">+20</p>
                <p className="text-xs text-gray-500 mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">100%</p>
                <p className="text-xs text-gray-500 mt-1">Trato personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUESTRA HISTORIA */}
      <section className="py-16 sm:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest text-[#DA7715] uppercase mb-2">
              Nuestra Evolución
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Nuestra Historia
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Un camino de constante aprendizaje, pasión y vocación por hacer sentir bien a cada persona que cruza nuestra puerta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Hito 1: 2009 */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#DA7715]/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DA7715]/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#DA7715] bg-[#DA7715]/10 mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  Finales de 2009
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Los Inicios en el Barrio Delicias
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Iniciamos nuestra andadura a finales de 2009 en el barrio Delicias de Zaragoza, concretamente en la <strong className="text-gray-900 font-semibold">Calle Barcelona 82</strong>.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                  Nacimos con un propósito claro: democratizar la estética avanzada de calidad, ofreciendo un trato cálido, honesto y cercano, donde la confianza de nuestras clientas fuese siempre nuestra principal carta de presentación.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500">
                <MapPin className="w-4 h-4 text-[#DA7715]" />
                <span>Calle Barcelona 82 · Delicias, Zaragoza</span>
              </div>
            </div>

            {/* Hito 2: 2017 */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DA7715]/30 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DA7715]/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#DA7715] bg-[#DA7715]/10 mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  Noviembre de 2017 – Actualidad
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Un Nuevo Espacio Diseñado para el Bienestar
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  En noviembre de 2017 dimos un gran paso adelante trasladándonos a nuestro actual espacio en <strong className="text-gray-900 font-semibold">Calle Barcelona 59 (local 02)</strong>.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                  Un centro concebido y diseñado especialmente para ofrecer mayor confort, armonía y privacidad a nuestras clientas, integrando cabinas más espaciosas, aparatología puntera y un entorno de descanso absoluto.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-[#DA7715] font-medium">
                <MapPin className="w-4 h-4 text-[#DA7715]" />
                <span>Calle Barcelona 59, local 02 · Ubicación Actual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LA DIRECCIÓN DEL CENTRO */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#DA7715] bg-[#DA7715]/10">
                  <Award className="w-4 h-4" />
                  Dirección y Experiencia
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  María José Álvarez González
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                  Titulada con más de 20 años de experiencia en estética avanzada y cuidado integral de la piel.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Al frente de Marevida, María José lidera un equipo profesional y apasionado, siempre a la vanguardia de las últimas tendencias, aparatología y cosmética inteligente.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Su filosofía de trabajo combina el rigor técnico y la evidencia científica con una sensibilidad especial para escuchar y entender las inquietudes de cada persona, buscando siempre resultados armónicos y naturales.
                </p>

                <div className="pt-2">
                  <blockquote className="border-l-4 border-[#DA7715] pl-4 italic text-gray-700 text-sm sm:text-base">
                    «La estética no es solo realzar la belleza exterior, sino devolver la confianza, el equilibrio y la calma interior a cada persona que confía en nosotras.»
                  </blockquote>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#DA7715]" />
                    <span>Cosmética inteligente certificada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#DA7715]" />
                    <span>Tecnología y aparatología avanzada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#DA7715]" />
                    <span>Formación continua y reciclaje técnico</span>
                  </div>
                </div>
              </div>

              {/* Decorative Experience Badge Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#DA7715]/10 rounded-bl-full" />
                  <div className="w-12 h-12 rounded-xl bg-[#DA7715]/10 text-[#DA7715] flex items-center justify-center mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Liderazgo Profesional
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Bajo la dirección de María José Álvarez González, Marevida ha consolidado un estándar de excelencia en Zaragoza basado en la cercanía, la precisión técnica y el respeto absoluto a la piel.
                  </p>

                  <div className="space-y-3 border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experiencia en el sector</span>
                      <span className="font-semibold text-gray-900">+20 Años</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Ubicación</span>
                      <span className="font-semibold text-gray-900">Zaragoza (Delicias)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Especialidad</span>
                      <span className="font-semibold text-gray-900">Estética Avanzada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOS 3 PILARES DE MAREVIDA */}
      <section className="py-16 sm:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest text-[#DA7715] uppercase mb-2">
              Nuestra Filosofía
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Los 3 Pilares de Marevida
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Los tres principios fundamentales sobre los que se sustenta cada uno de nuestros tratamientos y diagnósticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1: Variedad */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#DA7715]/40 transition-all hover:shadow-md">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#DA7715]/10 text-[#DA7715] flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DA7715] mb-2">
                  Pilar 01
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Variedad
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Selección cuidada de los mejores tratamientos corporales, faciales y aparatología de última generación.
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Ofrecemos una carta integral que abarca desde limpiezas detox y radiofrecuencia hasta presoterapia, masajes terapéuticos, manicura y depilación láser de diodo.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#DA7715]">
                <span>Tratamientos faciales, corporales y aparatología</span>
              </div>
            </div>

            {/* Pilar 2: Calidad */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#DA7715]/40 transition-all hover:shadow-md">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#DA7715]/10 text-[#DA7715] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DA7715] mb-2">
                  Pilar 02
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Calidad
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Principios activos puros, cosmética certificada y tecnología probada para resultados visibles y seguros.
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Trabajamos con firmas profesionales de cosmética inteligente y aparatología homologada que garantizan la máxima eficacia dermatológica y el cuidado de tu salud.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#DA7715]">
                <span>Principios activos puros y tecnología contrastada</span>
              </div>
            </div>

            {/* Pilar 3: Personalización */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#DA7715]/40 transition-all hover:shadow-md">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#DA7715]/10 text-[#DA7715] flex items-center justify-center mb-6">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DA7715] mb-2">
                  Pilar 03
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Personalización
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Diagnóstico individualizado para cada tipo de piel, objetivo y necesidad específica.
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Porque ninguna piel es igual a otra, analizamos en profundidad tus necesidades para adaptar cada sesión, dosis y pauta de tratamiento con precisión absoluta.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#DA7715]">
                <span>Diagnóstico individualizado previo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPROMISO CON EL BIENESTAR */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#DA7715]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#DA7715] bg-[#DA7715]/20 mb-6">
                <Heart className="w-3.5 h-3.5 fill-[#DA7715]" />
                Nuestro Compromiso
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                Compromiso con tu Bienestar
              </h2>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Un espacio donde desconectar del ritmo diario, encontrar serenidad y disfrutar de un trato cercano y de confianza.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Queremos que el tiempo que pases en Marevida sea tu momento de pausa, mimo y renovación. Cuidamos cada detalle ambiental —música suave, aromas envolventes y privacidad total— para que tu experiencia sea reconfortante de principio a fin.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:655656743"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar al 655 65 67 43</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Ver Ubicación e Instalaciones</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Te Esperamos en Marevida
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Visítanos en el Barrio Delicias de Zaragoza o pide tu cita previa para recibir asesoramiento personalizado sin ningún compromiso.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <MapPin className="w-4 h-4 text-[#DA7715]" />
              <span>Calle Barcelona 59, local 02 · 50017 Zaragoza</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:655656743"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#DA7715] hover:bg-[#c4650d] transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Cita (655 65 67 43)</span>
              </a>
              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 transition-all"
              >
                <span>Cómo Llegar y Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
