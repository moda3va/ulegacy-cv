import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mastering <span className="gradient-text">Cloud-Native Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of specialized experience in Cloud DevOps/SRE engineering, 
            I architect resilient cloud infrastructure, implement advanced automation, 
            and ensure mission-critical systems deliver exceptional performance at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I began my career in cloud infrastructure and quickly discovered my passion for 
                  cloud-native technologies, advanced automation, and site reliability engineering. 
                  This led me to specialize in multi-cloud DevOps practices and enterprise-scale SRE methodologies.
                </p>
                <p>
                  Today, I help organizations transform their cloud infrastructure, implement sophisticated 
                  CI/CD pipelines, ensure 99.99% availability, and build cloud-native systems that scale 
                  effortlessly. I believe in Infrastructure as Code, observability-driven operations, 
                  and proactive incident management to maintain exceptional service reliability.
                </p>
                <p>
                  When I'm not optimizing cloud architectures, you'll find me contributing to cloud-native 
                  communities, mentoring aspiring cloud engineers, or exploring cutting-edge technologies 
                  in serverless, container orchestration, and cloud security.
                </p>
              </div>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Target className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Mission-Critical Focus</div>
                  <div className="text-sm text-muted-foreground">99.99% uptime guarantee</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold">Innovation Driven</div>
                  <div className="text-sm text-muted-foreground">Cutting-edge solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Core Expertise</h3>
            
            <div className="grid gap-4">
              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-purple/10 rounded-lg">
                      <Code className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Cloud Infrastructure as Code</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Expert in Terraform, CloudFormation, and infrastructure automation
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Terraform</Badge>
                        <Badge variant="secondary" className="text-xs">CloudFormation</Badge>
                        <Badge variant="secondary" className="text-xs">Ansible</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Zap className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Site Reliability Engineering</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ensuring 99.99% uptime with advanced monitoring and incident response
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Prometheus</Badge>
                        <Badge variant="secondary" className="text-xs">Grafana</Badge>
                        <Badge variant="secondary" className="text-xs">ELK Stack</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-green/10 rounded-lg">
                      <Users className="w-6 h-6 text-brand-green" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">DevOps Leadership</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Leading teams and transforming organizational DevOps culture
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Team Leadership</Badge>
                        <Badge variant="secondary" className="text-xs">Agile</Badge>
                        <Badge variant="secondary" className="text-xs">Mentoring</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hero-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-purple/10 rounded-lg">
                      <Award className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Multi-Cloud Architecture</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Designing and implementing solutions across AWS, Azure, and GCP
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">AWS</Badge>
                        <Badge variant="secondary" className="text-xs">Azure</Badge>
                        <Badge variant="secondary" className="text-xs">GCP</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;