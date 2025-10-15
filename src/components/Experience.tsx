import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { CheckCircle2, Building2, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "Nektar.ai",
      role: "Enterprise Solutions Engineer",
      period: "Present",
      location: "Bangalore, India",
      description: "Forward-deployed role driving ROI by coordinating with Technical Sales & GTM teams to align customer requirements.",
      highlights: [
        "Technically supported enterprise accounts including Anysphere (Cursor), GuideCX, and Ironclad via Nektar",
        "Achieved 95% customer satisfaction through AI-powered solutions and prompt engineering",
        "Built custom integration workflows reducing implementation time by 60%",
        "Specialized in AI/LLM integration and production-grade prompt optimization",
        "Coordinated with Technical Sales and GTM teams to drive predictable revenue growth"
      ]
    },
    {
      company: "ISS STOXX",
      role: "AI Quality Engineer",
      period: "Jan 2024 - April 2025",
      location: "Remote",
      description: "Client-facing role focused on AI system quality and accessibility compliance.",
      highlights: [
        "Reproduced critical ESG issues live with customers using Selenium + Java",
        "Built Python + LLM log analyzer compressing RCA from hours to minutes",
        "Lifted NPS by +12 through intelligent automation",
        "Led WCAG 2.1 AA audits raising accessibility pass rate by ~25%",
        "Hosted weekly office hours with F500 teams"
      ]
    },
    {
      company: "DefinEquity Investment Managers",
      role: "Data Analyst Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      description: "Analyzed investment data and built dashboards for decision-making.",
      highlights: [
        "Built Tableau dashboards analyzing 10M+ rows",
        "Reduced decision latency by ~25%"
      ]
    }
  ];


  return (
    <div className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            💼 Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving measurable ROI through AI innovation and enterprise solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlowCard 
              key={index}
              className="p-8 hover:border-primary/30 transition-all"
              customSize={true}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-3 md:mt-0 px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </Badge>
              </div>

              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};
