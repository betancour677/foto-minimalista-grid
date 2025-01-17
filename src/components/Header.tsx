import React, { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-8 px-6 md:px-8 flex justify-between items-center animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold font-urbanist tracking-wide">Gustavo Luna</h1>
      <nav className="font-quicksand">
        <ul className="flex space-x-6 text-sm">
          <li>
            <a 
              href="#portfolio" 
              onClick={handleNavClick}
              className="hover:text-gray-600 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleNavClick}
              className="hover:text-gray-600 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              className="hover:text-gray-600 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};