import React, { useState } from 'react';
import { PROFILE, PROJECTS, SERVICES, SOCIALS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from './constants';
import { Reveal } from './components/Reveal';
import { SocialIcon, ServiceIcon, ExternalIcon, SectionIcon } from './components/Icons';
import { MessageCircle, Terminal } from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';

const App: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleImageError = () => {
    setImgError(true);
  };

  const getWhatsAppUrl = () => {
    const wa = SOCIALS.find(s => s.platform === 'whatsapp');
    return wa ? wa.url : '#';
  };

  const avatarUrl = PROFILE.customAvatarUrl 
    ? PROFILE.customAvatarUrl 
    : `https://github.com/${PROFILE.githubUsername}.png`;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black overflow-x-hidden font-sans relative">
      
      {/* Background Effect */}
      <MatrixBackground />
      
      {/* Overlay to darken matrix slightly for readability if needed, though canvas has opacity */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none z-0"></div>

      {/* Main Content Container - Elevated z-index */}
      <div className="relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-10 pb-20">
          <Reveal>
            <div className="relative mb-10 group">
              {/* Monster Green Glow - Stronger Neon */}
              <div className="absolute -inset-2 bg-primary rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-fast"></div>
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary bg-black shadow-[0_0_30px_rgba(57,255,20,0.6)]">
                {!imgError ? (
                  <img
                    src={avatarUrl}
                    alt={PROFILE.fullName}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black text-5xl font-bold text-primary font-mono">
                    {PROFILE.initials}
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 
              className="text-4xl md:text-7xl font-bold text-center mb-4 text-white tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" 
            >
              {PROFILE.fullName}
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <h2 className="text-xl md:text-2xl text-primary font-mono font-medium text-center mb-8 max-w-3xl px-4 inline-block drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
              {PROFILE.title}
            </h2>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-10 text-sm font-medium bg-black/80 backdrop-blur-sm px-8 py-3 border border-primary/50 shadow-[0_0_15px_rgba(57,255,20,0.3)] rounded-sm">
               <div className="flex items-center gap-2 text-primary font-mono uppercase tracking-wider">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary box-shadow-[0_0_10px_#39FF14]"></span>
                  </span>
                  STATUS: {PROFILE.availability.status}
               </div>
               <div className="hidden md:block w-px h-5 bg-primary/50"></div>
               <div className="text-gray-300 text-center font-mono text-xs md:text-sm">
                  [{PROFILE.availability.type}]
               </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4 justify-center">
              {SOCIALS.filter(s => ['linkedin', 'github', 'email', 'whatsapp', 'facebook', 'instagram'].includes(s.platform)).map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-black/80 text-primary border border-primary/50 hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_#39FF14] rounded-sm"
                  aria-label={social.label}
                >
                  <SocialIcon platform={social.platform} className="w-6 h-6 drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] group-hover:drop-shadow-none" />
                </a>
              ))}
            </div>
          </Reveal>
          
          <div className="absolute bottom-10 animate-bounce text-primary drop-shadow-[0_0_5px_rgba(57,255,20,1)]">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h3 className="text-3xl font-bold mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-3 uppercase tracking-widest text-white drop-shadow-md">
                <span className="text-primary font-mono text-2xl drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">01.</span>
                Sobre Mim
              </h3>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-black/80 backdrop-blur-md p-8 border-l-4 border-primary shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed whitespace-pre-line font-light">
                  {PROFILE.about}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= SERVICES (EXPERTISE) ================= */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black/50 to-primary/5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
               <h3 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-3 uppercase tracking-widest">
                <span className="text-primary font-mono text-2xl drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">02.</span>
                Expertise & Skills
              </h3>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                // Apply glitch effect to security related items
                const isSecurity = service.title.toLowerCase().includes('security') || service.title.toLowerCase().includes('segurança') || service.icon === 'shield';
                
                return (
                  <Reveal key={service.id} delay={index * 100} width="100%">
                    <div 
                      className={`h-full bg-black/80 backdrop-blur-sm p-8 border transition-all duration-300 group relative overflow-hidden ${isSecurity ? 'border-primary shadow-[0_0_15px_rgba(57,255,20,0.2)]' : 'border-gray-800 hover:border-primary/50'}`}
                      data-text={isSecurity ? "SYSTEM_SECURE // ENCRYPTED" : ""}
                    >
                      {/* Glitch Overlay for Security Items */}
                      {isSecurity && (
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 pointer-events-none z-0 transition-opacity duration-100 flex items-center justify-center">
                           <div className="text-primary font-mono text-xs opacity-50 absolute top-2 right-2 animate-pulse">SECURE_MODE_ACTIVE</div>
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className={`w-14 h-14 bg-black border-2 ${isSecurity ? 'border-primary text-primary shadow-[0_0_10px_#39FF14]' : 'border-gray-700 text-primary group-hover:border-primary group-hover:shadow-[0_0_10px_#39FF14]'} flex items-center justify-center mb-6 transition-all duration-300 rounded-sm`}>
                          <ServiceIcon icon={service.icon} className={`w-8 h-8 ${isSecurity ? 'animate-pulse' : ''} drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]`} />
                        </div>
                        <h4 className={`text-2xl font-bold mb-3 uppercase tracking-wide ${isSecurity ? 'text-primary' : 'text-white'}`}>
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed border-t border-gray-800 pt-4 mt-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h3 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-3 uppercase tracking-widest">
                <SectionIcon type="work" className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
                Histórico Profissional
              </h3>
            </Reveal>

            <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 md:pl-0 space-y-16">
              {EXPERIENCE.map((job, index) => (
                <Reveal key={job.id} delay={index * 100} width="100%">
                  <div className="md:flex gap-10 relative group">
                     {/* Timeline dot */}
                    <div className="absolute -left-[23px] top-1 w-5 h-5 bg-black border-2 border-primary md:hidden group-hover:bg-primary group-hover:shadow-[0_0_10px_#39FF14] transition-all"></div>
                    
                    <div className="md:w-1/3 md:text-right mb-4 md:mb-0 relative">
                       <div className="hidden md:block absolute top-2 -right-[42px] w-4 h-4 bg-black border-2 border-primary z-10 group-hover:bg-primary group-hover:shadow-[0_0_15px_#39FF14] transition-all rounded-full"></div>
                       <p className="text-primary font-mono text-sm mb-1 drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">{job.period}</p>
                       <h4 className="text-2xl font-bold text-white uppercase leading-tight">{job.company}</h4>
                    </div>
                    <div className="md:w-2/3 bg-black/80 backdrop-blur-md p-8 border border-gray-800 hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] rounded-sm">
                      <h5 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-primary" />
                        {job.role}
                      </h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

         {/* ================= EDUCATION & CERTIFICATIONS ================= */}
        <section className="py-24 px-4 md:px-8 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Education */}
            <div>
              <Reveal>
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 uppercase tracking-wider text-white">
                  <SectionIcon type="education" className="text-primary w-6 h-6 drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
                  Formação Acadêmica
                </h3>
              </Reveal>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <Reveal key={edu.id} delay={idx * 100} width="100%">
                    <div className="bg-black/80 p-6 border-l-4 border-gray-700 hover:border-primary transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                      <p className="text-primary font-medium mb-4">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 uppercase">
                        <span className="flex items-center gap-1"><SectionIcon type="calendar" className="w-3 h-3 text-primary" /> {edu.period}</span>
                        <span className="flex items-center gap-1"><SectionIcon type="location" className="w-3 h-3 text-primary" /> {edu.location}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <Reveal>
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 uppercase tracking-wider text-white">
                  <SectionIcon type="award" className="text-primary w-6 h-6 drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
                  Certificações
                </h3>
              </Reveal>
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert, idx) => {
                   const isHacking = cert.name.toLowerCase().includes('hacking') || cert.name.toLowerCase().includes('cyber') || cert.name.toLowerCase().includes('security');
                   return (
                    <Reveal key={cert.id} delay={idx * 50} width="100%">
                      <div className={`flex items-center justify-between p-5 bg-black/80 border border-gray-800 hover:border-primary transition-all duration-300 group ${isHacking ? 'border-primary/40 shadow-[0_0_10px_rgba(57,255,20,0.1)]' : ''}`}>
                        <div>
                          <h4 className={`font-semibold text-sm md:text-base ${isHacking ? 'text-primary glitch-hover' : 'text-white'}`} data-text={cert.name}>{cert.name}</h4>
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{cert.issuer}</p>
                        </div>
                        <span className="text-xs font-mono text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-sm">
                          {cert.year}
                        </span>
                      </div>
                    </Reveal>
                   )
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ================= PROJECTS (HIGHLIGHTS) ================= */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h3 className="text-3xl font-bold mb-16 text-center uppercase tracking-widest">
                <span className="text-primary font-mono text-2xl drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">03.</span> Projetos em Destaque
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PROJECTS.map((project, index) => (
                <Reveal key={project.id} delay={index * 150} width="100%">
                  <div className="group relative bg-black/90 backdrop-blur-md rounded-sm overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]">
                    <div className="p-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-mono tracking-tight">
                          {project.title}
                        </h4>
                        {project.repoUrl && project.repoUrl !== '#' && (
                          <a 
                            href={project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary transition-colors"
                            title="Ver detalhes"
                          >
                            <ExternalIcon className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed font-light border-l-2 border-gray-800 pl-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-gray-800">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 text-xs font-mono font-bold text-black bg-primary rounded-sm shadow-[0_0_5px_#39FF14]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-t from-primary/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6 text-white uppercase tracking-tighter drop-shadow-lg">Vamos Conversar?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Estou disponível para novos desafios e projetos. 
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SOCIALS.filter(s => s.value).map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-black/80 border border-gray-700 hover:border-primary transition-all duration-300 group relative overflow-hidden glitch-hover"
                    data-text={`${social.label.toUpperCase()} // ${social.value}`}
                  >
                    <div className="relative z-10 w-14 h-14 bg-black border border-primary text-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] rounded-sm">
                      <SocialIcon platform={social.platform} className="w-6 h-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
                    </div>
                    <div className="relative z-10 overflow-hidden">
                      <p className="text-xs text-primary mb-1 font-mono uppercase tracking-widest">{social.label}</p>
                      <p className="font-bold text-lg text-white group-hover:text-primary transition-colors">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="py-10 text-center text-gray-500 border-t border-gray-900 bg-black relative z-20">
          <p className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest">
            © {currentYear} {PROFILE.fullName} <span className="text-primary drop-shadow-[0_0_5px_#39FF14]">|</span> Dev Pro
          </p>
        </footer>

      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-black rounded-full shadow-[0_0_30px_#39FF14] hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none border-2 border-white"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>

    </div>
  );
};

export default App;