
import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Send,
  Code,
  Layout,
  Smartphone,
  Server,
  Database,
  Cpu,
  Shield,
  HardDrive,
  ExternalLink,
  MessageCircle,
  Globe,
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Landmark,
  Printer
} from 'lucide-react';

export const SocialIcon = ({ platform, className }: { platform: string; className?: string }) => {
  switch (platform) {
    case 'github': return <Github className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'facebook': return <Facebook className={className} />;
    case 'twitter': return <Twitter className={className} />;
    case 'email': return <Mail className={className} />;
    case 'whatsapp': return <MessageCircle className={className} />;
    case 'telegram': return <Send className={className} />;
    case 'phone': return <Phone className={className} />;
    default: return <Globe className={className} />;
  }
};

export const ServiceIcon = ({ icon, className }: { icon: string; className?: string }) => {
  switch (icon) {
    case 'code': return <Code className={className} />;
    case 'layout': return <Layout className={className} />;
    case 'smartphone': return <Smartphone className={className} />;
    case 'server': return <Server className={className} />;
    case 'database': return <Database className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'hard-drive': return <HardDrive className={className} />;
    case 'landmark': return <Landmark className={className} />;
    case 'printer': return <Printer className={className} />;
    default: return <Code className={className} />;
  }
};

export const ExternalIcon = ({ className }: { className?: string }) => (
  <ExternalLink className={className} />
);

export const SectionIcon = ({ type, className }: { type: 'education' | 'award' | 'work' | 'calendar' | 'location'; className?: string }) => {
  switch (type) {
    case 'education': return <GraduationCap className={className} />;
    case 'award': return <Award className={className} />;
    case 'work': return <Briefcase className={className} />;
    case 'calendar': return <Calendar className={className} />;
    case 'location': return <MapPin className={className} />;
    default: return <Globe className={className} />;
  }
}
