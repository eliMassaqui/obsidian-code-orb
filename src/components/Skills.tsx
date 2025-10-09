import { Code2, Database, Smartphone, Cpu, Terminal, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import androidStudioIcon from "@/assets/android-studio.png";

const skills = [
  {
    icon: Terminal,
    title: "Backend",
    description: "Python (Flask), C# (.NET), API REST",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Frontend",
    description: "HTML, CSS, JavaScript, React",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Flutter, Android Studio, Desenvolvimento Android",
    color: "from-teal-500 to-blue-500",
    customIcon: androidStudioIcon,
  },
  {
    icon: Database,
    title: "Desktop",
    description: "C# (.NET Framework / .NET Core)",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Cpu,
    title: "Microcontroladores",
    description: "Arduino, Linguagem C, Automação",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: FileCode,
    title: "Ferramentas",
    description: "Git, VS Code, Visual Studio, GitHub",
    color: "from-cyan-500 to-blue-500",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-background/50 relative overflow-hidden" ref={ref}>
      {/* Background animated elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" 
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[0_0_30px_hsl(200_100%_50%/0.4)]`}
                >
                  {skill.customIcon ? (
                    <img src={skill.customIcon} alt={skill.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <skill.icon className="w-7 h-7 text-white" />
                  )}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
