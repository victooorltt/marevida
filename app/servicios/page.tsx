import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Zap,
  Hand,
  Eye,
  Flower2,
  Gift,
  CheckCircle2,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tratamientos y Servicios de Estética | Marevida Zaragoza",
  description:
    "Tratamientos faciales y corporales en Zaragoza: radiofrecuencia, higiene detox, láser de diodo, cera, manicura y pedicura, maquillaje de novia, masajes y presoterapia.",
  openGraph: {
    title: "Tratamientos y Servicios de Estética | Marevida Zaragoza",
    description:
      "Tratamientos faciales y corporales personalizados en el Barrio Delicias de Zaragoza.",
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

const PHONE_HREF = "tel:655656743";
const PHONE_LABEL = "655 65 67 43";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
  cta: string;
};

const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: "Tratamientos faciales",
    description:
      "Diagnosticamos sin compromiso tu tipo de piel para encontrar el tratamiento más adecuado para ti.",
    items: [
      "Radiofrecuencia iónica TCS",
      "Higiene facial detox",
      "Manchas y vitamina C",
      "Hialurónico y colágeno",
    ],
    cta: "Pedir cita facial",
  },
  {
    icon: Heart,
    title: "Corporal y drenaje",
    description:
      "Tratamientos reductores y anticelulíticos personalizados para conseguir los mejores resultados.",
    items: [
      "Reductores y anticelulíticos",
      "Vendas termoestimulantes",
      "Presoterapia y drenaje",
      "Bonos de sesiones",
    ],
    cta: "Pedir cita corporal",
  },
  {
    icon: Zap,
    title: "Depilación láser y cera",
    description:
      "Depilación con cera convencional o láser de diodo de última generación, con resultados visibles desde la primera sesión.",
    items: [
      "Láser de diodo",
      "Depilación con cera",
      "Zonas sueltas o combinadas",
      "Para él y para ella",
    ],
    cta: "Consultar depilación",
  },
  {
    icon: Hand,
    title: "Manos y pies",
    description:
      "Diseño de uñas, manicura y pedicura para unas uñas bonitas y saludables en cualquier ocasión.",
    items: [
      "Esmaltado semipermanente",
      "Gel y acrílico",
      "Reconstrucción de uñas",
      "Pedicura completa",
    ],
    cta: "Pedir cita de uñas",
  },
  {
    icon: Eye,
    title: "Maquillaje y mirada",
    description:
      "Maquillaje de novia y de eventos para mostrar tu belleza natural en los días importantes.",
    items: [
      "Maquillaje de novia",
      "Maquillaje de eventos",
      "Lifting de pestañas",
      "Diseño de cejas",
    ],
    cta: "Consultar fechas",
  },
  {
    icon: Flower2,
    title: "Masajes",
    description:
      "Dicha pura y relajación total en un ambiente de armonía, serenidad y descanso.",
    items: [
      "Rose Therapy",
      "Masaje ayurvédico",
      "Masaje relajante",
      "Masaje de espalda",
    ],
    cta: "Reservar masaje",
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b border-stone-100 py-16 lg:py-24 min-h-[540px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[52%] h-full">
          <img
            src="/images/hero-servicios.webp"
            alt="Tratamiento facial en Marevida Zaragoza"
            className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30 lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/60 via-30% to-transparent to-65% hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 hidden lg:block" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="relative z-10 max-w-2xl lg:max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.12]">
              Nuestros tratamientos
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Tratamientos faciales y corporales personalizados en el Barrio
              Delicias: facial, corporal, láser, uñas, maquillaje y masajes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir Cita</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-stone-700 bg-white/90 hover:bg-white border border-stone-300 hover:border-stone-400 hover:text-stone-900 shadow-sm transition-all"
              >
                <span>Cómo llegar</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Todo lo que hacemos, sin letra pequeña
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg">
              Seis bloques claros. Si dudas entre varios, te decimos cuál le
              viene mejor a tu piel sin compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DA7715] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-[#DA7715] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-stone-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DA7715] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-[#DA7715] transition-colors pt-4 border-t border-stone-100"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TARJETAS REGALO */}
      <section className="py-20 lg:py-24 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#DA7715]/20 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-60 md:h-full min-h-[240px] relative">
              <img
                src="/images/tarjeta-regalo.webp"
                alt="Bono regalo para tratamientos de estética en Marevida Zaragoza"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#DA7715] flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
                  Tarjetas regalo
                </h2>
                <p className="mt-3 text-stone-600 text-base leading-relaxed">
                  Facial, láser, presoterapia, masaje ayurvédico o Rose Therapy.
                  Adecuamos tu regalo a tu presupuesto, pregúntanos sin
                  compromiso.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Regalar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#DA7715]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-stone-800 blur-2xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              ¿No sabes qué tratamiento necesitas?
            </h2>
            <p className="mt-5 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Te diagnosticamos sin compromiso en nuestro centro del Barrio
              Delicias y te recomendamos solo lo que tu piel necesita.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar al {PHONE_LABEL}</span>
              </a>
              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-stone-600 transition-all"
              >
                <span>Pedir cita online</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#DA7715]" />
                <span>Calle Barcelona 59, Zaragoza</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#DA7715]" />
                <span>Lunes a viernes con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

