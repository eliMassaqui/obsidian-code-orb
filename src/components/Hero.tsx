import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Elísio Massaki";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-40"
            />
            <motion.div 
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"
            />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              src={profileImage} 
              alt="Elísio Massaki Luamba"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/50 shadow-2xl transition-all duration-500 bg-transparent cursor-pointer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Olá, sou <span className="gradient-text inline-block relative">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-1 h-12 bg-primary ml-1 align-middle"
                />
                <motion.span
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl -z-10"
                />
              </span>
            </h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            >
              Desenvolvedor de Software Fullstack
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Desenvolvedor fullstack com experiência em Python, C#, Flutter e Arduino. 
            Criando soluções web, desktop e mobile com código limpo e eficiente.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="text-lg md:text-xl text-accent max-w-2xl mx-auto flex items-center justify-center gap-2"
          >
            🎮 Desenvolvedor de Videogames com Unity 3D
          </motion.p>
          
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span>Luanda, Angola</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, staggerChildren: 0.1 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Ver Projetos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn-secondary inline-flex items-center gap-2 group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Entre em Contato</span>
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <motion.a 
              whileHover={{ scale: 1.3, rotate: 6, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/eliMassaqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(200_100%_50%/0.5)] p-3 rounded-full hover:bg-primary/10"
              aria-label="GitHub"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Github className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3, rotate: -6, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:elisiomassaqui8@gmail.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)] p-3 rounded-full hover:bg-accent/10"
              aria-label="Email"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="w-6 h-6" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
