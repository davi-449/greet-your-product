import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Users, Leaf } from "lucide-react";

const BenefitsSection = () => {
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
              >
                Contratar Agora
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/8ecdcd31-0f67-4f5f-ae65-3780293de5ed.png"
                  alt="Detalhes do plano Completo+"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-zurich-blue/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-zurich-blue/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
