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
            {/* Plano Completo+ Card */}
            <Card className="border-0 shadow-2xl bg-gradient-blue text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano Completo +</h3>
                  <div className="text-3xl font-bold">R$ 119,90<span className="text-lg font-normal">/mês</span></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Regresso antecipado incluído</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Atividades profissionais cobertas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Até 12 conjuntos de serviços</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Despesas extraordinárias +10%</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-90">Máxima proteção</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas adicionais */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-zurich-blue">24h</div>
                  <div className="text-sm text-gray-600">Atendimento</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-zurich-blue">100%</div>
                  <div className="text-sm text-gray-600">Digital</div>
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
