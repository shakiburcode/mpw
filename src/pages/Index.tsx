import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <ScrollReveal animation="fade-in"><About /></ScrollReveal>
      <ScrollReveal animation="slide-up"><Skills /></ScrollReveal>
      <ScrollReveal animation="scale-in"><Projects /></ScrollReveal>
      <ScrollReveal animation="slide-up"><Contact /></ScrollReveal>
      <ScrollReveal animation="fade-in"><Footer /></ScrollReveal>
    </div>
  );
};

export default Index;
