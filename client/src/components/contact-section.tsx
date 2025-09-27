import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      e.preventDefault();
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Show success message after form submission (simulated)
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's transform your ideas into digital reality. Get in touch with us today for a free consultation and project quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="5dda6af4-f186-4907-989a-0b7844b9c753" />
              <input type="hidden" name="subject" value="New Contact Form Submission from DevWorks Website" />
              <input type="hidden" name="from_name" value="DevWorks Website" />
              <input type="hidden" name="project_type" value={formData.projectType} />
              <input type="hidden" name="budget" value={formData.budget} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="first_name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="last_name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    required
                    data-testid="input-lastName"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your Company"
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </Label>
                <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger data-testid="select-projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="mobile">Mobile Application</SelectItem>
                    <SelectItem value="webapp">Web Application</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger data-testid="select-budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                    <SelectItem value="5000-15000">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15000-30000">$15,000 - $30,000</SelectItem>
                    <SelectItem value="30000+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-3 hover:bg-primary/90"
                disabled={isSubmitting}
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
