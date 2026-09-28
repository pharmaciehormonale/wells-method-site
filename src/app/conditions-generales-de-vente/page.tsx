import Link from "next/link";

export const metadata = {
  title: "Conditions Générales de Vente | Wells Method",
  description: "Conditions générales de vente des programmes de formation et d'accompagnement Wells Method.",
};

export default function CGV() {
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
        <h1 className="text-4xl font-bold text-[#0f2c4a] mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 1 – Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités de vente, 
            d'accès et d'utilisation des programmes de formation et d'accompagnement proposés par Luma Innovation LLC.
          </p>
          <p>Toute commande implique l'acceptation sans réserve des présentes CGV.</p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 2 – Prix et modalités de paiement</h2>
          <p>
            Les prix des accompagnements et formations sont déterminés individuellement lors d'un appel préalable 
            entre le formateur et le client.
          </p>
          <p>
            Le tarif applicable, les modalités de règlement et les éventuels arrangements de paiement sont confirmés 
            par écrit à l'issue de cet appel.
          </p>
          <p>Le paiement peut s'effectuer en une ou plusieurs fois, selon les conditions convenues entre les parties.</p>
          <p>En cas de paiement échelonné, le client s'engage à respecter les échéances convenues.</p>
          <p>Tout défaut de paiement d'une seule mensualité rend immédiatement exigible le solde total restant dû.</p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 3 – Retard ou défaut de paiement</h2>
          <p>
            <strong>Frais en cas de retard de paiement :</strong> en cas de retard de paiement et après avoir effectué 
            au minimum 2 rappels écrits, le dossier sera transmis à notre agence externe de recouvrement, qui appliquera 
            des frais de traitement qui seront exigibles selon{" "}
            <a href="https://www.fairpay.ch" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
              www.fairpay.ch
            </a>.
          </p>
          <p>Ces frais viendront s'ajouter au montant total dû par le client.</p>
          <p>
            En cas de non-paiement, l'accès à la formation et au groupe Discord sera définitivement supprimé, 
            sans possibilité de réactivation.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 4 – Accès à la formation</h2>
          <p>L'accès au contenu de formation est strictement personnel et non transférable.</p>
          <p>
            Toute tentative de partage, de diffusion ou de revente du contenu sans autorisation écrite de 
            Luma Innovation LLC pourra entraîner la résiliation immédiate de l'accès, sans remboursement.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 5 – Responsabilité et avertissement</h2>
          <p>
            Cette formation/accompagnement repose sur des expériences personnelles et des connaissances autodidactes.
          </p>
          <p>
            Elle ne constitue en aucun cas un avis médical, financier ou professionnel au sens légal du terme.
          </p>
          <p>
            Le créateur et formateur n'est ni médecin, ni professionnel de santé, ni détenteur d'une licence ou 
            certification dans un domaine réglementé.
          </p>
          <p>
            L'acheteur reconnaît être pleinement responsable de l'usage qu'il fait des informations contenues 
            dans la formation/accompagnement.
          </p>
          <p>Toute mise en pratique est réalisée sous sa seule responsabilité.</p>
          <p>Aucun résultat spécifique n'est garanti.</p>
          <p>
            Luma Innovation LLC ne saurait être tenu responsable des conséquences directes ou indirectes des 
            actions entreprises à la suite de la formation/accompagnement.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 6 – Droit applicable</h2>
          <p>Les présentes Conditions Générales de Vente sont régies par le droit des États-Unis.</p>
          <p>
            En cas de litige, les parties s'efforceront de trouver une solution amiable avant toute action judiciaire.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f2c4a] mt-8 mb-4">Article 7 – Acceptation des conditions</h2>
          <p>
            En validant leur achat, les clients reconnaissent avoir lu, compris et accepté l'intégralité des 
            présentes Conditions Générales de Vente sans réserve.
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
