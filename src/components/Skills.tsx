import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = {
    "Containers/Orchestration": [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 70 },
      { name: "Helm", level: 40 },
      { name: "EKS", level: 90 }
    ],
    "Logging/Monitoring": [
      { name: "Grafana/Loki", level: 65 },
      { name: "Prometheus", level: 70 },
      { name: "AWS CloudWatch", level: 85 },
      { name: "Elastic Stack", level: 60 }
    ],
    "Automation Tools": [
      { name: "Jenkins", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Ansible", level: 75 },
      { name: "Argo CD", level: 40 },
      { name: "Azure DevOps", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "Python Scripting", level: 65 },
      { name: "Bash", level: 90 }
    ],
    "Cloud Platforms": [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 60 },
      { name: "GCP", level: 30 },
      { name: "Digital Ocean", level: 80 }
    ],
    "Operating Systems": [
      { name: "Ubuntu", level: 90 },
      { name: "Windows", level: 90 },
      { name: "CentOS", level: 60 },
      { name: "Kali", level: 50 },
      { name: "MacOS", level: 70 }
    ],
    "Development & Deployment": [
      { name: "Git/GitHub/Bitbucket", level: 85 },
      { name: "Maven/Gradle", level: 70 },
      { name: "Nginx/Apache", level: 80 },
      { name: "HAProxy", level: 75 },
      { name: "Angular", level: 95 },
      { name: "Java Spring Boot", level: 80 },
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 80 },
      { name: "PHP/Laravel", level: 90 },
      { name: "NodeJS", level: 85 },
      { name: "Kafka", level: 70 },
      { name: "Pentesting", level: 50 }
    ]
  };

  const softSkills = [
    { name: "Research", level: 93 },
    { name: "Troubleshooting", level: 84 },
    { name: "Emotional Intelligence", level: 98 },
    { name: "Collaboration", level: 99 },
    { name: "Availability", level: 99 }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return "bg-brand-green";
    if (level >= 60) return "bg-brand-blue";
    return "bg-brand-purple";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skillset spanning cloud platforms, DevOps tools, and modern development practices
            with proven expertise in enterprise-scale implementations.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <Card className="hero-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Personal Qualities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills */}
        <div className="grid gap-8">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <Card key={category} className="hero-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Certifications & Highlights */}
        <div className="mt-12">
          <Card className="hero-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Key Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-brand-purple/10">
                  <div className="text-2xl font-bold text-brand-purple mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">Years DevOps/SRE</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-brand-blue/10">
                  <div className="text-2xl font-bold text-brand-blue mb-1">Multi-Cloud</div>
                  <div className="text-sm text-muted-foreground">AWS, Azure, GCP</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-brand-green/10">
                  <div className="text-2xl font-bold text-brand-green mb-1">CI/CD</div>
                  <div className="text-sm text-muted-foreground">Expert Level</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-brand-purple/10">
                  <div className="text-2xl font-bold text-brand-purple mb-1">Enterprise</div>
                  <div className="text-sm text-muted-foreground">Scale Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;