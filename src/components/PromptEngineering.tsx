import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Sparkles, Target, Layers, Zap } from "lucide-react";

export const PromptEngineering = () => {
  const expertise = [
    {
      icon: Sparkles,
      title: "LLM Optimization",
      description: "Expert in crafting precise prompts for Llama 4, GPT, Claude, and Gemini models to maximize accuracy and efficiency"
    },
    {
      icon: Target,
      title: "Production Systems",
      description: "Built and deployed prompt libraries that improved GenAI answer quality by ~30% in production environments"
    },
    {
      icon: Layers,
      title: "RAG & Context",
      description: "Specialized in prompt engineering for RAG systems with vector databases and context optimization"
    },
    {
      icon: Zap,
      title: "Evaluation & Testing",
      description: "Designed systematic evaluation frameworks to measure and improve prompt performance at scale"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🤖 AI Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Prompt Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-level prompt engineering for enterprise AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {expertise.map((item, index) => (
            <GlowCard 
              key={index}
              className="p-6 hover:border-primary/30 transition-all"
              customSize={true}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* AI Passion Statement */}
        <GlowCard className="border-primary/30 p-8" customSize={true}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-bold text-gradient">Passion for AI Innovation</h3>
          </div>
          <p className="text-base text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
            I'm obsessed with pushing the boundaries of GenAI in production. From building custom agentic browsers 
            with integrated local LLMs to engineering real-time RAG pipelines—I specialize in turning ambitious 
            AI ideas into reliable, scalable systems. In today's AI-first world, expert prompt engineering isn't 
            optional—it's the difference between mediocre and exceptional AI products.
          </p>
        </GlowCard>
      </div>
    </section>
  );
};
