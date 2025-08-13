import React from 'react';
import './App.css';
import { Phone, Instagram, Mail, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

// Importando as imagens
import logoAlan from './assets/logoalan.jpg';
import ceno1 from './assets/ceno1.jpg';
import ceno2 from './assets/ceno2.jpg';
import ceno3 from './assets/ceno3.jpg';
import ceno4 from './assets/ceno4.jpg';
import ceno5 from './assets/ceno5.jpg';
import ceno6 from './assets/ceno6.jpg';

function App() {
  const portfolioImages = [
    { src: ceno1, alt: "Cenografia em madeira com arcos clássicos" },
    { src: ceno2, alt: "Stand moderno com iluminação LED" },
    { src: ceno3, alt: "Stand interativo sobre energia" },
    { src: ceno4, alt: "Estruturas em madeira para feira" },
    { src: ceno5, alt: "Arco decorativo em construção" },
    { src: ceno6, alt: "Stand completo com design elegante" }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Cenografia Personalizada",
      description: "Criamos cenários únicos e personalizados para eventos, feiras e exposições, sempre alinhados com a identidade da sua marca."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Stands para Feiras",
      description: "Desenvolvimento completo de stands para feiras comerciais, desde o conceito até a montagem final, garantindo máximo impacto visual."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "Montagem Profissional",
      description: "Equipe especializada em montagem rápida e eficiente, respeitando prazos e garantindo a qualidade em cada detalhe."
    }
  ];

  const stats = [
    { number: "500+", label: "Projetos Realizados" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "100%", label: "Satisfação dos Clientes" },
    { number: "24h", label: "Suporte Disponível" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={logoAlan} 
                alt="AL Cenografia Logo" 
                className="h-12 w-12 object-contain rounded-lg shadow-md"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">AL Cenografia</h1>
                <p className="text-sm text-amber-600 font-medium">Qualidade do atendimento ao acabamento</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Início</a>
              <a href="#servicos" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Serviços</a>
              <a href="#portfolio" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Portfólio</a>
              <a href="#contato" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transformamos <span className="text-amber-400">Ideias</span> em 
              <span className="text-amber-400"> Realidade</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Especialistas em montagem e criação de cenografia e stands para feiras. 
              Qualidade garantida do atendimento ao acabamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                Ver Nossos Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em cenografia e stands, sempre com foco na qualidade e na satisfação do cliente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-amber-100 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Nosso Portfólio</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Confira alguns dos nossos projetos mais recentes e veja a qualidade do nosso trabalho.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Entre em Contato</h3>
              <p className="text-xl text-slate-300">
                Pronto para transformar suas ideias em realidade? Entre em contato conosco!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-amber-400">Fale Conosco</h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-600 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-slate-300">(11) 95200-1725</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-600 rounded-full">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-slate-300">@alcenografia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-600 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-300">contato@alcenografia.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6 text-amber-400">Solicite um Orçamento</h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Seu telefone"
                    className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                  />
                  <textarea 
                    placeholder="Descreva seu projeto"
                    rows="4"
                    className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none resize-none"
                  ></textarea>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src={logoAlan} 
                alt="AL Cenografia Logo" 
                className="h-10 w-10 object-contain rounded-lg"
              />
              <div>
                <h5 className="font-bold">AL Cenografia</h5>
                <p className="text-sm text-slate-400">Qualidade do atendimento ao acabamento</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">© 2024 AL Cenografia. Todos os direitos reservados.</p>
              <p className="text-sm text-slate-500 mt-1">Desenvolvido com excelência para sua marca.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
