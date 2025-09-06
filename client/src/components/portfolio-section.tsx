import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "LuxeTime E-commerce",
    description: "Premium watch retailer with custom product configurator and AR try-on feature.",
    image: "https://images.unsplash.com/photo-1586244439413-bc2288941dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Luxury e-commerce platform",
    technologies: ["React", "Node.js", "Stripe"],
    link: "#"
  },
  {
    title: "HealthTech Dashboard",
    description: "Analytics platform for healthcare providers with real-time patient monitoring.",
    image: "https://pixabay.com/get/gcdeba585219f42281d669234e9448747ff69204b029df71beadcbd3620da9779e984e61b8a5129c19bd8ca84e6da3dea4d737493e462d7129c6f2409d6fa38d5_1280.jpg",
    alt: "Healthcare analytics dashboard",
    technologies: ["Vue.js", "Python", "D3.js"],
    link: "#"
  },
  {
    title: "PropView Platform",
    description: "Real estate marketplace with virtual tours and AI-powered property matching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Modern real estate platform",
    technologies: ["Next.js", "Three.js", "MongoDB"],
    link: "#"
  },
  {
    title: "NeoBank Mobile App",
    description: "Digital banking app with biometric authentication and AI financial insights.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Mobile banking application",
    technologies: ["React Native", "Firebase", "TypeScript"],
    link: "#"
  },
  {
    title: "EduFlow Platform",
    description: "Interactive learning management system with AI-powered course recommendations.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Online learning platform",
    technologies: ["Angular", "Express.js", "WebRTC"],
    link: "#"
  },
  {
    title: "RestaurantOS",
    description: "Complete restaurant management system with POS, inventory, and delivery integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Restaurant management system",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    link: "#"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="hidden py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed ideas into digital reality for our clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.title}
              className="portfolio-item rounded-xl overflow-hidden"
              data-testid={`portfolio-item-${index}`}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        techIndex % 2 === 0 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/20 text-secondary'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={item.link} 
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                  data-testid={`portfolio-link-${index}`}
                >
                  View Case Study 
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
