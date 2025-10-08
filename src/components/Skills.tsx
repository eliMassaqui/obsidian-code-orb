import { Code2, Database, Smartphone, Cpu, Terminal, FileCode } from "lucide-react";

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
    description: "Flutter, Kotlin, Desenvolvimento Android",
    color: "from-teal-500 to-blue-500",
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
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_hsl(200_100%_50%/0.4)]`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
