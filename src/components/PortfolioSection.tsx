
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Public Speaking",
      description: "Led engaging presentations and delivered compelling speeches to diverse audiences. Developed strong communication skills through participation in conferences, workshops, and public forums, effectively conveying complex ideas with clarity and confidence.",
      image: "/lovable-uploads/fd5de28a-cc60-490c-9d30-577af53d49cd.png",
      tags: ["Communication", "Presentation", "Leadership", "Confidence"],
      category: "Speaking"
    },
    {
      title: "Networking",
      description: "Built and maintained professional relationships across various industries and sectors. Successfully established meaningful connections that fostered collaboration, knowledge sharing, and mutual growth opportunities within professional communities.",
      image: "/lovable-uploads/a0c1cc61-6250-4a1e-8560-a5b826d7928c.png",
      tags: ["Professional Relations", "Community Building", "Collaboration", "Growth"],
      category: "Professional"
    },
    {
      title: "Academic Acclamation",
      description: "Achieved recognition for academic excellence and scholarly contributions. Demonstrated consistent high performance in educational pursuits while contributing to research initiatives and maintaining exceptional academic standards throughout academic career.",
      image: "/lovable-uploads/83597ca6-981d-49db-86d6-6d106e5c2e43.png",
      tags: ["Academic Excellence", "Research", "Scholarship", "Achievement"],
      category: "Academic"
    },
    {
      title: "Social Service",
      description: "Actively participated in community service initiatives and social impact projects. Contributed time and skills to various causes, demonstrating commitment to social responsibility and making positive contributions to community welfare and development.",
      image: "/lovable-uploads/20b443da-f1f3-430c-b003-437ed3ea8013.png",
      tags: ["Community Service", "Social Impact", "Volunteering", "Social Responsibility"],
      category: "Service"
    },
    {
      title: "Team Work and Collaboration",
      description: "Successfully collaborated with diverse teams to achieve common goals and deliver exceptional results. Demonstrated strong interpersonal skills, adaptability, and the ability to work effectively in both leadership and supportive roles within team environments.",
      image: "/lovable-uploads/ca9525cf-8121-4d92-9ce2-eacc0d28b894.png",
      tags: ["Teamwork", "Collaboration", "Leadership", "Interpersonal Skills"],
      category: "Collaboration"
    },
    {
      title: "Communication & Presentation",
      description: "Developed and delivered compelling presentations and communications to diverse audiences. Created engaging content and facilitated workshops that effectively conveyed complex information and drove engagement across various professional settings.",
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
            Showcasing a diverse range of experiences and achievements that demonstrate my commitment to 
            professional growth, community engagement, and collaborative excellence across various domains.
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
