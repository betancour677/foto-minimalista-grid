import React from 'react';

export const Header = () => {
  return (
    <header className="py-8 px-6 md:px-8 flex justify-between items-center animate-fade-in">
      <h1 className="text-2xl font-semibold">John Doe</h1>
      <nav>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a></li>
          <li><a href="#about" className="hover:text-gray-600 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};