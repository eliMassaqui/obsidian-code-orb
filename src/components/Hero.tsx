import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-[spin_20s_linear_infinite]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="relative w-48 h-48 mx-auto mb-8 animate-[fade-in-up_0.8s_ease-out,float_3s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-[pulse_3s_ease-in-out_infinite]" />
            <img 
              src={profileImage} 
              alt="Elísio Massaki Luamba"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-[fade-in-up_0.8s_ease-out]">
              Olá, sou <span className="gradient-text animate-glow">Elísio Massaki</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
              Desenvolvedor de Software Fullstack
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
            Desenvolvedor fullstack com experiência em Python, C#, Flutter e Arduino. 
            Criando soluções web, desktop e mobile com código limpo e eficiente.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-[fade-in-up_0.8s_ease-out_0.5s_both]">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Luanda, Angola</span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-[fade-in-up_0.8s_ease-out_0.6s_both]">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
              Ver Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2 group">
              Entre em Contato
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-12 animate-[fade-in-up_0.8s_ease-out_0.7s_both]">
            <a 
              href="https://github.com/eliMassaqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform hover:rotate-6 hover:shadow-[0_0_20px_hsl(200_100%_50%/0.5)]"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:elisiomassaqui8@gmail.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 transform hover:-rotate-6 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)]"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
