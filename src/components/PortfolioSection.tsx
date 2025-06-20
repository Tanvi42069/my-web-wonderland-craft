
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Strategic Initiative Leadership",
      description: "Led cross-functional teams to deliver high-impact projects that drove organizational growth and efficiency improvements.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Leadership", "Strategy", "Team Management", "Project Delivery"],
      category: "Leadership"
    },
    {
      title: "Process Innovation & Optimization",
      description: "Designed and implemented innovative solutions that streamlined operations and enhanced productivity across multiple departments.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Process Improvement", "Innovation", "Efficiency", "Analysis"],
      category: "Innovation"
    },
    {
      title: "Collaborative Team Building",
      description: "Facilitated team development initiatives that improved collaboration, communication, and overall performance metrics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Team Building", "Communication", "Performance", "Development"],
      category: "Team Development"
    },
    {
      title: "Data-Driven Decision Making",
      description: "Developed analytical frameworks and reporting systems that enabled informed decision-making and strategic planning.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Analytics", "Data Analysis", "Reporting", "Strategic Planning"],
      category: "Analytics"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my professional achievements and the impact I've made through 
            strategic thinking, leadership, and innovative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  <FileText className="mr-2" size={16} />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Collaborate?</CardTitle>
              <CardDescription className="text-blue-100">
                I'm always excited to take on new challenges and work with amazing teams.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <Briefcase className="mr-2" size={20} />
                  Let's Connect on LinkedIn
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
