import { Badge } from "@/components/ui/badge";

export const Clients = () => {
  const logos = [
    { src: "/cursorLogo.png", alt: "Cursor" },
    { src: "/airtableLogo.png", alt: "Airtable" },
    { src: "/Altryx.png", alt: "Alteryx" },
    { src: "/mimecast-seeklogo.png", alt: "Mimecast" },
    { src: "/groq-seeklogo.png", alt: "Groq" },
    { src: "/observe-ai-seeklogo.png", alt: "Observe.AI" },
    { src: "/brex-seeklogo.png", alt: "Brex" },
    { src: "/ironclad-seeklogo.png", alt: "Ironclad" },
    { src: "/leandata-seeklogo.png", alt: "LeanData" },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
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

        <div className="relative overflow-hidden py-12 border-y border-primary/20 bg-card/30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          <div className="flex gap-20 md:gap-24">
            <div className="animate-marquee flex gap-20 md:gap-24 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 md:w-56 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 md:h-28 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="animate-marquee flex gap-20 md:gap-24 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 md:w-56 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 md:h-28 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="animate-marquee flex gap-20 md:gap-24 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-40 md:w-56 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 md:h-28 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
