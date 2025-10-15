import { Badge } from "@/components/ui/badge";
import { GlassButton } from "@/components/ui/glass-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardComponent = isMobile ? Card : GlowCard;
  const cardProps = isMobile ? {} : { customSize: true };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            📬 Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for an Enterprise Solutions Engineer with AI expertise to drive ROI and coordinate with Technical Sales & GTM teams? Let's talk.
          </p>
        </div>

        <CardComponent className="p-4 md:p-8" {...cardProps}>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center gap-3 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:dakshbagga54@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm md:text-base break-all">
                    dakshbagga54@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+917007836450" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
                    +91 70078 36450
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground text-sm md:text-base">Bangalore, India</div>
                  <div className="text-xs text-muted-foreground">Remote-ready (PST overlap)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/daksh-bagga1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors text-sm md:text-base break-all"
                  >
                    /in/daksh-bagga1
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border/30">
              <GlassButton 
                className="bg-primary/20 hover:bg-primary/30 text-xs md:text-sm"
                onClick={() => window.location.href = 'mailto:dakshbagga54@gmail.com'}
                size="default"
                contentClassName="flex items-center gap-1.5 md:gap-2"
              >
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Send Email</span>
                <span className="sm:hidden">Email</span>
              </GlassButton>
              <GlassButton 
                className="hover:bg-primary/10 text-xs md:text-sm"
                onClick={() => window.open('https://www.linkedin.com/in/daksh-bagga1', '_blank')}
                size="default"
                contentClassName="flex items-center gap-1.5 md:gap-2"
              >
                <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                LinkedIn
              </GlassButton>
              <GlassButton 
                className="hover:bg-primary/10 text-xs md:text-sm"
                onClick={() => window.open('https://github.com/xoDakshxo', '_blank')}
                size="default"
                contentClassName="flex items-center gap-1.5 md:gap-2"
              >
                <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
                GitHub
              </GlassButton>
            </div>
          </div>
        </CardComponent>

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 text-center">
          <CardComponent className="p-4 md:p-6" {...cardProps}>
            <p className="text-sm md:text-base text-foreground/90">
              🎯 <span className="font-bold text-primary">Enterprise Solutions Engineer</span> specializing in 
              forward-deployed customer-facing roles. Proven track record of driving ROI through 
              <span className="font-bold text-primary"> GenAI innovation & prompt engineering</span>, coordinating with Technical Sales 
              & GTM teams to align customer requirements and deliver measurable outcomes.
            </p>
          </CardComponent>
        </div>
      </div>
    </section>
  );
};
