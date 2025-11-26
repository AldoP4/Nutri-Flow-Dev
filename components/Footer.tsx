import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">NutriFlow</h3>
          <p className="text-sm">Tu socio en bienestar y rendimiento físico. Productos certificados.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Ayuda</h4>
          <ul className="space-y-2 text-sm">
            <li>Envíos y Devoluciones</li>
            <li>Preguntas Frecuentes</li>
            <li>Estado del Pedido</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacidad</li>
            <li>Términos de Servicio</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p className="text-sm">soporte@nutriflow.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-xs text-gray-500 mb-2">© 2024 NutriFlow Inc. Todos los derechos reservados.</p>
        
        {/* ITIL 4 PRACTICE: Deployment Management */}
        {/* Justification: Visible proof of controlled release processes. */}
        <div className="inline-block px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
          <p className="text-xs text-green-400 font-mono">
             Build: v3.0 | Desplegado bajo Control de Cambios ITIL
          </p>
        </div>
      </div>
    </footer>
  );
};