import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marevida | Centro de Estética en Zaragoza - Delicias",
  description:
    "Tu centro de estética de confianza en el Barrio Delicias de Zaragoza. Tratamientos faciales, corporales, depilación láser diodo, manicura y pedicura.",
  keywords: [
    "centro de estetica zaragoza",
    "estetica delicias zaragoza",
    "depilacion laser diodo zaragoza",
    "tratamientos faciales zaragoza",
    "manicura zaragoza",
    "pedicura zaragoza",
    "marevida zaragoza",
  ],
  metadataBase: new URL("https://www.marevida.es"),
  openGraph: {
    title: "Marevida | Centro de Estética en Zaragoza - Delicias",
    description:
      "Tu centro de estética de confianza en el Barrio Delicias de Zaragoza. Tratamientos faciales, corporales, depilación láser diodo, manicura y pedicura.",
    url: "https://www.marevida.es",
    siteName: "Marevida Centro de Estética",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 500,
        height: 184,
        alt: "Marevida Centro de Estética",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#DA7715]/20 selection:text-[#DA7715]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
