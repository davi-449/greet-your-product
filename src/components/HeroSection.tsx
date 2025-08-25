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

          <div className="relative lg:block hidden perspective-1000">
            {/* Mock 3D Container */}
            <div className="relative transform-gpu preserve-3d">

              {/* Main 3D Card Stack */}
              <div className="relative">
                {/* Back Card */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl transform rotate-y-12 rotate-x-6 scale-95 shadow-2xl"></div>

                {/* Middle Card */}
                <div className="absolute inset-0 bg-white/8 backdrop-blur-sm rounded-3xl transform rotate-y-6 rotate-x-3 scale-98 shadow-xl"></div>

                {/* Front Card - Main Interface */}
                <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-8 shadow-2xl transform hover:rotate-y-2 transition-transform duration-700 border border-white/20">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-white/60 text-sm font-mono">zurich.app</div>
                  </div>

                  {/* Content Area */}
                  <div className="space-y-6">
                    {/* Title Section */}
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl mb-2">Proteção Residencial</h3>
                      <div className="h-1 w-16 bg-white/40 rounded-full mx-auto"></div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                        <Shield className="w-6 h-6 text-white mb-2" />
                        <div className="text-white/90 text-sm font-medium">Proteção Total</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 transform hover:scale-105 transition-transform">
                        <Clock className="w-6 h-6 text-white mb-2" />
                        <div className="text-white/90 text-sm font-medium">24h Suporte</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-white/70 text-xs">
                        <span>Cobertura</span>
                        <span>100%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full w-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center pt-2">
                      <div className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-xl px-4 py-2 text-white text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Solicitar Cotação</span>
                      </div>
                    </div>
                  </div>
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
