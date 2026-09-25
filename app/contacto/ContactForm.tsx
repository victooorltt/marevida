"use client";

import { useState, useId } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tratamiento: string;
  mensaje: string;
  aceptaPrivacidad: boolean;
}

const INITIAL_FORM: FormData = {
  nombre: "",
  telefono: "",
  email: "",
  tratamiento: "",
  mensaje: "",
  aceptaPrivacidad: false,
};

const TRATAMIENTOS_OPCIONES = [
  "Tratamientos Faciales (Higiene, Antiedad, Hidratación)",
  "Tratamientos Corporales (Reductores, Reafirmantes, Maderoterapia)",
  "Depilación Láser Diodo",
  "Manicura y Pedicura Profesional",
  "Masajes Relajantes y Terapéuticos",
  "Otros tratamientos / Consulta general",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const nombreId = useId();
  const telefonoId = useId();
  const emailId = useId();
  const tratamientoId = useId();
  const mensajeId = useId();
  const privacidadId = useId();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.nombre.trim()) {
      setErrorMessage("Por favor, introduce tu nombre completo.");
      return;
    }
    if (!formData.telefono.trim()) {
      setErrorMessage("Por favor, facilita un número de teléfono de contacto.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, introduce una dirección de correo electrónico válida.");
      return;
    }
    if (!formData.tratamiento) {
      setErrorMessage("Por favor, selecciona el tratamiento de tu interés.");
      return;
    }
    if (!formData.aceptaPrivacidad) {
      setErrorMessage("Debes aceptar la política de privacidad para enviar tu solicitud.");
      return;
    }

    try {
      setStatus("submitting");
      // Simulate submission processing
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo o llámanos directamente.");
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xl shadow-stone-200/50 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-sm">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
          Solicitud recibida correctamente
        </span>

        <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
          ¡Gracias por tu mensaje!
        </h3>

        <p className="mt-3 text-base text-stone-600 max-w-md mx-auto leading-relaxed">
          Nos pondremos en contacto contigo a la mayor brevedad para confirmar la disponibilidad y responder a todas tus dudas.
        </p>

        {/* Summary card */}
        <div className="mt-6 p-5 bg-stone-50 rounded-2xl border border-stone-200/70 text-left text-sm text-stone-700 space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-stone-200">
            <span className="text-stone-500 font-medium">Nombre:</span>
            <span className="font-semibold text-stone-800">{formData.nombre}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-stone-200">
            <span className="text-stone-500 font-medium">Teléfono:</span>
            <span className="font-semibold text-stone-800">{formData.telefono}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-stone-200">
            <span className="text-stone-500 font-medium">Tratamiento:</span>
            <span className="font-semibold text-[#DA7715]">{formData.tratamiento}</span>
          </div>
          <div className="flex items-center gap-2 pt-1 text-xs text-stone-500">
            <Clock className="w-4 h-4 text-stone-400" />
            <span>Tiempo de respuesta estimado: menos de 24 horas</span>
          </div>
        </div>

        {/* Direct Action links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/34655656743?text=Hola%20Marevida,%20acabo%20de%20enviar%20el%20formulario%20para%20${encodeURIComponent(
              formData.tratamiento || "un tratamiento"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Notificar por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            <span>Enviar otra consulta</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl shadow-stone-200/40 relative">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-[#DA7715] bg-[#DA7715]/10 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#DA7715]" />
          Formulario de Contacto
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
          Envíanos tu consulta o solicita cita
        </h2>
        <p className="mt-2 text-sm text-stone-600 leading-relaxed">
          Rellena tus datos y el tratamiento que deseas. Te responderemos para confirmar fecha y resolver cualquier duda.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900 text-sm animate-shake">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Por favor, revisa los datos</p>
            <p className="text-xs text-amber-800 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nombre completo */}
        <div>
          <label htmlFor={nombreId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Nombre completo <span className="text-[#DA7715]">*</span>
          </label>
          <input
            id={nombreId}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. María García López"
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:border-[#DA7715] focus:ring-4 focus:ring-[#DA7715]/10 outline-none transition-all"
          />
        </div>

        {/* Teléfono & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={telefonoId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
              Teléfono de contacto <span className="text-[#DA7715]">*</span>
            </label>
            <input
              id={telefonoId}
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. 655 00 00 00"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:border-[#DA7715] focus:ring-4 focus:ring-[#DA7715]/10 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor={emailId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
              Correo electrónico <span className="text-[#DA7715]">*</span>
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:border-[#DA7715] focus:ring-4 focus:ring-[#DA7715]/10 outline-none transition-all"
            />
          </div>
        </div>

        {/* Tratamiento de interés */}
        <div>
          <label htmlFor={tratamientoId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Tratamiento de interés <span className="text-[#DA7715]">*</span>
          </label>
          <div className="relative">
            <select
              id={tratamientoId}
              name="tratamiento"
              value={formData.tratamiento}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:border-[#DA7715] focus:ring-4 focus:ring-[#DA7715]/10 outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Selecciona un tratamiento...
              </option>
              {TRATAMIENTOS_OPCIONES.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor={mensajeId} className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Mensaje o preferencias de horario
          </label>
          <textarea
            id={mensajeId}
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="¿Tienes alguna preferencia de día/hora o consulta específica sobre tu piel o tratamiento?"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:border-[#DA7715] focus:ring-4 focus:ring-[#DA7715]/10 outline-none transition-all resize-y min-h-[100px]"
          />
        </div>

        {/* Aceptación Privacidad */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id={privacidadId}
            type="checkbox"
            name="aceptaPrivacidad"
            checked={formData.aceptaPrivacidad}
            onChange={handleChange}
            required
            className="mt-1 w-4 h-4 rounded border-stone-300 text-[#DA7715] focus:ring-[#DA7715] focus:ring-2 cursor-pointer"
          />
          <label htmlFor={privacidadId} className="text-xs text-stone-600 leading-relaxed cursor-pointer select-none">
            Acepto el tratamiento de mis datos de contacto para gestionar la cita o consulta de acuerdo con la{" "}
            <span className="text-[#DA7715] underline underline-offset-2">política de privacidad</span> de Marevida Centro de Estética.
          </label>
        </div>

        {/* Botón de Enviar */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#DA7715] hover:bg-[#c4680e] shadow-lg shadow-[#DA7715]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Enviando solicitud...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud de Cita</span>
              </>
            )}
          </button>
        </div>

        {/* Reassurance text */}
        <div className="pt-2 text-center text-xs text-stone-500 flex items-center justify-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#DA7715]" />
          <span>Atención rápida y sin compromiso. ¿Urgencias? Llámanos al <a href="tel:655656743" className="font-semibold text-stone-800 hover:text-[#DA7715] underline">655 65 67 43</a></span>
        </div>
      </form>
    </div>
  );
}
