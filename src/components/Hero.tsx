import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-blue/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="bg-brand-success/10 text-brand-success border-brand-success/20 px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-brand-success rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </Badge>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Nwogbo Ubakeze</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto">
              Senior Cloud DevOps/SRE Engineer
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Architecting resilient cloud infrastructure and implementing advanced DevOps practices with 
            over 10 years of specialized experience. Delivering scalable, secure, and highly available 
            cloud-native solutions across AWS, Azure, and multi-cloud environments.
          </p>

          {/* Profile Image */}
          <div className="flex justify-center my-12">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/lovable-uploads/41a03c43-d4ad-4987-960b-0779a4936391.png"
                  alt="Nwogbo Ubakeze - Senior Cloud DevOps/SRE Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-success rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <a href="tel:+2347066898957">+234 706 689 8957</a>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <a href="mailto:nwogbo.ubakeze@gmail.com">nwogbo.ubakeze@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="https://linkedin.com/in/nwogbo-ubakeze" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;