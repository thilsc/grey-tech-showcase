
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/thiagolsc',
      icon: Linkedin,
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/thilsc',
      icon: Github,
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-500/10'
    },
    {
      name: 'DEV.to',
      url: 'https://dev.to/thcoutinho',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45c.56 0 .96-.12 1.11-.4.16-.28.24-.77.24-1.46 0-.69-.08-1.18-.24-1.46-.16-.28-.56-.4-1.11-.4-.18 0-.46.07-.64.23zm12.72 3.18c-.18.16-.46.23-.84.23h-.58l.02-2.44-.04-2.45c.56 0 .96.12 1.11.4.16.28.24.77.24 1.46 0 .69-.08 1.18-.24 1.46-.16.28-.56.4-1.11.4-.18 0-.46-.07-.64-.23zM24 0H0v24h24V0zM8.56 12.68c-.02.33-.06.66-.14.98-.08.32-.2.6-.36.84-.16.24-.36.43-.6.57-.24.14-.54.21-.9.21-.36 0-.66-.07-.9-.21-.24-.14-.44-.33-.6-.57-.16-.24-.28-.52-.36-.84-.08-.32-.12-.65-.14-.98l-.02-3.36c.02-.33.06-.66.14-.98.08-.32.2-.6.36-.84.16-.24.36-.43.6-.57.24-.14.54-.21.9-.21.36 0 .66.07.9.21.24.14.44.33.6.57.16.24.28.52.36.84.08.32.12.65.14.98l.02 3.36zm8.24 0c-.02.33-.06.66-.14.98-.08.32-.2.6-.36.84-.16.24-.36.43-.6.57-.24.14-.54.21-.9.21-.36 0-.66-.07-.9-.21-.24-.14-.44-.33-.6-.57-.16-.24-.28-.52-.36-.84-.08-.32-.12-.65-.14-.98l-.02-3.36c.02-.33.06-.66.14-.98.08-.32.2-.6.36-.84.16-.24.36-.43.6-.57.24-.14.54-.21.9-.21.36 0 .66.07.9.21.24.14.44.33.6.57.16.24.28.52.36.84.08.32.12.65.14.98l.02 3.36zm4.09-4.68h-2.32v7.36h-.96V8h-2.32v-.64h5.6V8z"/>
        </svg>
      ),
      color: 'hover:text-black',
      bgColor: 'hover:bg-black/10'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Entre em Contato</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                  ou apenas trocar ideias sobre tecnologia. Vamos conversar!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-blue-400" size={20} />
                  <span>contato@thiagocoutinho.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="text-blue-400" size={20} />
                  <span>+55 (44) 9****-****</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Maringá, Brasil</span>
                </div>
              </div>

              {/* Social Links - Destaque especial */}
              <div className="pt-8">
                <h4 className="text-xl font-semibold mb-6 text-blue-400">Conecte-se Comigo</h4>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-6 bg-gray-800 border border-gray-700 rounded-xl ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-105 hover:border-current`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <IconComponent />
                          <span className="text-sm font-medium">{social.name}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
