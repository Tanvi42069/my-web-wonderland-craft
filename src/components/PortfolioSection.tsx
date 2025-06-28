
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Trophy, 
  Star,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";

const PortfolioSection = () => {
  const experiences = [
    {
      title: "Project Lead",
      company: "Tech Innovation Hub",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading cross-functional teams to deliver innovative solutions for complex technical challenges.",
      skills: ["Leadership", "Project Management", "Strategic Planning"]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Inc.",
      period: "2022 - 2023",
      location: "New York, NY",
      description: "Developed scalable web applications using modern technologies and best practices.",
      skills: ["JavaScript", "Python", "React"]
    }
  ];

  const achievements = [
    {
      title: "Excellence in Innovation",
      organization: "Tech Leadership Forum",
      year: "2023",
      description: "Recognized for outstanding contribution to innovative project solutions"
    },
    {
      title: "Best Team Player",
      organization: "Digital Solutions Inc.",
      year: "2022",
      description: "Awarded for exceptional collaboration and team leadership skills"
    }
  ];

  const socialService = [
    {
      title: "Community Tech Mentor",
      organization: "Local Coding Bootcamp",
      period: "2023 - Present",
      description: "Mentoring aspiring developers and helping them build their first projects",
      impact: "25+ students guided"
    },
    {
      title: "Digital Literacy Volunteer",
      organization: "Community Center",
      period: "2022 - 2023",
      description: "Teaching basic computer skills to seniors and underserved communities",
      impact: "100+ people trained"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            Portfolio & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Professional Experience */}
          <Card className="border-0 bg-white/90 shadow-lg border border-purple-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Professional Experience
              </CardTitle>
              <CardDescription className="text-gray-600">
                Building impactful solutions through collaboration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-purple-100 text-purple-700 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Teamwork and Collaboration */}
          <Card className="border-0 bg-white/90 shadow-lg border border-pink-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-pink-600" />
                Teamwork and Collaboration
              </CardTitle>
              <CardDescription className="text-gray-600">
                Building connections and fostering growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">15+</div>
                  <div className="text-sm text-gray-600">Projects Led</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700 text-sm">Cross-functional team leadership</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 text-sm">Agile project management</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 text-sm">Stakeholder communication</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic Acclamation */}
          <Card className="border-0 bg-white/90 shadow-lg border border-green-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-600" />
                Academic Acclamation
              </CardTitle>
              <CardDescription className="text-gray-600">
                Recognition for excellence and innovation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-green-100 rounded-lg p-4 bg-green-50/50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                  </div>
                  <p className="text-green-700 font-medium text-sm mb-2">{achievement.organization}</p>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Service */}
          <Card className="border-0 bg-white/90 shadow-lg border border-blue-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Social Service
              </CardTitle>
              <CardDescription className="text-gray-600">
                Giving back to the community through knowledge sharing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialService.map((service, index) => (
                <div key={index} className="border border-blue-100 rounded-lg p-4 bg-blue-50/50">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">{service.impact}</Badge>
                  </div>
                  <p className="text-blue-700 font-medium text-sm mb-2">{service.organization}</p>
                  <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {service.period}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
