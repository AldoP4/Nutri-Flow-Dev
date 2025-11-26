import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceDeskWidget } from './components/ServiceDeskWidget';
import { ProductCard } from './components/ProductCard';
import { PRODUCTS } from './constants';
import { Settings } from 'lucide-react';

const App: React.FC = () => {
  // State to simulate the Incident Management practice
  const [isIncidentActive, setIsIncidentActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header containing Security and Incident Banners */}
      <Header isIncidentActive={isIncidentActive} />

      {/* SIMULATION CONTROL PANEL (For the Presenter) */}
      <div className="bg-yellow-50 border-b border-yellow-200 p-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-yellow-800 text-sm font-medium">
            <Settings size={16} />
            <span>Panel de Control de Simulación ITIL (Solo Presentador)</span>
          </div>
          {/* ITIL 4 PRACTICE: Incident Management (Trigger) */}
          <button
            onClick={() => setIsIncidentActive(!isIncidentActive)}
            className={`px-4 py-1 rounded text-xs font-bold transition-colors ${
              isIncidentActive 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {isIncidentActive ? 'SOLUCIONAR INCIDENTE' : 'SIMULAR INCIDENTE CRÍTICO'}
          </button>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero Section con Fondo Animado Profesional */}
        <section className="relative w-full overflow-hidden bg-white border-b border-gray-200">
           {/* Capa de Animación de Fondo */}
           <div className="absolute inset-0 z-0 opacity-60">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-16 left-1/3 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
           </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
              Potencia tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Rendimiento</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Suplementos respaldados por la ciencia y entregados con la garantía de servicios gestionados bajo estándares ITIL.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-xl shadow-green-600/20 text-lg">
                Comprar Ahora
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-white hover:border-gray-300 transition-all transform hover:scale-105 text-lg shadow-sm">
                Conocer Más
              </button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Productos Destacados</h2>
            <div className="text-sm text-gray-500 cursor-pointer hover:text-green-600 flex items-center gap-1 transition-colors">
              Ver todo <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-green-400">Envío Rápido</h3>
              <p className="text-slate-300">Logística optimizada y entrega prioritaria.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-green-400">Calidad Premium</h3>
              <p className="text-slate-300">Ingredientes verificados por terceros.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-green-400">Soporte 24/7</h3>
              <p className="text-slate-300">Service Desk siempre activo (SLA Gold).</p>
            </div>
          </div>
        </section>
      </main>

      <ServiceDeskWidget />
      <Footer />
    </div>
  );
};

export default App;