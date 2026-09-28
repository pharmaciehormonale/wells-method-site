"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CalendlyWidget from "@/components/CalendlyWidget";
import QuestionnairePopup from "@/components/QuestionnairePopup";
import BookMockup from "@/components/BookMockup";

// Avatar photos for social proof
const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
];

export default function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Show questionnaire after 5 seconds if not seen
    const timer = setTimeout(() => {
      if (!hasSeenPopup) {
        setShowQuestionnaire(true);
        setHasSeenPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasSeenPopup]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Questionnaire Popup */}
      {showQuestionnaire && (
        <QuestionnairePopup onClose={() => setShowQuestionnaire(false)} />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Wells Method" width={150} height={45} className="h-10 w-auto" />
          </a>
          <a
            href="#reservation"
            className="btn-premium text-white px-6 py-2.5 rounded-full text-sm font-medium"
          >
            Réserver un appel
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-black/5 text-[#b8860b] border border-[#b8860b]/20">
                  Méthode Exclusive
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                <span className="gradient-text">Transformez</span>
                <br />
                <span className="text-gray-900">votre corps.</span>
                <br />
                <span className="gradient-text-gold">Naturellement.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                Découvrez comment l'optimisation hormonale naturelle peut révolutionner 
                votre énergie, votre silhouette et votre bien-être global.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <a
                  href="#reservation"
                  className="btn-premium text-white px-8 py-4 rounded-full text-base font-semibold text-center"
                >
                  Commencer ma transformation
                </a>
                <button
                  onClick={() => setShowQuestionnaire(true)}
                  className="btn-secondary px-8 py-4 rounded-full text-base font-medium text-gray-700"
                >
                  Faire le diagnostic
                </button>
              </div>
              
              {/* Trust Indicators with real photos */}
              <div className="flex items-center gap-8 pt-8 animate-fade-in-up delay-400">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {avatars.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt={`Client ${i + 1}`}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">+200 clients transformés</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#b8860b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Book */}
            <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
              <BookMockup />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#b8860b] text-sm font-medium tracking-widest uppercase">Le Problème</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 gradient-text">
              Votre corps vous envoie des signaux
            </h2>
            <p className="text-xl text-gray-600">
              Fatigue chronique, prise de poids inexpliquée, sommeil perturbé... 
              Et si la solution était plus simple que vous ne le pensez ?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Énergie instable",
                description: "Ces coups de fatigue qui vous plombent et vous empêchent d'avancer dans vos projets."
              },
              {
                icon: "⚖️",
                title: "Poids résistant",
                description: "Malgré vos efforts, la graisse s'accroche et les régimes ne fonctionnent plus."
              },
              {
                icon: "🌙",
                title: "Sommeil perturbé",
                description: "Des nuits agitées qui vous laissent épuisé(e) dès le réveil."
              }
            ].map((item, index) => (
              <div key={index} className="card-premium rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section with Coach Image */}
      <section className="py-24 bg-[#fafafa] bg-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/coach-new.png"
                  alt="David Wells - Coach en optimisation hormonale"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <span className="text-[#b8860b] text-sm font-medium tracking-widest uppercase">La Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Une méthode scientifique et personnalisée
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Évaluation complète",
                    description: "Questionnaire approfondi sur votre mode de vie, vos symptômes et vos objectifs"
                  },
                  {
                    step: "02",
                    title: "Stratégie sur mesure",
                    description: "Plan personnalisé adapté à votre profil unique et vos besoins spécifiques"
                  },
                  {
                    step: "03",
                    title: "Accompagnement",
                    description: "Suivi régulier et ajustements pour des résultats durables"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#b8860b] to-[#d4a853] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a
                href="#reservation"
                className="inline-block btn-premium text-white px-8 py-4 rounded-full text-base font-semibold"
              >
                Découvrir la méthode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">Les Résultats</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Imaginez-vous dans <span className="text-[#d4a853]">90 jours</span>
            </h2>
            <p className="text-xl text-gray-400">
              Un équilibre retrouvé, c'est un corps en mode performance maximale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔥", title: "Perte de gras", description: "Visible et durable" },
              { icon: "⚡", title: "Énergie stable", description: "Du matin au soir" },
              { icon: "😴", title: "Sommeil réparateur", description: "Nuits profondes" },
              { icon: "✨", title: "Peau éclatante", description: "Visiblement plus jeune" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-dark rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="section-divider-dark my-16" />
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "200+", label: "Clients accompagnés" },
              { value: "97%", label: "Taux de satisfaction" },
              { value: "15kg", label: "Perdus en moyenne" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-[#d4a853] mb-2 tabular-nums">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#b8860b] text-sm font-medium tracking-widest uppercase">La Méthode</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 gradient-text">
              Les 6 piliers de votre transformation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Évaluation personnalisée",
                description: "Questionnaire détaillé sur vos habitudes, symptômes et objectifs pour comprendre votre profil unique."
              },
              {
                icon: "🎯",
                title: "Stratégie ciblée",
                description: "Plan d'action personnalisé pour rééquilibrer votre système naturellement."
              },
              {
                icon: "🥗",
                title: "Nutrition adaptée",
                description: "Alimentation optimisée pour soutenir votre métabolisme et atteindre vos objectifs."
              },
              {
                icon: "💪",
                title: "Entraînement intelligent",
                description: "Les bons exercices au bon moment, sans passer des heures à la salle."
              },
              {
                icon: "🧘",
                title: "Hygiène de vie",
                description: "Sommeil, gestion du stress et routines pour maximiser vos résultats."
              },
              {
                icon: "💊",
                title: "Compléments naturels",
                description: "Supplémentation ciblée et sélectionnée pour booster votre transformation."
              }
            ].map((item, index) => (
              <div key={index} className="card-premium rounded-2xl p-8 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Calendly Section */}
      <section id="reservation" className="py-24 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">Passez à l'action</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Réservez votre appel <span className="text-[#d4a853]">découverte</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un échange de 30 minutes pour comprendre vos objectifs, identifier ce qui vous freine, 
              et découvrir comment la méthode peut vous aider.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
              {[
                "✔️ Sans engagement",
                "✔️ 100% personnalisé",
                "✔️ Conseils actionnables"
              ].map((item, index) => (
                <span key={index} className="text-gray-300">{item}</span>
              ))}
            </div>
          </div>
          
          {/* Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <CalendlyWidget url="https://calendly.com/admin-luma-innovations/appel" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <Image src="/logo.svg" alt="Wells Method" width={150} height={45} className="h-10 w-auto invert" />
              <p className="text-gray-500 mt-3">Optimisation hormonale naturelle</p>
            </div>
            <div className="flex gap-8">
              <a href="/conditions-generales-de-vente" className="text-gray-400 hover:text-white transition-colors text-sm">
                CGV
              </a>
              <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
                Confidentialité
              </a>
            </div>
          </div>
          
          <div className="section-divider-dark mb-8" />
          
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Wells Method. Tous droits réservés.</p>
            <p className="mt-2">Luma Innovation LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
