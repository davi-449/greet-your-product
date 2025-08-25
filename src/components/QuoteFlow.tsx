import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QuoteWizard from "./QuoteWizard";
import QuoteResult from "./QuoteResult";

interface QuoteFlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Answer {
  questionId: string;
  value: string;
  label: string;
}

type FlowState = "wizard" | "result";

const QuoteFlow: React.FC<QuoteFlowProps> = ({ open, onOpenChange }) => {
  const [flowState, setFlowState] = useState<FlowState>("wizard");
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleWizardComplete = (finalAnswers: Answer[]) => {
    setAnswers(finalAnswers);
    setFlowState("result");
  };

  const handleBackToWizard = () => {
    setFlowState("wizard");
  };

  const handleStartOver = () => {
    setAnswers([]);
    setFlowState("wizard");
  };

  const handleClose = () => {
    setFlowState("wizard");
    setAnswers([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0">
        {flowState === "wizard" && (
          <QuoteWizard
            open={true}
            onOpenChange={() => {}}
            onComplete={handleWizardComplete}
            initialAnswers={answers}
          />
        )}
        
        {flowState === "result" && (
          <QuoteResult
            answers={answers}
            onBack={handleBackToWizard}
            onStartOver={handleStartOver}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFlow;
