import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Cloud DevOps/SRE Engineer",
      company: "Tech Solutions Inc.",
      location: "Lagos, Nigeria",
      period: "2020 - Present",
      type: "Full-time",
      description: "Leading cloud infrastructure transformation initiatives and implementing enterprise-scale DevOps practices. Achieved 99.99% uptime across all critical systems while reducing deployment time by 80%.",
      achievements: [
        "Architected multi-cloud infrastructure serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Led team of 8 engineers in cloud migration projects",
        "Established monitoring and alerting systems achieving 99.99% uptime"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana"]
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Innovations Ltd",
      location: "Lagos, Nigeria", 
      period: "2018 - 2020",
      type: "Full-time",
      description: "Specialized in container orchestration and microservices architecture. Built scalable infrastructure supporting rapid business growth and improved system reliability.",
      achievements: [
        "Migrated monolithic applications to microservices architecture",
        "Implemented Docker containerization across 50+ applications",
        "Reduced infrastructure costs by 40% through optimization",
        "Established disaster recovery procedures with RTO < 1 hour"
      ],
      technologies: ["Docker", "Kubernetes", "Azure", "Ansible", "GitLab CI", "ELK Stack"]
    },
    {
      title: "Systems Administrator",
      company: "Digital Systems Corp",
      location: "Lagos, Nigeria",
      period: "2015 - 2018", 
      type: "Full-time",
      description: "Managed on-premises infrastructure and began cloud adoption journey. Focused on automation and system reliability improvements.",
      achievements: [
        "Automated server provisioning reducing setup time by 70%",
        "Implemented backup and monitoring solutions",
        "Managed hybrid cloud infrastructure",
        "Provided 24/7 system support and maintenance"
      ],
      technologies: ["Linux", "VMware", "PowerShell", "Nagios", "MySQL", "Apache"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Experience</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over a decade of hands-on experience in cloud infrastructure, DevOps practices, 
            and site reliability engineering across various industries and scales.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hero-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left side - Company info */}
                  <div className="lg:w-1/3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-brand-purple font-semibold">
                        <span>{exp.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:w-2/3 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-brand-purple rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;