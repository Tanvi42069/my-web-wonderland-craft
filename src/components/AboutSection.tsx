
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Creative Problem Solving", "Leadership", "Strategic Planning", "Team Collaboration",
    "Project Management", "Communication", "Innovation", "Research & Analysis",
    "Adaptability", "Critical Thinking", "Time Management", "Cross-functional Coordination"
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-red-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-red-950/50 to-orange-950/50 shadow-2xl border border-red-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">My Journey</CardTitle>
                <CardDescription className="text-gray-300">
                  Building solutions that matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed mb-4">
                  I'm a passionate professional who believes in the power of innovation and collaboration. 
                  My experience spans across various domains where I've developed a strong foundation 
                  in strategic thinking, creative problem-solving, and team leadership.
                </p>
                <p className="text-gray-200 leading-relaxed mb-6">
                  I excel at translating complex challenges into actionable solutions, 
                  managing diverse projects, and driving successful outcomes through 
                  effective communication and collaborative approaches.
                </p>
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                    <Linkedin className="mr-2" size={16} />
                    Connect with me
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-950/50 to-red-950/50 shadow-2xl border border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Innovation-driven approach
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Collaborative teamwork
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    Continuous learning mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Results-focused execution
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-red-950/50 to-gray-900/50 shadow-2xl border border-red-400/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-red-600/80 text-white hover:bg-red-500 transition-colors font-semibold"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-bold">
                    <Linkedin className="mr-2" size={16} />
                    View Full Profile
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

