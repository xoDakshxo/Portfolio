import { Home, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Projects", id: "projects", icon: FolderOpen },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // If near top of page, set to home
      if (scrollPosition < 200) {
        setActiveSection("home");
        return;
      }

      const sections = navItems.map(item => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <TubelightNavbar 
      items={navItems} 
      activeSection={activeSection} 
      onNavigate={scrollToSection} 
    />
  );
};
