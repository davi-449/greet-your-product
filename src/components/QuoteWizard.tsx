import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Home, Smartphone, Shield, DollarSign, Clock, Briefcase } from "lucide-react";

interface QuoteWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: (answers: Answer[]) => void;
  initialAnswers?: Answer[];
}

interface Answer {
  questionId: string;
  value: string;
  label: string;
}

interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: "single" | "multiple";
  options: {
    value: string;
    label: string;
    icon?: React.ElementType;
    description?: string;
  }[];
}

const questions: Question[] = [
  {
    id: "residence_type",
    title: "Qual tipo de residência você possui?",
    subtitle: "Isso nos ajuda a entender melhor suas necessidades",
    type: "single",
    options: [
      { value: "house_owned", label: "Casa própria", icon: Home, description: "Sou proprietário de uma casa" },
      { value: "apt_owned", label: "Apartamento próprio", icon: Home, description: "Sou proprietário de um apartamento" },
      { value: "house_rented", label: "Casa alugada", icon: Home, description: "Moro em casa alugada" },
      { value: "apt_rented", label: "Apartamento alugado", icon: Home, description: "Moro em apartamento alugado" }
    ]
  },
  {
    id: "property_value",
    title: "Qual o valor aproximado dos seus bens?",
    subtitle: "Considere móveis, eletrônicos e objetos de valor",
    type: "single",
    options: [
      { value: "up_50k", label: "Até R$ 50.000", icon: DollarSign, description: "Bens básicos" },
      { value: "50k_100k", label: "R$ 50.000 - R$ 100.000", icon: DollarSign, description: "Bens moderados" },
      { value: "100k_200k", label: "R$ 100.000 - R$ 200.000", icon: DollarSign, description: "Bens valiosos" },
      { value: "above_200k", label: "Acima de R$ 200.000", icon: DollarSign, description: "Bens de alto valor" }
    ]
  },
  {
    id: "priorities",
    title: "O que é mais importante proteger?",
    subtitle: "Selecione sua principal prioridade",
    type: "single",
    options: [
      { value: "electronics", label: "Equipamentos eletrônicos", icon: Smartphone, description: "TV, computador, celular" },
      { value: "furniture", label: "Móveis e decoração", icon: Home, description: "Sofás, camas, objetos decorativos" },
      { value: "documents", label: "Documentos importantes", icon: Shield, description: "Papéis e documentos valiosos" },
      { value: "valuables", label: "Joias e objetos de valor", icon: Shield, description: "Joias, relógios, obras de arte" }
    ]
  },
  {
    id: "work_activity",
    title: "Como você usa sua residência para trabalho?",
    subtitle: "Isso afeta o tipo de cobertura necessária",
    type: "single",
    options: [
      { value: "home_office", label: "Trabalho home office", icon: Briefcase, description: "Uso equipamentos profissionais em casa" },
      { value: "professional_use", label: "Atividade profissional", icon: Briefcase, description: "Atendo clientes ou uso profissionalmente" },
      { value: "residential_only", label: "Apenas residencial", icon: Home, description: "Uso somente para moradia" }
    ]
  },
  {
    id: "budget",
    title: "Qual seu orçamento mensal para seguro?",
    subtitle: "Isso nos ajuda a recomendar o plano ideal",
    type: "single",
    options: [
      { value: "up_50", label: "Até R$ 50", icon: DollarSign, description: "Orçamento básico" },
      { value: "50_100", label: "R$ 50 - R$ 100", icon: DollarSign, description: "Orçamento moderado" },
      { value: "100_200", label: "R$ 100 - R$ 200", icon: DollarSign, description: "Orçamento amplo" },
      { value: "above_200", label: "Acima de R$ 200", icon: DollarSign, description: "Orçamento premium" }
    ]
  },
  {
    id: "urgency",
    title: "Qual a importância do atendimento 24h?",
    subtitle: "Emergências podem acontecer a qualquer momento",
    type: "single",
    options: [
      { value: "essential", label: "Essencial - Preciso de 24h", icon: Clock, description: "Atendimento imediato é crucial" },
      { value: "important", label: "Importante - Prefiro 24h", icon: Clock, description: "24h seria muito útil" },
      { value: "flexible", label: "Flexível - Horário comercial", icon: Clock, description: "Posso aguardar horário comercial" }
    ]
  }
];

const QuoteWizard: React.FC<QuoteWizardProps> = ({ open, onOpenChange, onComplete, initialAnswers = [] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers);

  useEffect(() => {
    if (initialAnswers.length > 0) {
      setAnswers(initialAnswers);
      setCurrentStep(initialAnswers.length);
    }
  }, [initialAnswers]);

  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: string, label: string) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId);
    newAnswers.push({ questionId, value, label });
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete wizard and go to results
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const canProceed = !!currentAnswer;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Encontre seu plano ideal
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Pergunta {currentStep + 1} de {questions.length}</span>
            <span>{Math.round(progress)}% concluído</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="py-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {currentQuestion.title}
          </h3>
          {currentQuestion.subtitle && (
            <p className="text-gray-600">
              {currentQuestion.subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => {
            const IconComponent = option.icon || Home;
            const isSelected = currentAnswer?.value === option.value;

            return (
              <Card
                key={option.value}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected 
                    ? "ring-2 ring-zurich-blue bg-zurich-blue/5" 
                    : "hover:shadow-md"
                }`}
                onClick={() => handleAnswer(currentQuestion.id, option.value, option.label)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      isSelected 
                        ? "bg-zurich-blue text-white" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {option.label}
                      </h4>
                      {option.description && (
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-zurich-blue rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </Button>

        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="bg-zurich-blue hover:bg-zurich-blue/90 flex items-center space-x-2"
        >
          <span>
            {currentStep === questions.length - 1 ? "Ver Resultado" : "Próxima"}
          </span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuoteWizard;
