import { Badge } from "@/components/ui/badge";
import { GlassButton } from "@/components/ui/glass-button";
import { Zap, TrendingUp, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { DottedSurface } from "@/components/ui/dotted-surface";

export const Hero = () => {
  const stats = [
    { 
      icon: TrendingUp, 
      label: "Average Revenue Growth Increase Delivered", 
      value: "75%", 
      color: "text-foreground"
    },
    { 
      icon: Zap, 
      label: "Issue Resolution Rate", 
      value: "99%", 
      color: "text-foreground"
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16 bg-card/30">
      {/* Three.js Dotted Surface Background */}
      <DottedSurface className="absolute inset-0" />

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Daksh Bagga" 
              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-border object-cover"
            />
          </div>

          {/* Role Badge */}
          <Badge 
            variant="outline" 
            className="px-4 py-2 text-sm font-medium border-border/50 bg-transparent"
          >
            Enterprise Solutions Engineer • AI Specialist
          </Badge>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-foreground">
            Daksh Bagga
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed px-4">
            Specializing in <span className="text-foreground font-medium">AI/LLM integration</span>, <span className="text-foreground font-medium">prompt engineering</span>, and driving <span className="text-foreground font-medium">measurable revenue growth</span> for enterprise clients
          </p>


          {/* Stats Grid - Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flip-card-container h-[200px]"
              >
                <div className="flip-card">
                  {/* Front - Icon */}
                  <div className="flip-card-front card-gradient p-8 rounded-lg border border-border/50 flex flex-col items-center justify-center">
                    <stat.icon className={`w-12 h-12 ${stat.color}`} />
                  </div>
                  
                  {/* Back - Stats */}
                  <div className="flip-card-back card-gradient p-8 rounded-lg border border-border/50 flex flex-col items-center justify-center gap-3">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground text-center">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            <GlassButton 
              size="default" 
              onClick={() => window.location.href = 'mailto:dakshbagga54@gmail.com'}
              contentClassName="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </GlassButton>
            <GlassButton 
              size="default" 
              onClick={() => window.open('https://www.linkedin.com/in/daksh-bagga1', '_blank')}
              contentClassName="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              Connect
            </GlassButton>
            <GlassButton 
              size="default" 
              onClick={() => window.open('https://github.com/xoDakshxo', '_blank')}
              contentClassName="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
};
