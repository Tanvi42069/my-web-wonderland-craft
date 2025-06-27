
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Zap, Brain, Telescope, Rocket, Users, Target, Lightbulb, Cog, Clock } from "lucide-react";
import SkillsConstellation from "./SkillsConstellation";

const AboutSection = () => {
  const superpowers = [
    { name: "Strategic Thinking", icon: <Target className="w-5 h-5" /> },
    { name: "Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const workInProgress = [
    { name: "Project Management", icon: <Cog className="w-5 h-5" /> },
    { name: "Data Analysis", icon: <Brain className="w-5 h-5" /> },
    { name: "Time Management", icon: <Clock className="w-5 h-5" /> }
  ];

  const exploring = [
    { name: "AI/ML", icon: <Rocket className="w-5 h-5" /> },
    { name: "UX Design", icon: <Zap className="w-5 h-5" /> },
    { name: "Digital Marketing", icon: <Telescope className="w-5 h-5" /> }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-cream-50 via-orange-25 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-pink-700 bg-clip-text text-transparent">
            About Tanvi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="border-0 bg-white/80 shadow-xl border border-pink-200/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Her Journey</CardTitle>
                <CardDescription className="text-gray-600">
                  Building solutions that matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tanvi is a passionate professional who believes in the power of innovation and collaboration. 
                  Her experience spans across various domains where she has developed a strong foundation 
                  in strategic thinking, creative problem-solving, and team leadership.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  She excels at translating complex challenges into actionable solutions, 
                  managing diverse projects, and driving successful outcomes through 
                  effective communication and collaborative approaches.
                </p>
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold">
                    <Linkedin className="mr-2" size={16} />
                    Connect with her
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 shadow-xl border border-purple-200/50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Innovation-driven approach
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Collaborative teamwork
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Continuous learning mindset
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Results-focused execution
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Interactive Skills Constellation */}
            <Card className="border-0 bg-white/90 shadow-xl border border-gray-200/50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Skills Constellation</CardTitle>
                <CardDescription className="text-gray-600">
                  Interactive network showing how expertise connects and flows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsConstellation />
              </CardContent>
            </Card>

            {/* Tools as Superpowers */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-0 bg-white/80 shadow-xl border border-green-200/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Superpowers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {superpowers.map((skill, index) => (
                      <Badge key={index} className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors font-semibold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 shadow-xl border border-yellow-200/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                    <Cog className="w-5 h-5 text-yellow-600" />
                    Work-in-Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {workInProgress.map((skill, index) => (
                      <Badge key={index} className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors font-semibold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 shadow-xl border border-blue-200/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                    <Telescope className="w-5 h-5 text-blue-600" />
                    Exploring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exploring.map((skill, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors font-semibold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
