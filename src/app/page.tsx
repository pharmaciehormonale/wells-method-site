import Image from "next/image";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f2c4a] to-[#1a4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-amber-400 font-semibold uppercase tracking-wider text-sm">
                La seule méthode efficace
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Wells Method
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 italic">
                "Et si vos hormones étaient la clé pour transformer votre corps et votre énergie ?"
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  Perdez du gras plus facilement
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  Gagnez en vitalité et clarté mentale
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  Améliorez la qualité de votre sommeil et de votre peau
                </li>
              </ul>
              <a
                href="#reservation"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Découvrez la Méthode
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/hero.png"
                  alt="Wells Method - Optimisation hormonale"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Promesse Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2c4a]">
                LA PROMESSE
              </h2>
              <h3 className="text-2xl font-semibold text-[#0f2c4a]">
                Pas de Bla-Bla Inutile
              </h3>
              <p className="text-lg text-gray-700">
                Des hormones optimisées, c'est comme remettre votre corps en mode performance maximale:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0f2c4a] font-bold">•</span>
                  La graisse se brûle plus facilement,
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f2c4a] font-bold">•</span>
                  L'énergie devient stable toute la journée,
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f2c4a] font-bold">•</span>
                  Le sommeil est réparateur,
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f2c4a] font-bold">•</span>
                  La peau devient plus nette et plus jeune,
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f2c4a] font-bold">•</span>
                  Votre confiance en vous grimpe en flèche.
                </li>
              </ul>
              <p className="text-xl font-bold text-[#0f2c4a] pt-4">
                Un corps équilibré = une vie transformée.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/food-lab.jpg"
                alt="Nutrition et science - Wells Method"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/images/coach.png"
                alt="Coach Wells Method"
                width={400}
                height={400}
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2c4a]">
                NOTRE MÉTHODE
              </h2>
              <h3 className="text-2xl font-semibold text-[#0f2c4a]">
                C'est Très Facile
              </h3>
              <p className="text-lg text-gray-700">
                Nous ne proposons pas une pilule magique, mais une approche structurée et personnalisée qui combine :
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Analyse complète de votre profil hormonal</p>
                  <p className="text-gray-600 text-sm">via vos bilans sanguins</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Stratégie sur mesure</p>
                  <p className="text-gray-600 text-sm">pour rééquilibrer vos hormones clés (thyroïde, testostérone, œstrogènes, cortisol, insuline)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Nutrition adaptée</p>
                  <p className="text-gray-600 text-sm">un plan alimentaire qui soutient vos hormones et vos objectifs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Entraînement optimisé</p>
                  <p className="text-gray-600 text-sm">pas besoin de passer des heures à la salle, mais les bons exercices aux bons moments</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Hygiène de vie & biohacks</p>
                  <p className="text-gray-600 text-sm">sommeil, gestion du stress, routines efficaces</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <p className="font-semibold text-[#0f2c4a]">Compléments naturels</p>
                  <p className="text-gray-600 text-sm">sélectionnés pour soutenir vos résultats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2c4a] mb-4">
            Je peux m'attendre à quel résultat ?
          </h2>
          <h3 className="text-2xl font-semibold text-[#0f2c4a] mb-8">
            Imaginez-vous dans 3 mois...
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Votre silhouette s'affine et la perte de gras devient visible sans lutte permanente contre la balance, 
            votre énergie est stable du matin au soir et vous ne ressentez plus ces coups de fatigue qui vous freinaient, 
            vos nuits sont profondes et réparatrices et vous vous réveillez avec une clarté mentale nouvelle, 
            votre peau paraît plus nette, plus lumineuse, comme rajeunie, et chaque journée est portée par un sentiment 
            de vitalité et de confiance retrouvé.
          </p>
        </div>
      </section>

      {/* CTA + Calendly Section */}
      <section id="reservation" className="py-20 bg-gradient-to-br from-[#0f2c4a] to-[#1a4a6e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              C'est l'heure de passer à l'ACTION
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Vous en avez assez de chercher des solutions qui ne fonctionnent pas ?<br />
              Un simple appel peut changer la donne.
            </p>
            <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
              <p className="text-lg">Lors de cet échange, nous allons :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✔️</span>
                  Comprendre vos objectifs (perte de poids, énergie, sommeil, vitalité).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✔️</span>
                  Identifier les déséquilibres qui vous freinent.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✔️</span>
                  Vous montrer la méthode pour rééquilibrer vos hormones et enfin avancer.
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-200 mb-4">
              🎯 Cet appel n'engage à rien, mais il peut être le point de départ d'une véritable transformation.
            </p>
            <p className="text-xl font-semibold text-amber-400">
              👉 Réservez votre créneau dès maintenant et découvrez ce qui bloque vos résultats.
            </p>
          </div>
          
          {/* Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <CalendlyWidget url="https://calendly.com/meeting-lapharmacie-coaching/appel-d-interet-accompagnement-clone-1" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f33] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold">Wells Method</h3>
              <p className="text-gray-400 mt-2">Optimisation hormonale naturelle</p>
            </div>
            <div className="flex gap-6">
              <a href="/conditions-generales-de-vente" className="text-gray-400 hover:text-white transition-colors">
                Conditions générales de vente
              </a>
              <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Wells Method. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
