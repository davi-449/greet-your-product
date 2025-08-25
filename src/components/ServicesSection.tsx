
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Smartphone, Briefcase, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Roubo/Furto qualificado de bicicletas",
      description: "Cobertura para roubo ou furto qualificado dentro ou fora da residência, com indenização de até R$ 5.000,00",
      highlight: "Até R$ 5.000"
    },
    {
      icon: Smartphone,
      title: "Equipamentos Portáteis",
      description: "Cobertura fora da residência para notebook, tablet, telefone celular e máquinas fotográficas",
      highlight: "Cobertura externa"
    },
    {
      icon: Briefcase,
      title: "Atividades Profissionais",
      description: "Proteção para equipamentos, máquinas e materiais relacionados à sua atividade profissional",
      highlight: "Uso profissional"
    },
    {
      icon: Shield,
      title: "Despesas Extraordinárias",
      description: "Acréscimo de 10% do valor de toda indenização para cobrir despesas materiais extras",
      highlight: "+10% cobertura"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso produto conta com coberturas diferenciadas, pensadas com todo cuidado para garantir itens básicos do dia-a-dia do nosso cliente, dentro e fora de casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-zurich-blue/10 text-zurich-blue px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {service.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
