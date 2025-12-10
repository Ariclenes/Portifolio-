
import { ProfileConfig, Project, Service, SocialLink, EducationItem, ExperienceItem, CertificationItem } from './types';

// ==============================================================================
// ÁREA DE EDIÇÃO - DADOS PESSOAIS
// ==============================================================================

export const PROFILE: ProfileConfig = {
  githubUsername: 'ariclenesmaciel', 
  // customAvatarUrl: 'https://exemplo.com/minha-foto.jpg',
  fullName: 'Ariclenes Maciel',
  title: 'Systems Analysis & Development Technologist',
  initials: 'AM', 
  about: `Tecnólogo de Análise e Desenvolvimento de Sistemas altamente criativo e organizado, com vasta experiência em desenvolvimento fullstack, implementação de ERP, administração de redes e segurança digital. 

  Com sólida formação em gerenciamento de banco de dados, tecnologias em nuvem e cibersegurança, destaco-me na entrega de soluções de software eficientes e escaláveis. Sou fluente em inglês e português, adaptável e ansioso para contribuir com a inovação na área de TI.`,
  availability: {
    status: 'Imediato',
    type: 'Remoto / Híbrido (dependendo da localização)'
  }
};

export const SOCIALS: SocialLink[] = [
  { platform: 'whatsapp', url: 'https://wa.me/244933934838', label: 'WhatsApp Principal', value: '(+244) 933 934 838' },
  { platform: 'phone', url: 'tel:+244923825590', label: 'Telefone Secundário', value: '(+244) 923 825 590' },
  { platform: 'phone', url: 'tel:+244952878528', label: 'Telefone Alternativo', value: '(+244) 952 878 528' },
  { platform: 'email', url: 'mailto:arymonster@gmail.com', label: 'E-mail', value: 'arymonster@gmail.com' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/ariclenes-maciel', label: 'LinkedIn' },
  { platform: 'github', url: 'https://github.com/ariclenesmaciel', label: 'GitHub' },
  { platform: 'facebook', url: 'https://facebook.com/ariclenes.maciel', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/ariclenesmaciel', label: 'Instagram' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Automação Bancária',
    description: 'Implementação de ATMs, TPAs (+225 terminais), MCNs e integração segura com core bancário.',
    icon: 'landmark',
  },
  {
    id: '2',
    title: 'Full Stack Development',
    description: 'Desenvolvimento web e desktop com Java, Python, PHP, JS, React e integração de APIs.',
    icon: 'code',
  },
  {
    id: '3',
    title: 'Infraestrutura de Redes',
    description: 'Administração de redes LAN/WAN, configuração de servidores e segurança eletrônica (CCTV).',
    icon: 'server',
  },
  {
    id: '4',
    title: 'Soluções Corporativas',
    description: 'Gestão de impressão (Ricoh/HP), automação de bombas de combustível e dispensadores de senha.',
    icon: 'printer',
  },
  {
    id: '5',
    title: 'Data & Cloud Security',
    description: 'Gestão de bancos de dados (SQL, Mongo), AWS Cloud e implementação de segurança digital.',
    icon: 'database',
  },
  {
    id: '6',
    title: 'Hardware & Sistemas',
    description: 'Manutenção de estações Linux/Windows, POS, Tills e suporte especializado a ERPs.',
    icon: 'cpu',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '0',
    company: 'AEM Sign, LDA',
    role: 'CEO',
    period: 'Presente',
    description: 'Comércio e prestação de serviços para empresas, atuando em tecnologia, consultoria e gestão de projectos.'
  },
  {
    id: '1',
    company: 'RCS Angola',
    role: 'Técnico Hardware e Sistemas',
    period: '01/2023 – 10/2025',
    description: 'Configuração e implementação de TPAs/ATMs em rede nacional, integração bancária, gestão de Máquinas de Contar Notas e suporte técnico especializado.'
  },
  {
    id: '2',
    company: 'Redes de Mediatecas de Angola (ReMa)',
    role: 'Técnico Bibliotecário | Redes',
    period: '02/2014 – 09/2022',
    description: 'Gestão de redes e suporte técnico em ambiente de biblioteca digital, garantindo a disponibilidade dos serviços tecnológicos.'
  },
  {
    id: '3',
    company: 'InfoCopynet',
    role: 'Formador e Técnico de Implementação ERP',
    period: '02/2016 – 04/2019',
    description: 'Implementação de software de Gestão/Facturação, administração de redes e formação técnica.'
  },
  {
    id: '4',
    company: 'To-be Angola',
    role: 'Técnico de Impressão e Dispensadores',
    period: '08/2017 – 01/2018',
    description: 'Manutenção de certificadoras, impressoras e dispensadores de senhas.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    institution: 'Faculdade AIEC - Polo Lubango',
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    period: '02/2018 – 12/2020',
    location: 'Angola'
  },
  {
    id: '2',
    institution: 'Instituto Médio de Administração e Gestão (IMAG)',
    degree: 'Curso Técnico de Informática de Gestão',
    period: '02/2011 – 12/2013',
    location: 'Huambo, Angola'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: '1', name: 'Cyber Security Certification', issuer: 'Programming Hub', year: '2020' },
  { id: '2', name: 'Ethical Hacking & Advanced', issuer: 'Programming Hub', year: '2025' },
  { id: '3', name: 'AWS Cloud Computing', issuer: 'Programming Hub', year: '2021' },
  { id: '4', name: 'Data Science & Analytics', issuer: 'Programming Hub', year: '2020' },
  { id: '5', name: 'Microsoft Office Specialist (Word/PPT)', issuer: 'Certiport', year: '2018' },
  { id: '6', name: 'Linux Certification', issuer: 'Programming Hub', year: '2020' },
  { id: '7', name: 'SQL & Mongo DB Administrator', issuer: 'Programming Hub', year: '2020' },
  { id: '8', name: 'Java & Python Developer', issuer: 'Programming Hub', year: '2020' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Banking Automation (ATMs)',
    description: 'Configuração e implementação de +225 TPAs e 25+ ATMs completos em rede nacional, incluindo integração segura com core bancário.',
    techStack: ['Network Security', 'ATM Config', 'Hardware'],
    repoUrl: '#', 
  },
  {
    id: '2',
    title: 'Retail Infrastructure (BCX)',
    description: 'Implementação de redes LAN/WAN em lojas Shoprite e configuração de +45 estações de trabalho Linux/Windows no grupo OK Mobiliário.',
    techStack: ['Linux', 'Windows', 'Networking', 'POS'],
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'Energy Sector Automation',
    description: 'Automação em postos de combustível com configuração de 120+ TPAs e integração a sistemas centrais nas bombas Pumangol.',
    techStack: ['Automation', 'IoT', 'Electrical Infra'],
    repoUrl: '#',
  },
  {
    id: '4',
    title: 'Corporate Print Manager',
    description: 'Gestão de parque de impressão (Ricoh, HP) e dispensadores de senhas para instituições bancárias e petrolíferas.',
    techStack: ['Printing Service', 'Maintenance', 'Support'],
    repoUrl: '#',
  },
];