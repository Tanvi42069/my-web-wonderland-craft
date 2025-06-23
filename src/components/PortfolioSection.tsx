
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Strategic Planning & Research",
      description: "Led comprehensive research initiatives and strategic planning processes. Developed innovative approaches to complex challenges and delivered actionable insights that drove significant organizational improvements.",
      image: "/lovable-uploads/fd5de28a-cc60-490c-9d30-577af53d49cd.png",
      tags: ["Research", "Strategy", "Analysis", "Planning"],
      category: "Strategy"
    },
    {
      title: "Team Leadership & Collaboration",
      description: "Successfully managed diverse teams and facilitated cross-functional collaboration. Implemented effective communication strategies and mentorship programs that enhanced team performance and project outcomes.",
      image: "/lovable-uploads/a0c1cc61-6250-4a1e-8560-a5b826d7928c.png",
      tags: ["Leadership", "Teamwork", "Communication", "Mentorship"],
      category: "Leadership"
    },
    {
      title: "Innovation & Creative Solutions",
      description: "Developed innovative solutions to complex problems through creative thinking and systematic approach. Implemented new processes and methodologies that improved efficiency and effectiveness across multiple projects.",
      image: "/lovable-uploads/83597ca6-981d-49db-86d6-6d106e5c2e43.png",
      tags: ["Innovation", "Problem Solving", "Creativity", "Process Improvement"],
      category: "Innovation"
    },
    {
      title: "Data Analysis & Insights",
      description: "Conducted in-depth data analysis and generated meaningful insights to support decision-making processes. Created comprehensive reports and presentations that influenced strategic directions and operational improvements.",
      image: "/lovable-uploads/20b443da-f1f3-430c-b003-437ed3ea8013.png",
      tags: ["Data Analysis", "Insights", "Reporting", "Decision Support"],
      category: "Analytics"
    },
    {
      title: "Project Management & Execution",
      description: "Successfully managed multiple complex projects from conception to completion. Coordinated resources, timelines, and stakeholders to deliver high-quality results within scope and budget constraints.",
      image: "/lovable-uploads/ca9525cf-8121-4d92-9ce2-eacc0d28b894.png",
      tags: ["Project Management", "Execution", "Coordination", "Quality Assurance"],
      category: "Management"
    },
    {
      title: "Communication & Presentation",
      description: "Developed and delivered compelling presentations and communications to diverse audiences. Created engaging content and facilitated workshops that effectively conveyed complex information and drove engagement.",
      image: "/lovable-uploads/13eceb2a-818b-4a30-ad29-1c13191fd1a4.png",
      tags: ["Communication", "Presentation", "Content Creation", "Facilitation"],
      category: "Communication"
    }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing a diverse range of projects and achievements that demonstrate my ability to deliver 
            innovative solutions, lead effective teams, and drive meaningful results across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-950/30 to-gray-900/50 backdrop-blur-sm border border-red-500/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white font-bold">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-red-600/70 text-white hover:bg-red-500 transition-colors font-semibold"
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
                    className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 border-red-500 text-red-400 font-bold"
                  >
                    <FileText className="mr-2" size={16} />
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 max-w-2xl mx-auto shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Ready to Collaborate?</CardTitle>
              <CardDescription className="text-red-100">
                I'm passionate about taking on new challenges and creating impactful solutions.
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
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg"
                >
                  <Briefcase className="mr-2" size={20} />
                  Let's Work Together
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

