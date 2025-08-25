import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from "lucide-react";
import QuoteFlow from "./QuoteFlow";

const HeroSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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

          <div className="relative lg:block hidden">
            <div className="grid grid-cols-2 gap-4">
              {/* Card Atendimento 24h */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">24h</h3>
                <p className="text-white/80 text-sm">Atendimento disponível todos os dias</p>
              </div>

              {/* Card Proteção Completa */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">100%</h3>
                <p className="text-white/80 text-sm">Proteção para sua residência</p>
              </div>

              {/* Card Serviços */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift col-span-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">3 Planos Disponíveis</h3>
                    <p className="text-white/80 text-sm">Essencial • Completo • Completo +</p>
                  </div>
                </div>
              </div>

              {/* Estatística */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift col-span-2 text-center">
                <div className="text-3xl font-bold text-white mb-2">R$ 29,90</div>
                <p className="text-white/80 text-sm">A partir de</p>
                <p className="text-white/60 text-xs mt-1">por mês</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full"></div>
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
