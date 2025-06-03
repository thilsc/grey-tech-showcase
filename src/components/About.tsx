
import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 85 }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Linux'
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência 
                criando soluções web inovadoras. Minha jornada começou com curiosidade sobre como 
                as coisas funcionam na internet e evoluiu para uma carreira dedicada a construir 
                produtos digitais que fazem a diferença.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Especializo-me em desenvolvimento full-stack, com foco especial em React, Node.js 
                e arquiteturas escaláveis na nuvem. Acredito que o código limpo e a experiência 
                do usuário andam de mãos dadas.
              </p>

              <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Tecnologias</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills Principais</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
