import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Code, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  ChevronRight, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Download,
  MousePointer2,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const phoneNumber = "2915729501";
  const whatsappUrl = `https://wa.me/54${phoneNumber}?text=Hola%20Franco,%20vimos%20tu%20perfil%20para%20Always%20Rentacar%20y%20nos%20gustaría%20contactarte.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setActiveSection(id);
      }}
      className={`px-4 py-2 transition-all duration-300 text-sm font-semibold rounded-lg ${
        activeSection === id ? 'bg-blue-50 text-blue-900' : 'text-slate-500 hover:text-blue-900 hover:bg-slate-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navegación Superior */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 text-white p-1.5 rounded-lg font-black text-xl shadow-lg shadow-blue-900/20">FS</div>
            <span className="font-extrabold tracking-tight text-blue-900 hidden sm:block">
              FRANCO SELVAROLO
            </span>
          </div>
          <div className="hidden md:flex space-x-2 bg-slate-100/50 p-1 rounded-xl border border-slate-200">
            <NavItem id="inicio" label="Inicio" />
            <NavItem id="valor" label="Propuesta" />
            <NavItem id="experiencia" label="Trayectoria" />
            <NavItem id="tech" label="Perfil Tech" />
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="src/assets/pdfs/Cv-Franco Selvarolo.pdf" 
              download
              className="hidden sm:flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-200 transition active:scale-95 border border-slate-200"
            >
              <Download size={14} />
              Descargar CV
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 transition transform hover:scale-105 shadow-xl shadow-green-600/20 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-right"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              <Zap size={12} className="fill-current" />
              <span>Ejecutivo Comercial Senior</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Movilidad <span className="text-blue-900">Estratégica</span> en Bahía Blanca.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed border-l-4 border-blue-900 pl-6">
              Experto en gestión B2B y logística operativa. Fusión de experiencia comercial directa con formación técnica avanzada.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={() => document.getElementById('valor')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-2xl shadow-blue-900/30 flex items-center group"
              >
                Mi Propuesta de Valor
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl"
              >
                <Phone size={18} />
                Llamar Ahora
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
               <div className="bg-slate-900 rounded-[2rem] p-8 text-white aspect-[4/3] flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Always Rentacar Insights</p>
                      <h4 className="text-2xl font-black mt-1">Status Operativo</h4>
                    </div>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-[10px] font-black flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      ZONA SUR
                    </div>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="flex justify-between text-xs mb-2 font-bold text-slate-300">
                            <span>Eficiencia en Logística B2B</span>
                            <span className="text-blue-400">98%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[98%] transition-all duration-1000"></div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Años Exp.</p>
                            <p className="text-2xl font-black">6+</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Compliance</p>
                            <p className="text-2xl font-black">100%</p>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section id="valor" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Estrategia Comercial B2B</h2>
            <p className="text-lg text-slate-600">Gestión de activos y relaciones comerciales de alto nivel para el mercado de alquiler de vehículos.</p>
            <div className="w-16 h-2 bg-blue-900 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Logística y Distribución", 
                desc: "Experiencia comprobada en control de stock, logística de productos y coordinación operativa regional.",
                icon: <Briefcase size={24} />
              },
              { 
                title: "Trato con Proveedores", 
                desc: "Capacidad de negociación de condiciones de compra y gestión eficaz de cuentas corrientes industriales.",
                icon: <TrendingUp size={24} />
              },
              { 
                title: "Gestión de Personal", 
                desc: "Liderazgo orientado al cumplimiento de objetivos operativos y estándares de calidad de servicio.",
                icon: <User size={24} />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-900 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="bg-blue-50 text-blue-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-black text-xl mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia Detallada */}
      <section id="experiencia" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2 className="text-4xl font-black text-blue-900 tracking-tight uppercase">Trayectoria Profesional</h2>
          </div>

          <div className="space-y-8">
            {/* Naturalia */}
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Titular de Unidad de Negocios</h3>
                  <p className="text-blue-600 font-black text-sm uppercase tracking-widest">Naturalia | 2011 – 2018</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-600 font-medium text-sm">
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Negociación estratégica con proveedores clave corporativos.</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Administración de presupuestos y análisis de KPIs financieros.</span></li>
              </ul>
            </div>

            {/* Maison Visente */}
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Administrativo y Logística</h3>
                  <p className="text-blue-600 font-black text-sm uppercase tracking-widest">Perfumería Maison Visente | 2011 – 2013</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm font-medium leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Control y gestión de personal operativo.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Negociación de condiciones de compra con proveedores.</span></li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Supervisión de logística, stock y coordinación de distribución.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle size={16} className="text-blue-900 mt-0.5"/><span>Gestión administrativa integral para eficiencia en punto de venta.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Tech */}
      <section id="tech" className="py-24 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black leading-tight">Potenciando la Eficiencia con Tecnología</h2>
            <p className="text-blue-100/80 text-lg">
              Mi formación como Desarrollador Full Stack me permite optimizar el uso de CRMs y sistemas de gestión de flotas, transformando datos complejos en estrategias comerciales rentables.
            </p>
            <div className="flex flex-wrap gap-4">
               {['React', 'Node.js', 'SQL', 'Logística Digital', 'Automatización CRM'].map(t => (
                 <span key={t} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/10">{t}</span>
               ))}
            </div>
          </div>
          <div className="bg-blue-600 p-12 rounded-[3rem] shadow-2xl relative">
             <h3 className="text-2xl font-black mb-6">Diferencial Always Rentacar</h3>
             <p className="font-bold leading-relaxed opacity-90">
               "Entiendo la logística física y la lógica digital. Esta combinación garantiza una gestión de flota dinámica, con seguimiento preciso de activos y contratos corporativos."
             </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">¿Listo para expandir el mercado regional?</h2>
            <p className="text-xl text-slate-500 font-medium">Disponible para contacto inmediato.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center space-x-3 bg-slate-900 text-white px-10 py-5 rounded-2xl hover:bg-slate-800 transition shadow-xl justify-center group">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-black opacity-60">Llamada Directa</p>
                <p className="font-black tracking-widest text-sm">{phoneNumber}</p>
              </div>
            </a>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-green-600 text-white px-10 py-5 rounded-2xl hover:bg-green-700 transition shadow-xl justify-center group">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-black opacity-60">WhatsApp Business</p>
                <p className="font-black tracking-widest text-sm">Enviar Mensaje</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
            <a href="mailto:fselvarolo28@gmail.com" className="flex items-center space-x-3 bg-blue-900 text-white px-10 py-5 rounded-2xl hover:bg-blue-800 transition shadow-xl w-full md:w-auto justify-center">
              <Mail size={20} />
              <span className="font-black uppercase tracking-widest text-sm">fselvarolo28@gmail.com</span>
            </a>
            <a 
              href="src/assets/pdfs/Cv-Franco Selvarolo.pdf"
              download
              className="flex items-center space-x-3 bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl hover:bg-slate-200 transition border border-slate-200 w-full md:w-auto justify-center"
            >
              <Download size={20} />
              <span className="font-black uppercase tracking-widest text-sm">Descargar CV</span>
            </a>
          </div>
          
          <div className="pt-12 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            Franco Selvarolo Arcuri | Always Rentacar Candidacy 2025
          </div>
        </div>
      </footer>

      {/* Barra Flotante de Contacto Móvil */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50 bg-white/80 backdrop-blur-xl border border-slate-200 p-2 rounded-2xl shadow-2xl">
         <a href={`tel:${phoneNumber}`} className="bg-slate-900 text-white p-4 rounded-xl shadow-lg active:scale-90 transition-transform">
            <Phone size={20} />
         </a>
         <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-4 rounded-xl shadow-lg active:scale-90 transition-transform">
            <MessageCircle size={20} />
         </a>
         <a href="mailto:fselvarolo28@gmail.com" className="bg-blue-900 text-white p-4 rounded-xl shadow-lg active:scale-90 transition-transform">
            <Mail size={20} />
         </a>
      </div>

    </div>
  );
};

export default App;