
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Product Strategy & Market Research",
      description: "Led comprehensive market analysis and competitive research to identify product opportunities. Developed go-to-market strategies and conducted user interviews to validate product-market fit and inform product roadmap decisions.",
      image: "/lovable-uploads/fd5de28a-cc60-490c-9d30-577af53d49cd.png",
      tags: ["Market Research", "Product Strategy", "Competitive Analysis", "User Interviews"],
      category: "Strategy"
    },
    {
      title: "Cross-Functional Team Leadership",
      description: "Managed cross-functional product teams including engineering, design, and marketing. Facilitated agile ceremonies, sprint planning, and stakeholder alignment to deliver product features on time and within scope.",
      image: "/lovable-uploads/a0c1cc61-6250-4a1e-8560-a5b826d7928c.png",
      tags: ["Team Leadership", "Agile/Scrum", "Stakeholder Management", "Product Delivery"],
      category: "Leadership"
    },
    {
      title: "User Research & Product Discovery",
      description: "Conducted extensive user research including surveys, usability testing, and customer interviews. Synthesized insights to inform product requirements and improve user experience across multiple product touchpoints.",
      image: "/lovable-uploads/83597ca6-981d-49db-86d6-6d106e5c2e43.png",
      tags: ["User Research", "Product Discovery", "Usability Testing", "Customer Insights"],
      category: "Research"
    },
    {
      title: "Product Analytics & KPI Optimization",
      description: "Implemented product analytics frameworks and established key performance indicators. Used data analysis to track product performance, identify improvement opportunities, and drive product optimization initiatives.",
      image: "/lovable-uploads/20b443da-f1f3-430c-b003-437ed3ea8013.png",
      tags: ["Product Analytics", "KPI Tracking", "Data Analysis", "Performance Optimization"],
      category: "Analytics"
    },
    {
      title: "Product Roadmap & Feature Planning",
      description: "Developed comprehensive product roadmaps aligned with business objectives. Prioritized features using frameworks like RICE scoring, managed product backlogs, and communicated product vision to stakeholders.",
      image: "/lovable-uploads/ca9525cf-8121-4d92-9ce2-eacc0d28b894.png",
      tags: ["Product Roadmap", "Feature Prioritization", "Backlog Management", "Strategic Planning"],
      category: "Planning"
    },
    {
      title: "Product Launch & Go-to-Market",
      description: "Orchestrated successful product launches by coordinating with marketing, sales, and customer success teams. Developed launch strategies, created product documentation, and measured launch success metrics.",
      image: "/lovable-uploads/13eceb2a-818b-4a30-ad29-1c13191fd1a4.png",
      tags: ["Product Launch", "Go-to-Market", "Launch Strategy", "Cross-team Coordination"],
      category: "Launch"
    }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
            Product Management Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrating end-to-end product management expertise from strategy and research 
            to execution and launch, with a focus on user-centric solutions and data-driven decisions.
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
                    View Case Study
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Build Great Products Together?</CardTitle>
              <CardDescription className="text-blue-100">
                I'm passionate about creating products that solve real user problems and drive business growth.
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
                  Let's Discuss Product Opportunities
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
