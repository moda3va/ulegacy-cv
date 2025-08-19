import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your cloud infrastructure? Let's discuss how I can help 
            your organization achieve scalable, reliable, and secure cloud solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities, challenging projects, 
                and innovative cloud solutions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-purple/10 rounded-lg">
                      <Mail className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a 
                        href="mailto:nwogbo.ubakeze@gmail.com" 
                        className="text-muted-foreground hover:text-brand-purple transition-colors"
                      >
                        nwogbo.ubakeze@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Phone className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a 
                        href="tel:+2347066898957" 
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        +234 706 689 8957
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-green/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <span className="text-muted-foreground">Lagos, Nigeria</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Availability */}
            <Card className="hero-card border-brand-success/20 bg-brand-success/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-success/10 rounded-lg">
                    <Clock className="w-6 h-6 text-brand-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Availability</h4>
                    <p className="text-muted-foreground">
                      Available for new opportunities and consulting projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/nwogbo-ubakeze" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hero-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project Discussion" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project requirements..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;