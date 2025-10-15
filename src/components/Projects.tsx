import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Chrome, Zap, Bot, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  icon: any;
  description: string;
  tech: string;
  features: string[];
  impact: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Agentic Web Browser",
      icon: Chrome,
      tech: "AI Browser",
      description: "Forked Firefox base embedding local LLM (Ollama + LangChain) for autonomous browsing",
      features: ["More reliable than browser-use", "Cost-effective local implementation", "Autonomous web navigation"],
      impact: "Production-Ready"
    },
    {
      title: "Instant Web RAG Crawler",
      icon: Zap,
      tech: "Vector DB",
      description: "One-click crawl to Chroma vector DB with sub-second chat answers",
      features: ["Sub-second response time", "Memory-enabled for long content", "Intelligent site indexing"],
      impact: "Real-time RAG"
    },
    {
      title: "Gen-AI QA Automation",
      icon: Bot,
      tech: "Testing AI",
      description: "Auto-generates Selenium tests and failure analyses using AI",
      features: ["Adopted by 6 internal squads", "Fully automated test generation", "Intelligent failure analysis"],
      impact: "Team-Wide Adoption"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🚀 Innovation Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-grade AI solutions that deliver real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlowCard 
              key={index}
              className="p-6 hover:border-primary/30 transition-all group"
              customSize={true}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="px-3 py-1 text-xs">
                  {project.tech}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="text-xs text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-primary font-semibold">{project.impact}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="relative overflow-hidden mt-16 py-6 border-y border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-base md:text-lg font-medium text-muted-foreground/80 mx-8 italic">
              ✨ Countless hours dedicated to crafting instant AI solutions · Empowering clients to unlock the full potential of AI
            </span>
            <span className="text-base md:text-lg font-medium text-muted-foreground/80 mx-8 italic">
              ✨ Countless hours dedicated to crafting instant AI solutions · Empowering clients to unlock the full potential of AI
            </span>
            <span className="text-base md:text-lg font-medium text-muted-foreground/80 mx-8 italic">
              ✨ Countless hours dedicated to crafting instant AI solutions · Empowering clients to unlock the full potential of AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
