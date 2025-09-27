import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleSystem from '@/components/ui/ParticleSystem';
import TypingAnimation from '@/components/ui/TypingAnimation';
import MagneticButton from '@/components/ui/MagneticButton';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = ['Full Stack Developer', 'UI/UX Designer', 'Creative Problem Solver'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <ParticleSystem particleCount={60} className="opacity-60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse-glow" />
          <p className="text-lg text-muted-foreground mb-6 text-shimmer">Hello, I'm</p>
          
          {/* Profile Picture with Effects */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src={profilePicture} 
                alt="Md.Shakibur Rahman - Full Stack Developer"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-intense hover:shadow-glow-intense transition-all duration-500 hover:scale-110 relative z-10"
              />
            </div>
            
            <h1 className="text-6xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Md. Shakibur Rahman
              </span>
            </h1>
            
            <div className="text-3xl md:text-4xl text-muted-foreground mb-8 min-h-[3rem] flex items-center">
              <TypingAnimation texts={typingTexts} className="text-shimmer font-medium" />
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-primary font-semibold">digital experiences</span> that blend 
            <span className="text-accent font-semibold"> innovative design</span> with 
            <span className="text-primary font-semibold"> cutting-edge technology</span>.
          </p>
          
          {/* Magnetic Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <MagneticButton
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant px-8 py-4 text-lg"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="glass-morphism border-primary/30 px-8 py-4 text-lg"
            >
              Get In Touch
            </MagneticButton>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <MagneticButton
                key={index}
                variant="ghost"
                size="icon"
                className="w-12 h-12 glass-morphism hover:shadow-glow-primary group"
              >
                <Icon className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              </MagneticButton>
            ))}
          </div>
          
          <MagneticButton
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('#about')}
            className="w-16 h-16 rounded-full glass-morphism bounce-gentle"
          >
            <ArrowDown className="w-6 h-6" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;