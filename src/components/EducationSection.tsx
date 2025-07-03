import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "MIT Art, Design and Technology University, Pune",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      score: "CGPA: 8.97",
      period: "2021 - 2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      institution: "Pace Junior College, Mumbai",
      degree: "HSC – Science and Mathematics",
      score: "Percentage: 74.67%",
      period: "2019 - 2021",
      color: "from-blue-500 to-purple-500"
    },
    {
      institution: "Lokhandwala Foundation School, Mumbai",
      degree: "ICSE",
      score: "Percentage: 97.67%",
      period: "2019",
      color: "from-green-500 to-blue-500"
    }
  ];

  const awards = [
    {
      title: "Outstanding Orator - PERSONA 2025",
      organization: "MIT ADT University",
      year: "2025",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_mitadt-persona2025-outstandingorator-activity-7316292197975232512-pB_t"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-gray-800">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-800">{edu.institution}</CardTitle>
                <CardDescription className="text-purple-600 font-medium">
                  {edu.degree}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 hover:bg-green-200">
                  {edu.score}
                </Badge>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-center mb-8 text-gray-800">Awards & Recognition</h3>
          <div className="max-w-2xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{award.title}</h4>
                      <p className="text-orange-600 font-medium text-sm mb-1">{award.organization}</p>
                      <p className="text-gray-500 text-sm mb-3">{award.year}</p>
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Post
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-light mb-6 text-gray-800">Certifications</h3>
          <Card className="max-w-md mx-auto hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600 mb-4">Multiple professional certifications in technology and leadership</p>
              <a 
                href="https://www.linkedin.com/in/tanvi-bokade-3817681b0/details/certifications/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View All Certifications
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;