import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, Leaf } from "lucide-react";
import QuoteFlow from "./QuoteFlow";

const BenefitsSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Suporte disponível todos os dias, a qualquer hora"
    },
    {
      icon: Shield,
      title: "Cobertura Completa",
      description: "Proteção abrangente para sua residência e equipamentos"
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Equipe qualificada e experiente"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Serviços pensados de forma sustentável"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Só quem tem plano
              <br />
              <span className="text-zurich-blue">Completo +</span>
              <br />
              garante:
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover-lift">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-gradient-blue hover:opacity-90 text-white text-lg px-8 py-4 hover-lift"
                onClick={() => setIsQuoteOpen(true)}
              >
                Contratar Agora
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Destaque dos Benefícios Exclusivos */}
            <div className="bg-gradient-blue rounded-3xl p-8 text-white mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Benefícios Exclusivos</h3>
                <p className="text-white/80 mt-2">Só no Plano Completo +</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h4 className="font-semibold text-sm">Regresso Antecipado</h4>
                  <p className="text-xs text-white/80 mt-1">Cobertura completa</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h4 className="font-semibold text-sm">Atividade Profissional</h4>
                  <p className="text-xs text-white/80 mt-1">Proteção no trabalho</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h4 className="font-semibold text-sm">Serviços Ampliados</h4>
                  <p className="text-xs text-white/80 mt-1">Até 12 conjuntos</p>
                </div>
                <div className="text-center">
                  <Leaf className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h4 className="font-semibold text-sm">Despesas Extras</h4>
                  <p className="text-xs text-white/80 mt-1">Cobertura adicional</p>
                </div>
              </div>
            </div>

            {/* Cards de Qualidades */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-2 border-zurich-blue/20 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-zurich-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-zurich-blue" />
                  </div>
                  <h4 className="font-bold text-zurich-blue mb-1">Máxima Proteção</h4>
                  <p className="text-sm text-gray-600">O mais completo plano de seguro residencial</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-zurich-blue/20 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-zurich-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-zurich-blue" />
                  </div>
                  <h4 className="font-bold text-zurich-blue mb-1">Atendimento Premium</h4>
                  <p className="text-sm text-gray-600">Suporte especializado 24 horas por dia</p>
                </CardContent>
              </Card>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-zurich-blue/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-zurich-blue/10 rounded-full"></div>
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

export default BenefitsSection;
