import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Sistema Web Flask",
    description: "Aplicação web completa desenvolvida com Python/Flask, integrando frontend moderno e backend robusto",
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
  },
  {
    title: "Aplicação Desktop C#",
    description: "Software desktop com interface intuitiva desenvolvido em C# usando .NET Framework",
    tech: ["C#", ".NET", "WPF", "SQL Server"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  },
  {
    title: "App Mobile Flutter",
    description: "Aplicativo mobile multiplataforma com interface moderna e gestão de estado eficiente",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
  },
  {
    title: "Sistema Arduino IoT",
    description: "Projeto de automação com Arduino, sensores e controle de dispositivos via microcontroladores",
    tech: ["Arduino", "C", "Sensores", "IoT"],
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=500&fit=crop",
  },
  {
    title: "App Android Kotlin",
    description: "Desenvolvimento nativo Android com Kotlin, implementando funcionalidades modernas e performáticas",
    tech: ["Kotlin", "Android SDK", "Jetpack", "Room"],
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=500&fit=crop",
  },
  {
    title: "Contribuições Open Source",
    description: "Participação ativa em projetos open source mobile com Flutter e Kotlin",
    tech: ["Flutter", "Kotlin", "Git", "GitHub"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos meus trabalhos recentes que demonstram minhas habilidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-500 group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.2, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
