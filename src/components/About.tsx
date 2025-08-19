import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Building Reliable <span className="gradient-text">Infrastructure at Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of experience in IT and DevOps/SRE engineering, 
            I specialize in creating bulletproof infrastructure, implementing robust automation, 
            and ensuring systems run smoothly at any scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I began my career in IT support and quickly discovered my passion for automation, 
              infrastructure optimization, and system reliability. This led me to specialize in 
              DevOps practices, Site Reliability Engineering, and cloud architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I help organizations modernize their infrastructure, implement CI/CD pipelines, 
              ensure high availability, and build resilient systems that can handle massive scale. 
              I believe in the power of Infrastructure as Code, automated monitoring, and proactive 
              incident response to maintain 99.9% uptime.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not optimizing systems, you'll find me contributing to DevOps communities, 
              mentoring junior engineers, or exploring the latest trends in cloud-native technologies 
              and observability tools.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Code className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Infrastructure as Code</div>
                  <div className="text-sm text-muted-foreground">Terraform & Ansible</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold">Team Leadership</div>
                  <div className="text-sm text-muted-foreground">DevOps Culture & Best Practices</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <Zap className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold">System Reliability</div>
                  <div className="text-sm text-muted-foreground">99.9% Uptime SLA</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Award className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Cloud Architecture</div>
                  <div className="text-sm text-muted-foreground">AWS & Multi-Cloud</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Core Competencies</h3>
            
            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Cloud Platforms & Services</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">EC2</Badge>
                  <Badge variant="secondary">EKS</Badge>
                  <Badge variant="secondary">Lambda</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">DevOps & Automation Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">GitLab CI</Badge>
                  <Badge variant="secondary">Ansible</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Monitoring & Observability</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Prometheus</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">ELK Stack</Badge>
                  <Badge variant="secondary">Datadog</Badge>
                  <Badge variant="secondary">New Relic</Badge>
                  <Badge variant="secondary">PagerDuty</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;