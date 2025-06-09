
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Desenvolvedor Full Stack',
    'Criador de Soluções Tech',
    'Entusiasta de Código',
    'Inovador Digital'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, titles]);

  const scrollToNext = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-blue-500 animate-pulse">{'{'}</div>
        <div className="absolute top-40 right-20 text-4xl text-purple-500 animate-bounce">&lt;/&gt;</div>
        <div className="absolute bottom-40 left-20 text-5xl text-green-500 animate-pulse">{'}'}</div>
        <div className="absolute bottom-20 right-10 text-3xl text-yellow-500 animate-bounce">[ ]</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Olá, sou <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thiago Coutinho
            </span>
          </h1>
          
          <div className="h-20 mb-8">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              {text}
              <span className="animate-pulse text-blue-400">|</span>
            </h2>
          </div>

          {/* 
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformo ideias em código elegante e funcional. Especializado em criar experiências digitais 
            inovadoras que conectam tecnologia e usabilidade.
          </p> 
          */}

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especializado em integrar tecnologia e funcionalidade, atuo no desenvolvimento de software em Delphi e C#/.NET,
            transformo requisitos complexos em soluções robustas, garantindo entregas alinhadas às necessidades do negócio e ao usuário final.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Vamos Conversar
            </button>
            <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Baixar CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
