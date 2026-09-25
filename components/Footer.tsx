import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo strictly as requested: only Image inside Link, no extra text, no container wrapper */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.webp"
                alt="Marevida"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tu centro de estética de confianza en el Barrio Delicias de Zaragoza. Tratamientos avanzados, cuidado personal y atención profesional.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#DA7715] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#DA7715] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-[#DA7715] transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#DA7715] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Horario
            </h3>
            <div className="space-y-2.5 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DA7715] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Lunes a Viernes</p>
                  <p>9:00 - 14:00 y 15:30 - 19:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DA7715] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Sábado</p>
                  <p>10:00 - 13:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Domingo</p>
                  <p className="text-gray-500">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DA7715] mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Calle+Barcelona+59+Zaragoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DA7715] transition-colors"
                >
                  Calle Barcelona 59, local 02<br />50017 Zaragoza (Barrio Delicias)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                <a
                  href="tel:655656743"
                  className="hover:text-[#DA7715] font-medium text-gray-800 transition-colors"
                >
                  655 65 67 43
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DA7715] flex-shrink-0" />
                <a
                  href="mailto:marevidaestetica@gmail.com"
                  className="hover:text-[#DA7715] transition-colors break-all"
                >
                  marevidaestetica@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center sm:flex sm:justify-between sm:text-left text-xs text-gray-500">
          <p>© {currentYear} Marevida Centro de Estética. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Centro de Estética en Zaragoza - Delicias</p>
        </div>
      </div>
    </footer>
  );
}
