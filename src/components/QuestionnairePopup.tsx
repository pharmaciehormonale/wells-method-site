"use client";

import { useState, useEffect } from "react";

interface QuestionnairePopupProps {
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "Quel est votre objectif principal ?",
    options: [
      "Perdre du gras durablement",
      "Augmenter mon énergie",
      "Améliorer mon sommeil",
      "Optimiser ma santé globale",
    ],
  },
  {
    id: 2,
    question: "Depuis combien de temps cherchez-vous une solution ?",
    options: [
      "Moins de 6 mois",
      "6 mois à 1 an",
      "1 à 3 ans",
      "Plus de 3 ans",
    ],
  },
  {
    id: 3,
    question: "Êtes-vous prêt(e) à investir dans votre santé ?",
    options: [
      "Oui, c'est ma priorité",
      "Oui, si les résultats sont garantis",
      "Je réfléchis encore",
      "Je veux d'abord en savoir plus",
    ],
  },
];

export default function QuestionnairePopup({ onClose }: QuestionnairePopupProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Questionnaire complete - scroll to calendar
      handleClose();
      setTimeout(() => {
        document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">
              Question {currentStep + 1} sur {questions.length}
            </span>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#b8860b] to-[#d4a853] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {questions[currentStep].question}
          </h3>
          <p className="text-gray-500">
            Sélectionnez la réponse qui vous correspond le mieux
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#b8860b] hover:bg-amber-50/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-[#b8860b] group-hover:bg-[#b8860b] flex items-center justify-center transition-all duration-200">
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-400">
            🔒 Vos réponses restent confidentielles
          </p>
        </div>
      </div>
    </div>
  );
}
