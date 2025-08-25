interface Answer {
  questionId: string;
  value: string;
  label: string;
}

export interface Plan {
  id: "essencial" | "completo" | "completo_plus";
  name: string;
  features: string[];
  highlighted: string[];
  description: string;
  color: string;
}

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    features: [
      "Indicação de mão de obra",
      "Até 4 conjuntos de serviços emergenciais",
      "Cobertura provisória de telhados",
      "Atendimento em horário comercial"
    ],
    highlighted: ["Proteção básica", "Melhor custo-benefício"],
    description: "Ideal para quem busca proteção básica com excelente custo-benefício",
    color: "bg-gray-100 text-gray-900"
  },
  {
    id: "completo",
    name: "Completo",
    features: [
      "Tudo do plano Essencial",
      "Até 12 conjuntos de serviços emergenciais",
      "Serviço de vigilante",
      "Serviço de limpeza",
      "Cobertura para equipamentos portáteis"
    ],
    highlighted: ["Proteção ampla", "Serviços extras"],
    description: "Proteção completa para residências com necessidades específicas",
    color: "bg-zurich-blue text-white"
  },
  {
    id: "completo_plus",
    name: "Completo +",
    features: [
      "Tudo do plano Completo",
      "Regresso antecipado",
      "Atendimento 24h todos os dias",
      "Cobertura para atividades profissionais",
      "Proteção premium para objetos de valor",
      "Despesas extraordinárias (+10%)"
    ],
    highlighted: ["Proteção premium", "Atendimento 24h", "Uso profissional"],
    description: "Máxima proteção para residências de alto padrão e uso profissional",
    color: "bg-gradient-blue text-white"
  }
];

export function calculateRecommendation(answers: Answer[]): {
  recommendedPlan: Plan;
  score: { essencial: number; completo: number; completo_plus: number };
  personalizedReasons: string[];
} {
  let essencialScore = 0;
  let completoScore = 0;
  let completoPlusScore = 0;
  const personalizedReasons: string[] = [];

  answers.forEach(answer => {
    switch (answer.questionId) {
      case "residence_type":
        if (answer.value.includes("owned")) {
          completoScore += 2;
          completoPlusScore += 3;
          personalizedReasons.push("Como proprietário, você precisa de proteção mais abrangente");
        } else {
          essencialScore += 3;
          personalizedReasons.push("Para imóveis alugados, focamos na proteção dos seus bens pessoais");
        }
        break;

      case "property_value":
        switch (answer.value) {
          case "up_50k":
            essencialScore += 3;
            personalizedReasons.push("Seus bens se adequam perfeitamente à proteção básica");
            break;
          case "50k_100k":
            essencialScore += 1;
            completoScore += 3;
            personalizedReasons.push("Com bens de valor moderado, recomendamos proteção intermediária");
            break;
          case "100k_200k":
            completoScore += 2;
            completoPlusScore += 3;
            personalizedReasons.push("Bens valiosos merecem proteção premium");
            break;
          case "above_200k":
            completoPlusScore += 4;
            personalizedReasons.push("Para bens de alto valor, somente o plano premium oferece proteção adequada");
            break;
        }
        break;

      case "priorities":
        switch (answer.value) {
          case "electronics":
            completoScore += 2;
            completoPlusScore += 2;
            personalizedReasons.push("Eletrônicos precisam de cobertura portátil especializada");
            break;
          case "furniture":
            essencialScore += 2;
            completoScore += 1;
            personalizedReasons.push("Móveis são bem protegidos em todos os nossos planos");
            break;
          case "documents":
            completoScore += 1;
            completoPlusScore += 2;
            personalizedReasons.push("Documentos importantes requerem proteção especializada");
            break;
          case "valuables":
            completoPlusScore += 3;
            personalizedReasons.push("Objetos de valor necessitam da máxima proteção");
            break;
        }
        break;

      case "work_activity":
        switch (answer.value) {
          case "home_office":
            completoScore += 2;
            completoPlusScore += 2;
            personalizedReasons.push("Home office precisa de cobertura para equipamentos profissionais");
            break;
          case "professional_use":
            completoPlusScore += 4;
            personalizedReasons.push("Atividade profissional requer cobertura especializada");
            break;
          case "residential_only":
            essencialScore += 1;
            personalizedReasons.push("Para uso residencial, temos opções adequadas para toda necessidade");
            break;
        }
        break;

      case "budget":
        switch (answer.value) {
          case "up_50":
            essencialScore += 3;
            personalizedReasons.push("Nosso plano Essencial oferece ótimo custo-benefício dentro do seu orçamento");
            break;
          case "50_100":
            essencialScore += 1;
            completoScore += 3;
            personalizedReasons.push("Seu orçamento permite acesso a proteção mais completa");
            break;
          case "100_200":
            completoScore += 1;
            completoPlusScore += 3;
            personalizedReasons.push("Com esse orçamento, você pode ter proteção premium");
            break;
          case "above_200":
            completoPlusScore += 4;
            personalizedReasons.push("Seu orçamento permite acesso à máxima proteção disponível");
            break;
        }
        break;

      case "urgency":
        switch (answer.value) {
          case "essential":
            completoPlusScore += 4;
            personalizedReasons.push("Atendimento 24h é exclusivo do nosso plano premium");
            break;
          case "important":
            completoScore += 1;
            completoPlusScore += 2;
            personalizedReasons.push("Para emergências, nosso atendimento 24h é ideal");
            break;
          case "flexible":
            essencialScore += 2;
            personalizedReasons.push("Atendimento em horário comercial atende suas necessidades");
            break;
        }
        break;
    }
  });

  // Determine recommended plan
  const scores = { essencial: essencialScore, completo: completoScore, completo_plus: completoPlusScore };
  let recommendedPlan: Plan;

  if (completoPlusScore >= completoScore && completoPlusScore >= essencialScore) {
    recommendedPlan = plans[2]; // Completo +
  } else if (completoScore >= essencialScore) {
    recommendedPlan = plans[1]; // Completo
  } else {
    recommendedPlan = plans[0]; // Essencial
  }

  // Limit personalized reasons to most relevant ones
  const limitedReasons = personalizedReasons.slice(0, 3);

  return {
    recommendedPlan,
    score: scores,
    personalizedReasons: limitedReasons
  };
}

export function generateWhatsAppMessage(plan: Plan, answers: Answer[]): string {
  const residence = answers.find(a => a.questionId === "residence_type")?.label || "residência";
  const budget = answers.find(a => a.questionId === "budget")?.label || "";

  const message = `Olá! Acabei de fazer a simulação no site da Zurich e tenho interesse no *${plan.name}*.

📋 *Meu perfil:*
• Tipo de residência: ${residence}
• Orçamento: ${budget}

💙 *Plano escolhido: ${plan.name}*
${plan.description}

Gostaria de mais informações sobre os valores e fazer a contratação. Quando podemos conversar?`;

  return encodeURIComponent(message);
}
