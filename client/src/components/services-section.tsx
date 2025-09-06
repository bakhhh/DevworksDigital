import { Code, Paintbrush, ShoppingCart, Smartphone, TrendingUp, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies. From simple landing pages to complex e-commerce platforms.",
    color: "primary",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO-Ready Structure",
      "Modern Frameworks"
    ]
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging, and conversion-optimized digital experiences for your customers.",
    color: "secondary",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment processing, inventory management, and conversion optimization.",
    color: "primary",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Order Processing",
      "Analytics & Reporting"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    color: "secondary",
    features: [
      "iOS & Android",
      "Cross-Platform",
      "App Store Optimization",
      "Push Notifications"
    ]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, generate leads, and grow your online presence.",
    color: "primary",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "PPC Advertising",
      "Content Strategy"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly and securely.",
    color: "secondary",
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Performance Optimization",
      "Content Updates"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and maximize your online impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = service.color === 'primary' ? 'text-primary' : 'text-secondary';
            const bgColorClass = service.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20';
            
            return (
              <div 
                key={service.title}
                className="service-card rounded-xl p-8 text-center"
                data-testid={`service-card-${index}`}
              >
                <div className={`w-16 h-16 ${bgColorClass} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${colorClass} text-2xl w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`${colorClass} mr-2 w-4 h-4`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
