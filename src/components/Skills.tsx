import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Brain, Code, Database, Wrench, TestTube } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  color: string;
  skills: { name: string; level: number }[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "AI & LLM",
      icon: Brain,
      color: "text-primary",
      skills: [
        { name: "Llama 4 & OpenAI", level: 95 },
        { name: "LangChain & RAG", level: 90 },
        { name: "Vector DBs", level: 88 },
        { name: "Prompt Engineering", level: 92 },
      ]
    },
    {
      name: "Full-Stack",
      icon: Code,
      color: "text-secondary",
      skills: [
        { name: "React & TypeScript", level: 90 },
        { name: "Node.js & FastAPI", level: 85 },
        { name: "REST/GraphQL", level: 88 },
        { name: "Vite & Tailwind", level: 92 },
      ]
    },
    {
      name: "Backend & Data",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Python & Java", level: 90 },
        { name: "PostgreSQL & MongoDB", level: 85 },
        { name: "Docker", level: 82 },
        { name: "GitHub Actions", level: 80 },
      ]
    },
    {
      name: "Product & Growth",
      icon: Wrench,
      color: "text-primary-glow",
      skills: [
        { name: "A/B Testing", level: 88 },
        { name: "Telemetry & Analytics", level: 85 },
        { name: "Self-serve UX", level: 90 },
        { name: "Onboarding Flows", level: 87 },
      ]
    },
    {
      name: "QA & Automation",
      icon: TestTube,
      color: "text-secondary",
      skills: [
        { name: "Selenium & TestNG", level: 92 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Accessibility (WCAG)", level: 88 },
        { name: "Test Automation", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            💡 Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastered skills driving innovation and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlowCard 
              key={index}
              className="p-6 hover:border-primary/30 transition-all"
              customSize={true}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground/90">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-glow"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
