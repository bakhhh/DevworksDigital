import { Button } from "@/components/ui/button";
import { Check, Smartphone, TrendingUp, Shield, Zap, Search } from "lucide-react";

const pricingPackages = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$500",
    period: "/project",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact forms",
      "1 month support",
      "2 rounds of revisions"
    ],
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$1,500",
    period: "/project",
    features: [
      "Up to 15 pages",
      "Responsive design",
      "Contact forms",
      "Custom design & animations",
      "3 months support",
      "Unlimited revisions",
      "Analytics integration"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "$5,000",
    period: "+",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "Advanced security features",
      "Performance optimization",
      "12 months support",
      "Dedicated project manager",
      "Training & documentation"
    ],
    featured: false
  }
];

const addOnServices = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native iOS/Android app",
    price: "+$8,000",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Comprehensive security review",
    price: "+$1,500",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Speed optimization package",
    price: "+$2,500",
    color: "secondary"
  },
  {
    icon: Search,
    title: "SEO Package",
    description: "6-month SEO optimization",
    price: "$2,000/mo",
    color: "primary"
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your project. All plans include responsive design and ongoing support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`pricing-card rounded-xl p-8 text-center relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                pkg.featured ? 'featured' : ''
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">
                {pkg.price}<span className="text-lg text-muted-foreground">{pkg.period}</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary text-primary-foreground py-3 hover:bg-primary/90"
                data-testid={`pricing-button-${index}`}
              >
                {pkg.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Add-on Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Add-on Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => {
              const IconComponent = service.icon;
              const colorClass = service.color === 'primary' ? 'text-primary' : 'text-secondary';
              
              return (
                <div 
                  key={service.title}
                  className="bg-card rounded-lg p-6"
                  data-testid={`addon-service-${index}`}
                >
                  <IconComponent className={`${colorClass} text-2xl mb-3 w-8 h-8 mx-auto`} />
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <p className={`font-bold ${colorClass}`}>{service.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
