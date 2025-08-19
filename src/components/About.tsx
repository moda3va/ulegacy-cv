import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Building the Future of <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of experience in software engineering and full-stack development, 
            I specialize in creating robust, scalable, and innovative solutions that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I began my career as a junior developer and quickly discovered my passion for creating 
              elegant solutions to complex problems. This led me to specialize in full-stack development, 
              system architecture, and team leadership.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I help organizations modernize their technology stack, implement scalable architectures, 
              and build high-performing development teams. I believe in the power of clean code, automated 
              testing, and continuous integration to deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me mentoring junior developers, contributing to open-source 
              projects, or exploring the latest technologies and frameworks.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Code className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Full Stack Expert</div>
                  <div className="text-sm text-muted-foreground">Frontend & Backend</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold">Team Leadership</div>
                  <div className="text-sm text-muted-foreground">Mentoring & Management</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <Zap className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold">Performance Optimization</div>
                  <div className="text-sm text-muted-foreground">Scalable Solutions</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Award className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Quality Focused</div>
                  <div className="text-sm text-muted-foreground">Best Practices</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Core Competencies</h3>
            
            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Backend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hero-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
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