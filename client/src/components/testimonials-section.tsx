import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "DevWorks transformed our outdated website into a modern, conversion-optimized platform. Our online sales increased by 250% within the first month of launch.",
    author: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "https://pixabay.com/get/g2c041f6ac343bfea4cccf2cc19600434669384b38a670f3fd6d071337e8a9955d55b6ee8238a15131cdb0885c5b7e60ac2e15b33678f5bb7552c7cbf5d3683e6_1280.jpg"
  },
  {
    quote: "The team at DevWorks delivered exceptional results on time and within budget. Their attention to detail and communication throughout the project was outstanding.",
    author: "Michael Chen",
    title: "CTO, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  },
  {
    quote: "Working with DevWorks was a game-changer for our business. They created a custom e-commerce platform that perfectly fits our unique requirements.",
    author: "Emily Rodriguez",
    title: "Founder, EcoMarket",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with DevWorks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-card rounded-xl p-8"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-2">
                  <Quote className="w-6 h-6" />
                </div>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
