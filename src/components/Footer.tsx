
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
            &lt;DevPortfolio/&gt;
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2025 Thiago Coutinho. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">Desenvolvido com ❤️ e muita ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
