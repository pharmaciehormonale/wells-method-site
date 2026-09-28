import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité | Wells Method",
  description: "Politique de confidentialité de Wells Method - Comment nous collectons, utilisons et protégeons vos informations personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0f2c4a] text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-2xl font-bold hover:text-amber-400 transition-colors">
            Wells Method
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#0f2c4a] mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-lg">
            La présente Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons 
            les informations personnelles des utilisateurs de notre site web et de notre formation. En utilisant 
            nos services, vous acceptez les pratiques décrites dans cette politique.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Données collectées</h2>
          <p>Nous collectons les types de données suivants lorsque vous utilisez notre site :</p>
          
          <h3 className="text-xl font-semibold text-[#0f2c4a] mt-6 mb-3">Informations que vous fournissez volontairement :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Informations de paiement (traitées via Stripe ou PayPal, nous n'avons pas accès à vos coordonnées bancaires)</li>
            <li>Toute autre information saisie volontairement (ex. : réponses à des formulaires, commentaires, messages envoyés via notre support)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0f2c4a] mt-6 mb-3">Informations collectées automatiquement :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adresse IP</li>
            <li>Type d'appareil et navigateur utilisé</li>
            <li>Pages visitées et durée de consultation</li>
            <li>Cookies et technologies similaires</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Utilisation des données</h2>
          <p>Nous utilisons vos informations personnelles dans les cas suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestion des commandes et accès à la formation</li>
            <li>Envoi d'e-mails de suivi et de marketing (si vous avez donné votre consentement)</li>
            <li>Support client et assistance technique</li>
            <li>Sécurisation et amélioration de nos services</li>
            <li>Respect des obligations légales</li>
          </ul>
          <p className="font-semibold mt-4">Nous ne revendons jamais vos données à des tiers.</p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Partage des données</h2>
          <p>Nous pouvons partager certaines données avec :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ClickFunnels (gestion de votre commande)</li>
            <li>Stripe / PayPal (traitement des paiements)</li>
            <li>Outils de marketing et d'emailing (ex. : Mailchimp, ActiveCampaign, Systeme.io)</li>
          </ul>
          <p className="mt-4">Tous ces services sont conformes au RGPD et au CCPA.</p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures de sécurité pour protéger vos informations contre tout accès 
            non autorisé, modification, divulgation ou destruction. Toutefois, aucune transmission de données 
            sur Internet n'est totalement sécurisée.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Cookies</h2>
          <p>Notre site utilise des cookies pour améliorer votre expérience utilisateur.</p>
          <h3 className="text-xl font-semibold text-[#0f2c4a] mt-6 mb-3">Types de cookies utilisés :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cookies essentiels (nécessaires au bon fonctionnement du site)</li>
            <li>Cookies analytiques (ex. : Google Analytics, Facebook Pixel)</li>
            <li>Cookies publicitaires (si applicable)</li>
          </ul>
          <p className="mt-4">
            En visitant notre site, vous pouvez accepter ou refuser l'utilisation de certains cookies via 
            les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Vos droits</h2>
          <p>Si vous résidez en Europe ou en Californie, vous avez les droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accès à vos données personnelles</li>
            <li>Correction ou mise à jour de vos informations</li>
            <li>Demande de suppression de vos données ("droit à l'oubli")</li>
            <li>Opposition à l'utilisation de vos données à des fins marketing</li>
          </ul>
          <p className="mt-4">
            Pour exercer vos droits, contactez-nous à :{" "}
            <a href="mailto:admin@luma-innovations.com" className="text-amber-600 hover:underline">
              admin@luma-innovations.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Conservation des données</h2>
          <p>Nous conservons vos informations :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aussi longtemps que nécessaire pour fournir nos services</li>
            <li>Jusqu'à 3 ans après votre dernière activité sur notre site</li>
            <li>Conformément aux obligations légales (facturation, litiges, etc.)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. 
            Les changements seront publiés sur cette page avec une mise à jour de la date.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Contact</h2>
          <p>
            Pour toute question concernant cette politique, contactez-nous à :{" "}
            <a href="mailto:admin@luma-innovations.com" className="text-amber-600 hover:underline">
              admin@luma-innovations.com
            </a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1f33] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Wells Method. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
