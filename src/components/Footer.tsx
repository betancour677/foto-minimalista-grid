import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contacto@gustavoluna.cl</li>
              <li>Teléfono: +56 9 8765 4321</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
            <address className="text-gray-600 not-italic">
              Av. Nueva Providencia 2155<br />
              Oficina 812<br />
              Providencia, Santiago<br />
              Chile
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <p className="text-gray-600">
              Lunes a Viernes<br />
              9:00 - 18:00
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gustavo Luna Fotografía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};