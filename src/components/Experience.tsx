import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy, Award } from "lucide-react";

export function Experience() {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Aug '24 - Present",
      grade: "CGPA: 8.15"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Triveni Satyabhama College",
      location: "Nawada, Bihar",
      period: "Apr '21 – Aug '24",
      grade: "Percentage: 74.38%"
    },
    {
      degree: "Intermediate",
      institution: "Nadiganj College",
      location: "Nawada, Bihar",
      period: "Apr '19 – Mar '21",
      grade: "Percentage: 78.2%"
    }
  ];

  const achievements = [
    {
      title: "Competitive Programming Achievements",
      items: [
        "Solved 300+ algorithmic problems across online coding platforms",
        "Secured Achieved a Codeforces rating of 800 and continuously improving through regular problem-solving practice"
      ],
      year: "Present"
    },
    {
      title: "Runner-Up, Inter-School Cricket Tournament",
      items: [
        "Secured second position among 20 teams in a highly competitive inter-school cricket tournament held at LPU",
        "Demonstrated strong teamwork, strategy, and sportsmanship under pressure"
      ],
      year: "2025"
    },
    {
      title: "Cleared 3 Prestigious Central Government Exams",
      items: [
        "Successfully qualified for the Indian Army, SSC (GD), and Indian Navy",
        "Demonstrating resilience, strategic thinking, and competitive excellence"
      ],
      year: "2021-24"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic background with a strong foundation in computer science and mathematics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{edu.degree}</CardTitle>
                      <p className="text-primary text-sm">{edu.institution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <Badge variant="secondary" className="mt-2">{edu.grade}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl">Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and accomplishments that demonstrate dedication and excellence.
            </p>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-primary" />
                      {achievement.title}
                    </CardTitle>
                    {achievement.year && (
                      <Badge variant="outline">{achievement.year}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievement.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <Award className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}