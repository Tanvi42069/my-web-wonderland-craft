
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Code, Palette, Users, MessageSquare, BookOpen, Heart, Handshake, Lightbulb } from "lucide-react";

const PortfolioSection = () => {
  const experiences = [
    {
      title: "Public Speaking",
      description: "Led engaging presentations and delivered compelling speeches to diverse audiences. Developed strong communication skills through participation in conferences, workshops, and public forums.",
      image: "/lovable-uploads/fd5de28a-cc60-490c-9d30-577af53d49cd.png",
      tags: ["Communication", "Presentation", "Leadership"],
      category: "Speaking",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Teamwork and Collaboration",
      description: "Built and maintained professional relationships across various industries and sectors. Successfully established meaningful connections that fostered collaboration and growth.",
      image: "/lovable-uploads/a0c1cc61-6250-4a1e-8560-a5b826d7928c.png",
      tags: ["Professional Relations", "Community Building", "Growth"],
      category: "Professional",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Academic Acclamation",
      description: "Achieved recognition for academic excellence and scholarly contributions. Demonstrated consistent high performance while contributing to research initiatives.",
      image: "/lovable-uploads/83597ca6-981d-49db-86d6-6d106e5c2e43.png",
      tags: ["Academic Excellence", "Research", "Achievement"],
      category: "Academic",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Social Service",
      description: "Actively participated in community service initiatives and social impact projects. Contributed time and skills to various causes for community welfare.",
      image: "/lovable-uploads/20b443da-f1f3-430c-b003-437ed3ea8013.png",
      tags: ["Community Service", "Social Impact", "Volunteering"],
      category: "Service",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: "Innovation Hub Platform",
      description: "A collaborative platform designed to connect innovators and foster creative problem-solving across different industries.",
      image: "/lovable-uploads/13eceb2a-818b-4a30-ad29-1c13191fd1a4.png",
      tags: ["Innovation", "Collaboration", "Platform Design"],
      category: "Project",
      icon: <Lightbulb className="w-6 h-6" />,
      status: "Featured"
    },
    {
      title: "Community Engagement App",
      description: "Mobile application focused on building stronger community connections through local events and volunteer opportunities.",
      image: "/lovable-uploads/2125cfe2-857a-4e54-9dd9-5a40ae401762.png",
      tags: ["Mobile App", "Community", "Social Impact"],
      category: "Project",
      icon: <Users className="w-6 h-6" />,
      status: "In Development"
    },
    {
      title: "Creative Portfolio System",
      description: "A comprehensive portfolio management system for creative professionals to showcase their work and connect with clients.",
      image: "/lovable-uploads/36a01f04-22cf-4253-a498-df6bf818ad95.png",
      tags: ["Portfolio", "Creative", "Web Development"],
      category: "Project",
      icon: <Palette className="w-6 h-6" />,
      status: "Concept"
    }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/tanvi-bokade-3817681b0";

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-white via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-orange-700 bg-clip-text text-transparent">
            Portfolio & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A showcase of experiences, achievements, and innovative projects that demonstrate 
            commitment to excellence and collaborative impact.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Code className="w-6 h-6 text-orange-600" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white backdrop-blur-sm border border-orange-200/50 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white font-bold">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 text-white">
                    {project.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-red-600" />
            Professional Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white backdrop-blur-sm border border-red-200/50 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white font-bold">
                      {experience.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 text-white">
                    {experience.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {experience.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-red-100 text-red-700 hover:bg-red-200 transition-colors font-semibold"
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
                      className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 border-red-400 text-red-600 font-bold text-sm"
                    >
                      <FileText className="mr-2" size={14} />
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
