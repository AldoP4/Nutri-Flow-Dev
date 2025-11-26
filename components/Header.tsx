import React from 'react';
import { ShieldCheck, ShoppingCart, Search, AlertTriangle, Menu } from 'lucide-react';

interface HeaderProps {
  isIncidentActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isIncidentActive }) => {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* ITIL 4 PRACTICE: Information Security Management */}
      {/* Justification: Demonstrates governance protecting critical assets. */}
      <div className="bg-slate-800 text-white text-xs py-2 px-4 flex items-center justify-center gap-2">
        <ShieldCheck size={14} className="text-green-400" />
        <span className="font-semibold tracking-wide">
          🔒 Transacciones y Datos de Cliente Asegurados por ITIL Security Management
        </span>
      </div>

      {/* ITIL 4 PRACTICE: Incident Management (Visual Component) */}
      {/* Justification: Allows simulation of live communication during an outage. */}
      {isIncidentActive && (
        <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-center animate-pulse">
          <AlertTriangle className="mr-2" size={20} />
          <span className="font-bold">
            ⚠️ ¡ALERTA! Incidente en la Pasarela de Pago. Checkout Degradado (INC-2024-001)
          </span>
        </div>
      )}

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="font-bold text-xl text-gray-800">NutriFlow</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <span className="text-gray-700 hover:text-green-600 cursor-pointer font-medium">Proteínas</span>
              <span className="text-gray-700 hover:text-green-600 cursor-pointer font-medium">Vitaminas</span>
              <span className="text-gray-700 hover:text-green-600 cursor-pointer font-medium">Rendimiento</span>
              <span className="text-gray-700 hover:text-green-600 cursor-pointer font-medium">Ofertas</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Search className="text-gray-500 cursor-pointer hover:text-green-600" size={20} />
              <div className="relative cursor-pointer">
                <ShoppingCart className="text-gray-500 hover:text-green-600" size={20} />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <Menu className="md:hidden text-gray-500" size={24} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};