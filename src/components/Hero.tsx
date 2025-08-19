import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-brand-success/10 text-brand-success border-brand-success/20">
                Available for opportunities
              </Badge>
              
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Uba{" "}
                  <span className="gradient-text">Morris</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground mt-2 font-medium">
                  Senior DevOps/SRE Engineer & IT Infrastructure Specialist
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building reliable, scalable infrastructure and automating complex systems with over 10 years 
                of experience in DevOps, Site Reliability Engineering, and IT operations. Ensuring 99.9% uptime 
                while optimizing performance and reducing operational overhead.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years in IT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Automated Pipelines</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                <Mail className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+2347066898957" className="hover:text-foreground transition-colors">
                  +234 706 689 8957
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:nwogbo.ubakeze@gmail.com" className="hover:text-foreground transition-colors">
                  nwogbo.ubakeze@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://linkedin.com/in/uba-morris" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative">
            <div className="hero-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">
                  DevOps/SRE Expert
                </Badge>
              </div>
              
              <img
                src="/lovable-uploads/41a03c43-d4ad-4987-960b-0779a4936391.png"
                alt="Uba Morris - Senior DevOps/SRE Engineer"
                className="w-full h-auto rounded-xl object-cover"
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="hero-card rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Ready to Collaborate</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Specializing in AWS, Kubernetes, Docker, and Infrastructure as Code
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">AWS</Badge>
                    <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">Kubernetes</Badge>
                    <Badge variant="secondary" className="bg-brand-green/10 text-brand-green border-brand-green/20">Docker</Badge>
                    <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">Terraform</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-purple/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;