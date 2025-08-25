import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteFlow from "./QuoteFlow";

const Footer = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold">ZURICH</span>
            </div>
            <p className="text-gray-300 mb-6">
              Proteção e tranquilidade para sua residência com o melhor em assistência 24h.
            </p>
            <Button
              className="bg-gradient-blue hover:opacity-90 text-white"
              onClick={() => setIsQuoteOpen(true)}
            >
              Solicitar Cotação
            </Button>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Assistência 24h</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cobertura Residencial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipamentos Portáteis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atividades Profissionais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Planos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Essencial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Completo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Completo +</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contato@zurich.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <span>24h todos os dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zurich. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      <QuoteFlow
        open={isQuoteOpen}
        onOpenChange={setIsQuoteOpen}
      />
    </footer>
  );
};

export default Footer;
