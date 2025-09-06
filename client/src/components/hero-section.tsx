import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import FloatingCode from "./floating-code";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <FloatingCode />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Into Digital Reality
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We craft extraordinary digital experiences that captivate audiences, drive results, and transform your business into a digital powerhouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 animate-glow"
              data-testid="button-start-project"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="hidden border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-card transition-all transform hover:scale-105"
              data-testid="button-view-work"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary text-2xl" />
      </div>
    </section>
  );
}
