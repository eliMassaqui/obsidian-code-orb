import { Code2, Database, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, PostgreSQL, REST APIs, GraphQL",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Figma, Design Systems, Responsivo",
  },
  {
    icon: Zap,
    title: "Ferramentas",
    description: "Git, Docker, CI/CD, Cloud Services",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:animate-glow">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
