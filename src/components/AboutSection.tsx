
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "Leadership", "Project Management", "Strategic Planning", "Team Building",
    "Communication", "Problem Solving", "Creative Thinking", "Innovation"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Professional Journey</CardTitle>
                <CardDescription className="text-gray-600">
                  Driven by passion and purpose
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am a dedicated professional with a passion for creating innovative solutions 
                  and driving meaningful change. My journey has been shaped by curiosity, 
                  continuous learning, and a commitment to excellence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a strong foundation in strategic thinking and creative problem-solving, 
                  I thrive in environments that challenge me to grow and contribute to impactful projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Excellence in everything I do
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Continuous learning and growth
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    Collaborative and inclusive approach
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    Innovation and creative thinking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/4dd48587-f504-4c20-9c1a-92c32f9eb1d0.png" 
                alt="Tanvi Bokade - Professional Portrait" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white/80 text-gray-700 hover:bg-white transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
