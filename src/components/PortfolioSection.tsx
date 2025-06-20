
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Leadership & Public Speaking",
      description: "Delivering impactful presentations and leading initiatives at MIT Art, Design & Technology University. Demonstrating strong communication and leadership skills in academic and professional settings.",
      image: "/lovable-uploads/fd5de28a-cc60-490c-9d30-577af53d49cd.png",
      tags: ["Public Speaking", "Leadership", "Communication", "Academic Excellence"],
      category: "Leadership"
    },
    {
      title: "Team Collaboration & Innovation",
      description: "Working collaboratively with diverse teams on technology projects and innovation initiatives. Fostering teamwork and driving collective success through effective coordination and shared vision.",
      image: "/lovable-uploads/a0c1cc61-6250-4a1e-8560-a5b826d7928c.png",
      tags: ["Team Collaboration", "Innovation", "Technology", "Project Management"],
      category: "Innovation"
    },
    {
      title: "Community Service & Social Impact",
      description: "Actively participating in National Service Scheme initiatives and community outreach programs. Demonstrating commitment to social responsibility and making a positive impact in the community.",
      image: "/lovable-uploads/83597ca6-981d-49db-86d6-6d106e5c2e43.png",
      tags: ["Community Service", "Social Impact", "Volunteerism", "Leadership"],
      category: "Social Impact"
    },
    {
      title: "Professional Recognition & Achievement",
      description: "Receiving recognition and awards for outstanding performance and contributions. Consistently demonstrating excellence in academic and professional endeavors.",
      image: "/lovable-uploads/20b443da-f1f3-430c-b003-437ed3ea8013.png",
      tags: ["Achievement", "Recognition", "Excellence", "Professional Growth"],
      category: "Achievement"
    },
    {
      title: "Academic Excellence & Certification",
      description: "Achieving academic milestones and earning certifications that demonstrate commitment to continuous learning and professional development.",
      image: "/lovable-uploads/ca9525cf-8121-4d92-9ce2-eacc0d28b894.png",
      tags: ["Academic Excellence", "Certification", "Learning", "Development"],
      category: "Education"
    },
    {
      title: "Strategic Partnerships & Networking",
      description: "Building strategic relationships and partnerships with industry leaders and academic institutions. Fostering connections that drive mutual growth and collaboration.",
      image: "/lovable-uploads/13eceb2a-818b-4a30-ad29-1c13191fd1a4.png",
      tags: ["Strategic Partnerships", "Networking", "Collaboration", "Relationship Building"],
      category: "Networking"
    }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

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
                
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    <FileText className="mr-2" size={16} />
                    View on LinkedIn
                  </Button>
                </a>
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
                href={linkedInUrl} 
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
