
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
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-700 via-purple-700 to-pink-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
            About Tanvi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-pink-950/50 to-purple-950/50 shadow-2xl border border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Her Journey</CardTitle>
                <CardDescription className="text-gray-300">
                  Building solutions that matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Tanvi is a passionate professional who believes in the power of innovation and collaboration. 
                  Her experience spans across various domains where she has developed a strong foundation 
                  in strategic thinking, creative problem-solving, and team leadership.
                </p>
                <p className="text-gray-200 leading-relaxed mb-6">
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

            <Card className="border-0 bg-gradient-to-br from-purple-950/50 to-blue-950/50 shadow-2xl border border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
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
            <Card className="border-0 bg-gradient-to-br from-gray-900/80 to-purple-900/50 shadow-2xl border border-gray-400/30">
              <CardHeader>
                <CardTitle className="text-xl text-white">Skills Constellation</CardTitle>
                <CardDescription className="text-gray-300">
                  Interactive network showing how expertise connects and flows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsConstellation />
              </CardContent>
            </Card>

            {/* Tools as Superpowers */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-0 bg-gradient-to-br from-green-950/50 to-emerald-900/50 shadow-xl border border-green-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-400" />
                    Superpowers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {superpowers.map((skill, index) => (
                      <Badge key={index} className="bg-green-600/80 text-white hover:bg-green-500 transition-colors font-semibold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-yellow-950/50 to-orange-900/50 shadow-xl border border-yellow-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Cog className="w-5 h-5 text-yellow-400" />
                    Work-in-Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {workInProgress.map((skill, index) => (
                      <Badge key={index} className="bg-yellow-600/80 text-white hover:bg-yellow-500 transition-colors font-semibold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-950/50 to-cyan-900/50 shadow-xl border border-blue-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Telescope className="w-5 h-5 text-blue-400" />
                    Exploring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exploring.map((skill, index) => (
                      <Badge key={index} className="bg-blue-600/80 text-white hover:bg-blue-500 transition-colors font-semibold flex items-center gap-1">
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
