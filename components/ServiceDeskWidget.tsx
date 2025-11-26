import React, { useState } from 'react';
import { MessageCircle, X, Headphones } from 'lucide-react';

export const ServiceDeskWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
          <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Headphones size={18} />
              <span className="font-semibold">Mesa de Ayuda (Service Desk)</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={18} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Bienvenido al canal oficial de soporte. Como su Punto Único de Contacto (SPOC), estamos aquí para ayudarle con incidentes o peticiones.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                Reportar un Incidente
              </button>
              <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2 px-4 rounded transition-colors">
                Consultar Estado de Ticket
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-center text-gray-400">
              Disponible 24/7 bajo SLA Gold
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {/* ITIL 4 PRACTICE: Service Desk */}
      {/* Justification: Represents the formal communication channel with users. */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-gray-600' : 'bg-green-600'
        } text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center`}
        aria-label="Abrir soporte"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};