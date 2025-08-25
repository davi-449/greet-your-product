import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, MessageCircle, ArrowLeft, Share2 } from "lucide-react";
import { Plan, calculateRecommendation, generateWhatsAppMessage, plans } from "@/utils/planRecommendation";

interface Answer {
  questionId: string;
  value: string;
  label: string;
}

interface QuoteResultProps {
  answers: Answer[];
  onBack: () => void;
  onStartOver: () => void;
}

const WHATSAPP_NUMBER = "5511979699832"; // Formatted for WhatsApp (country code + number)

const QuoteResult: React.FC<QuoteResultProps> = ({ answers, onBack, onStartOver }) => {
  const recommendation = calculateRecommendation(answers);
  const { recommendedPlan, personalizedReasons, score } = recommendation;

  const handleWhatsAppContact = () => {
    const message = generateWhatsAppMessage(recommendedPlan, answers);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: `Meu plano ideal: ${recommendedPlan.name}`,
        text: `Descobri meu plano ideal na Zurich: ${recommendedPlan.name} por ${recommendedPlan.price}`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-zurich-blue rounded-full">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Seu Plano Ideal
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Baseado nas suas respostas, encontramos o plano perfeito para suas necessidades
        </p>
      </div>

      {/* Recommended Plan - Large Card */}
      <Card className={`${recommendedPlan.color} border-0 shadow-xl relative overflow-hidden`}>
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-zurich-blue font-semibold">
            Recomendado para você
          </Badge>
        </div>
        
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold">
            {recommendedPlan.name}
          </CardTitle>
          <div className="text-3xl font-bold">
            {recommendedPlan.price}
          </div>
          <p className={`text-lg ${recommendedPlan.id === 'essencial' ? 'text-gray-600' : 'text-white/90'}`}>
            {recommendedPlan.description}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Highlighted Features */}
          <div className="flex flex-wrap gap-2">
            {recommendedPlan.highlighted.map((highlight, index) => (
              <Badge 
                key={index} 
                className="bg-white/20 text-white border-white/30"
              >
                {highlight}
              </Badge>
            ))}
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-3">
            {recommendedPlan.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className={`w-5 h-5 mt-0.5 ${
                  recommendedPlan.id === 'essencial' ? 'text-zurich-blue' : 'text-white'
                }`} />
                <span className={`text-sm ${
                  recommendedPlan.id === 'essencial' ? 'text-gray-700' : 'text-white'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personalized Reasons */}
      <Card className="border-zurich-blue/20 bg-zurich-blue/5">
        <CardHeader>
          <CardTitle className="text-lg text-zurich-blue">
            Por que este plano é ideal para você?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {personalizedReasons.map((reason, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-zurich-blue rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Other Plans Comparison */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          Compare com outros planos
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => {
            const isRecommended = plan.id === recommendedPlan.id;
            const planScore = score[plan.id];
            
            return (
              <Card 
                key={plan.id} 
                className={`transition-all ${
                  isRecommended 
                    ? "ring-2 ring-zurich-blue scale-105" 
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <CardHeader className="text-center pb-2">
                  {isRecommended && (
                    <Badge className="w-fit mx-auto bg-zurich-blue text-white mb-2">
                      Seu plano
                    </Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <div className="text-xl font-bold text-zurich-blue">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">
                      Compatibilidade: {Math.round((planScore / 12) * 100)}%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-zurich-blue h-2 rounded-full transition-all"
                        style={{ width: `${(planScore / 12) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handleWhatsAppContact}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 px-8 py-4"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Contratar via WhatsApp</span>
        </Button>
        
        <Button
          onClick={handleShareResult}
          variant="outline"
          size="lg"
          className="flex items-center space-x-2 px-8 py-4"
        >
          <Share2 className="w-4 h-4" />
          <span>Compartilhar Resultado</span>
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Button>

        <Button
          variant="ghost"
          onClick={onStartOver}
          className="text-gray-600 hover:text-gray-900"
        >
          Refazer simulação
        </Button>
      </div>
    </div>
  );
};

export default QuoteResult;
