import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, ChevronRight, Home, DollarSign, Smartphone, Briefcase } from "lucide-react";
import QuoteFlow from "./QuoteFlow";

const HeroSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [miniWizardStep, setMiniWizardStep] = useState(0);
  const [miniAnswers, setMiniAnswers] = useState<any[]>([]);

  const miniQuestions = [
    {
      id: "residence_type",
      title: "Tipo de residência?",
      options: [
        { value: "house_owned", label: "Casa própria", icon: Home },
        { value: "apt_owned", label: "Apartamento próprio", icon: Home }
      ]
    },
    {
      id: "property_value",
      title: "Valor dos bens?",
      options: [
        { value: "up_50k", label: "Até R$ 50k", icon: DollarSign },
        { value: "above_50k", label: "Acima R$ 50k", icon: DollarSign }
      ]
    },
    {
      id: "priorities",
      title: "Proteger o quê?",
      options: [
        { value: "electronics", label: "Eletrônicos", icon: Smartphone },
        { value: "everything", label: "Tudo", icon: Shield }
      ]
    }
  ];

  const handleMiniAnswer = (value: string, label: string) => {
    const newAnswers = [...miniAnswers];
    newAnswers[miniWizardStep] = { value, label };
    setMiniAnswers(newAnswers);

    if (miniWizardStep < miniQuestions.length - 1) {
      setTimeout(() => setMiniWizardStep(miniWizardStep + 1), 300);
    } else {
      // Completo - abrir wizard completo
      setTimeout(() => setIsQuoteOpen(true), 500);
    }
  };

  const resetMiniWizard = () => {
    setMiniWizardStep(0);
    setMiniAnswers([]);
  };

  const currentMiniQuestion = miniQuestions[miniWizardStep];
  const progress = ((miniWizardStep + 1) / miniQuestions.length) * 100;

  return (
    <section className="bg-gradient-blue min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Zurich<br />
              <span className="text-white/90">Residência</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Serviços de Assistência<br />
              24h e Sustentáveis
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <span className="text-lg">Cobertura diferenciada para casa e equipamentos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-white" />
                <span className="text-lg">Proteção 24h para sua residência</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-white" />
                <span className="text-lg">Atendimento rápido e eficiente</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-zurich-blue hover:bg-white/90 text-lg px-8 py-4 hover-lift"
                onClick={() => setIsQuoteOpen(true)}
              >
                Solicitar Cotação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-zurich-blue text-lg px-8 py-4"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden perspective-1000">
            {/* Interactive 3D Onboard Container */}
            <div className="relative transform-gpu preserve-3d">

              {/* Background Cards Stack */}
              <div className="relative">
                {/* Back Card */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl transform rotate-y-12 rotate-x-6 scale-95 shadow-2xl"></div>

                {/* Middle Card */}
                <div className="absolute inset-0 bg-white/8 backdrop-blur-sm rounded-3xl transform rotate-y-6 rotate-x-3 scale-98 shadow-xl"></div>

                {/* Front Card - Interactive Onboard */}
                <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 min-h-[400px]">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <button
                      onClick={resetMiniWizard}
                      className="text-white/60 text-sm font-mono hover:text-white/80 transition-colors"
                    >
                      cotacao.app
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-white/70 text-xs mb-2">
                      <span>Progresso</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {miniWizardStep < miniQuestions.length ? (
                    /* Question Interface */
                    <div className="space-y-6 animate-fade-in">
                      {/* Question Title */}
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg mb-1">{currentMiniQuestion.title}</h3>
                        <p className="text-white/60 text-sm">Pergunta {miniWizardStep + 1} de {miniQuestions.length}</p>
                      </div>

                      {/* Answer Options */}
                      <div className="grid grid-cols-1 gap-3">
                        {currentMiniQuestion.options.map((option, index) => {
                          const IconComponent = option.icon;
                          return (
                            <button
                              key={option.value}
                              onClick={() => handleMiniAnswer(option.value, option.label)}
                              className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all duration-200 transform hover:scale-105 text-left group"
                            >
                              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-white font-medium">{option.label}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white/80 transition-colors" />
                            </button>
                          );
                        })}
                      </div>

                      {/* Selected Answers Preview */}
                      {miniAnswers.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/20">
                          <div className="text-white/60 text-xs mb-2">Suas respostas:</div>
                          <div className="flex flex-wrap gap-2">
                            {miniAnswers.slice(0, miniWizardStep).map((answer, index) => (
                              <div key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg">
                                {answer.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Completion State */
                    <div className="text-center space-y-6 animate-fade-in">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Quase pronto!</h3>
                        <p className="text-white/80 text-sm">Vamos finalizar sua cotação personalizada</p>
                      </div>
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-xl px-6 py-3 text-white font-medium"
                      >
                        <span>Ver Plano Ideal</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-2xl transform rotate-45 hover:rotate-90 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/5 rounded-full blur-sm"></div>

              {/* Light Rays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <QuoteFlow
        open={isQuoteOpen}
        onOpenChange={setIsQuoteOpen}
      />
    </section>
  );
};

export default HeroSection;
