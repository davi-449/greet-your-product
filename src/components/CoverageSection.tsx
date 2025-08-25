
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const CoverageSection = () => {
  const coverageData = [
    {
      service: "Indicação de mão de obra",
      essencial: true,
      completo: true,
      completoPlus: true
    },
    {
      service: "Serviços emergenciais (encanador, eletricista, chaveiro e vidraceiro)",
      essencial: "Até 4 conjuntos",
      completo: "Até 12 conjuntos",
      completoPlus: "Até 12 conjuntos"
    },
    {
      service: "Cobertura provisória de telhados",
      essencial: true,
      completo: true,
      completoPlus: true
    },
    {
      service: "Vigilante",
      essencial: false,
      completo: true,
      completoPlus: true
    },
    {
      service: "Limpeza",
      essencial: false,
      completo: true,
      completoPlus: true
    },
    {
      service: "Regresso antecipado",
      essencial: false,
      completo: false,
      completoPlus: true
    }
  ];

  const plans = [
    { name: "Essencial", color: "bg-gray-100", textColor: "text-gray-900" },
    { name: "Completo", color: "bg-zurich-blue", textColor: "text-white" },
    { name: "Completo +", color: "bg-gradient-coral", textColor: "text-white" }
  ];

  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Compare Nossos Planos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Header Row */}
            <div className="md:col-span-1">
              <div className="h-16 flex items-center">
                <h3 className="font-semibold text-gray-900">Serviços Disponíveis</h3>
              </div>
            </div>
            
            {plans.map((plan, index) => (
              <div key={index} className="md:col-span-1">
                <Card className={`${plan.color} ${plan.textColor} border-0 shadow-lg`}>
                  <CardHeader className="text-center py-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}

            {/* Coverage Rows */}
            {coverageData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="md:col-span-1 flex items-center py-4 border-b border-gray-100">
                  <span className="text-sm text-gray-700">{item.service}</span>
                </div>
                
                <div className="md:col-span-1 flex items-center justify-center py-4 border-b border-gray-100">
                  {typeof item.essencial === 'boolean' ? (
                    item.essencial ? (
                      <Check className="w-5 h-5 text-zurich-green" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" />
                    )
                  ) : (
                    <span className="text-sm text-gray-700 text-center">{item.essencial}</span>
                  )}
                </div>
                
                <div className="md:col-span-1 flex items-center justify-center py-4 border-b border-gray-100">
                  {typeof item.completo === 'boolean' ? (
                    item.completo ? (
                      <Check className="w-5 h-5 text-zurich-green" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" />
                    )
                  ) : (
                    <span className="text-sm text-gray-700 text-center">{item.completo}</span>
                  )}
                </div>
                
                <div className="md:col-span-1 flex items-center justify-center py-4 border-b border-gray-100">
                  {typeof item.completoPlus === 'boolean' ? (
                    item.completoPlus ? (
                      <Check className="w-5 h-5 text-zurich-green" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" />
                    )
                  ) : (
                    <span className="text-sm text-gray-700 text-center">{item.completoPlus}</span>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
