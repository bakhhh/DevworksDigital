import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "99%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Technologies" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About DevWorks</h2>
            <p className="text-xl text-muted-foreground mb-6">
              We're a passionate team of designers, developers, and digital strategists who believe in the power of technology to transform businesses and create meaningful connections.
            </p>
            <p className="text-muted-foreground mb-8">Our mission is simple: to transform your ideas into digital reality through innovative design, cutting-edge development, and strategic thinking.</p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={stat.label} data-testid={`about-stat-${index}`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90"
              data-testid="button-work-with-us"
            >
              Work With Us
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DevWorks team collaboration" 
              className="rounded-xl shadow-2xl w-full" 
            />
            
            {/* Floating tech stack icons */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg p-4 shadow-lg animate-float">
              <i className="fab fa-react text-primary text-2xl"></i>
            </div>
            <div className="absolute top-16 -left-4 bg-card rounded-lg p-4 shadow-lg animate-float-delayed">
              <i className="fab fa-node-js text-secondary text-2xl"></i>
            </div>
            <div className="absolute -bottom-4 left-16 bg-card rounded-lg p-4 shadow-lg animate-float-slow">
              <i className="fab fa-aws text-primary text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
