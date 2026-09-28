import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wells Method | Optimisation Hormonale Naturelle",
  description: "Transformez votre corps et votre énergie grâce à l'optimisation hormonale naturelle. Perdez du gras, gagnez en vitalité et améliorez votre sommeil.",
  keywords: "optimisation hormonale, coaching santé, perte de poids, vitalité, sommeil, compléments naturels",
  openGraph: {
    title: "Wells Method | Optimisation Hormonale Naturelle",
    description: "Transformez votre corps et votre énergie grâce à l'optimisation hormonale naturelle.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
