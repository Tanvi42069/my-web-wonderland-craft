import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Target, Lightbulb } from "lucide-react";

const LeadershipSection = () => {
  const stats = [
    { number: "10+", label: "Projects Led", icon: <Target className="w-6 h-6" /> },
    { number: "30+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Organizations", icon: <Star className="w-6 h-6" /> },
    { number: "100+", label: "Events Organized", icon: <Lightbulb className="w-6 h-6" /> }
  ];

  const highlights = [
    "Founding Member and Event Lead of JAVA BREWERS",
    "NSS Secretary of MIT IMPACT",
    "Cross-functional collaboration with GeeksforGeeks, ACES, and Cyber Security & Blockchain Club",
    "Represented MIT ADT at 38th West Zone Youth Festival",
    "Anchored major university events",
    "Created viral digital content for community engagement"
  ];

  return (
    <section id="leadership" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-gray-800">
            Leadership & Collaboration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Tanvi Bokade is a dynamic student leader known for her strong collaboration, leadership, and communication skills. As the Founding Member and Event Lead of JAVA BREWERS and NSS Secretary of MIT IMPACT, she has led impactful initiatives and events.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Her cross-functional work with Geeks for Geeks, ACES, and the Cyber Security & Blockchain Club showcases her versatility. Tanvi has also represented MIT ADT at the 38th West Zone Youth Festival, anchored major events, and created viral digital content, reflecting her commitment to community, creativity, and teamwork.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;