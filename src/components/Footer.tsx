import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Nwogbo Ubakeze</h3>
              <p className="text-muted-foreground max-w-md">
                Senior Cloud DevOps/SRE Engineer specializing in scalable cloud infrastructure, 
                advanced automation, and enterprise-grade reliability solutions.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                <Badge variant="secondary" className="bg-brand-success/10 text-brand-success border-brand-success/20">
                  Available for opportunities
                </Badge>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:nwogbo.ubakeze@gmail.com" className="hover:text-foreground transition-colors">
                  nwogbo.ubakeze@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+2347066898957" className="hover:text-foreground transition-colors">
                  +234 706 689 8957
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Me</h5>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/nwogbo-ubakeze" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Nwogbo Ubakeze. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Lagos, Nigeria</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;