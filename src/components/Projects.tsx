import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cloud, Database, Shield, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a comprehensive multi-cloud infrastructure platform supporting AWS, Azure, and GCP with automated failover and cost optimization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "Cloud Infrastructure",
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Prometheus"],
      features: [
        "99.99% uptime across all regions",
        "Automated disaster recovery",
        "Cost optimization algorithms",
        "Real-time monitoring dashboard"
      ],
      metrics: {
        uptime: "99.99%",
        cost_savings: "40%",
        deployment_time: "80% faster"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: Cloud
    },
    {
      title: "Enterprise CI/CD Pipeline",
      description: "Built a comprehensive CI/CD pipeline system handling 500+ deployments per day with automated testing, security scanning, and rollback capabilities.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      category: "DevOps Automation",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "SonarQube", "Vault"],
      features: [
        "Automated security scanning",
        "Zero-downtime deployments",
        "Rollback mechanisms",
        "Multi-environment support"
      ],
      metrics: {
        deployments: "500+/day",
        success_rate: "99.8%",
        time_reduction: "75%"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: Zap
    },
    {
      title: "Microservices Monitoring Stack",
      description: "Implemented comprehensive observability solution for microservices architecture with distributed tracing, metrics collection, and intelligent alerting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Monitoring & Observability",
      technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "Istio", "Fluentd"],
      features: [
        "Distributed tracing",
        "Custom metrics dashboards",
        "Intelligent alerting",
        "Performance analytics"
      ],
      metrics: {
        services_monitored: "200+",
        alert_accuracy: "95%",
        mttr_reduction: "60%"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: Database
    },
    {
      title: "Cloud Security Automation",
      description: "Developed automated security compliance and vulnerability management system ensuring continuous security posture across cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Security & Compliance",
      technologies: ["AWS Security Hub", "Terraform", "Python", "Lambda", "CloudTrail", "GuardDuty"],
      features: [
        "Automated compliance checks",
        "Vulnerability scanning",
        "Security incident response",
        "Compliance reporting"
      ],
      metrics: {
        compliance_score: "98%",
        vulnerabilities_fixed: "1000+",
        response_time: "< 5 min"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: Shield
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Projects</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of enterprise-scale cloud infrastructure and DevOps projects 
            that demonstrate expertise in modern cloud-native technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hero-card hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/90 rounded-lg">
                    <project.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-brand-purple rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 py-3 border-t border-b">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="font-bold text-sm">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-brand-purple hover:bg-brand-purple/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;