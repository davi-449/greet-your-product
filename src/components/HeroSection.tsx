
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-coral min-h-[90vh] flex items-center relative overflow-hidden">
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
                className="bg-white text-zurich-coral hover:bg-white/90 text-lg px-8 py-4 hover-lift"
              >
                Solicitar Cotação
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white hover:text-zurich-coral text-lg px-8 py-4"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="/lovable-uploads/e32b35e7-1b5c-473e-b13b-a9a7a9c735ae.png"
                alt="Casal feliz em casa - Zurich Residência"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
