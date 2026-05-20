import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Automated Course-Based Chat and Control System",
      description:
        "Developed a real-time PHP-based classroom management system enabling secure and structured communication among students and instructors with course-based group management.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "Apache Server"],
      date: "Nov '25",
      features: [
        "Designed admin dashboard for managing users and groups",
        "Implemented AJAX-powered chat interface",
        "Secure authentication and data protection",
      ],
      impact: "Reduced communication friction for course operations",
      githubUrl: "https://github.com/itskk6207",
      liveUrl: "https://classroom-chat-app.infinityfree.me/home.php",
    },
    {
      title: "Smart Traffic Control and Monitoring System",
      description:
        "Built a real-time traffic monitoring system to improve signal coordination in congested urban areas.",
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "React.js", "RESTful API"],
      date: "May '25",
      features: [
        "Java and Spring Boot backend",
        "React.js user interface",
        "Live traffic updates and signal timing management",
      ],
      impact: "Improved signal visibility and coordination in simulations",
      githubUrl: "https://github.com/itskk6207",
      liveUrl: "https://smart-traffic-control-and-monitoring-system-l4h9sweam.vercel.app/",
    },
    {
      title: "Intelligent Two-Wheeler Monitoring System (Patent Published)",
      description:
        "Innovative smart, low-cost IoT/GSM solution that enhances two-wheeler safety through real-time theft prevention, accident detection, and instant emergency alerts.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["IoT", "GSM", "Embedded Systems", "Real-time Monitoring"],
      date: "Sep '25",
      isPatent: true,
      impact: "Real-time emergency notifications for rider safety",
    },
    {
      title: "Smart Bicycle Stand (Patent Filed)",
      description:
        "Developed a smart bicycle stand with integrated locking, multi-factor verification, and tamper detection, powered by solar energy for secure and sustainable use.",
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&h=400&fit=crop",
      technologies: ["IoT", "Solar Energy", "Security Systems", "Verification"],
      date: "Apr '25",
      isPatent: true,
      impact: "Security-first and energy-efficient smart stand concept",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects & Patents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate expertise in full-stack
            development, IoT solutions, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                {project.isPatent && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <FileText className="h-3 w-3 mr-1" />
                      Patent
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline" className="shrink-0">
                    {project.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-foreground/90">
                  <span className="font-medium">Impact:</span> {project.impact}
                </div>
                {project.features && (
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {!project.isPatent && (
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
