import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mastering <span className="gradient-text">Cloud-Native Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of specialized experience in Cloud DevOps/SRE engineering, 
            I architect resilient cloud infrastructure, implement advanced automation, 
            and ensure mission-critical systems deliver exceptional performance at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I began my career in cloud infrastructure and quickly discovered my passion for 
              cloud-native technologies, advanced automation, and site reliability engineering. 
              This led me to specialize in multi-cloud DevOps practices and enterprise-scale SRE methodologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I help organizations transform their cloud infrastructure, implement sophisticated 
              CI/CD pipelines, ensure 99.99% availability, and build cloud-native systems that scale 
              effortlessly. I believe in Infrastructure as Code, observability-driven operations, 
              and proactive incident management to maintain exceptional service reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not optimizing cloud architectures, you'll find me contributing to cloud-native 
              communities, mentoring aspiring cloud engineers, or exploring cutting-edge technologies 
              in serverless, container orchestration, and cloud security.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Code className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Cloud Infrastructure as Code</div>
                  <div className="text-sm text-muted-foreground">Terraform & CloudFormation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold">Cloud DevOps Leadership</div>
                  <div className="text-sm text-muted-foreground">Team & Culture Transformation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <Zap className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold">Site Reliability Engineering</div>
                  <div className="text-sm text-muted-foreground">99.99% Cloud Uptime</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Award className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Multi-Cloud Architecture</div>
                  <div className="text-sm text-muted-foreground">AWS, Azure & GCP</div>
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
                  <Badge variant="secondary">GCP</Badge>
                  <Badge variant="secondary">Digital Ocean</Badge>
                  <Badge variant="secondary">EKS</Badge>
                  <Badge variant="secondary">CloudWatch</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">DevOps & Automation Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">Ansible</Badge>
                  <Badge variant="secondary">Azure DevOps</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
                  <Badge variant="secondary">Argo CD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Monitoring & Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Prometheus</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">Loki</Badge>
                  <Badge variant="secondary">Elastic Stack</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">Java Spring Boot</Badge>
                  <Badge variant="secondary">NodeJS</Badge>
                  <Badge variant="secondary">MySQL</Badge>
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