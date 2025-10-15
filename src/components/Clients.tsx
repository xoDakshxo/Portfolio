import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export const Clients = () => {
  const [isMobile, setIsMobile] = useState(false);
  const clients = [
    "Anysphere",
    "GuideCX",
    "Ironclad",
    "Alteryx",
    "Mimecast",
    "Writer",
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardComponent = isMobile ? Card : GlowCard;
  const cardProps = isMobile ? {} : { customSize: true };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🤝 Key Clients
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Enterprise Accounts at Nektar.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supporting leading organizations through Nektar's Agentic ETL platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <CardComponent
              key={index}
              className="flex items-center justify-center p-4 md:p-6"
              {...cardProps}
            >
              <span className="text-base md:text-lg font-bold text-foreground">{client}</span>
            </CardComponent>
          ))}
        </div>
      </div>
    </section>
  );
};
