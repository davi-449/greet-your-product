import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">ZURICH</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className="text-gray-600 hover:text-zurich-blue transition-colors">
            Serviços
          </a>
          <a href="#cobertura" className="text-gray-600 hover:text-zurich-blue transition-colors">
            Cobertura
          </a>
          <a href="#beneficios" className="text-gray-600 hover:text-zurich-blue transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="text-gray-600 hover:text-zurich-blue transition-colors">
            Contato
          </a>
        </nav>

        <Button className="bg-gradient-blue hover:opacity-90 text-white border-0">
          Solicitar Cotação
        </Button>
      </div>
    </header>
  );
};

export default Header;
