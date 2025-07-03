import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Brain, Shield, Music, FileText } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Netflix Discoverability Case Study",
      description: "Comprehensive product case study analyzing Netflix's content discoverability challenges and proposing user-centric solutions.",
      icon: <FileText className="w-8 h-8" />,
      link: "https://github.com/Tanvi42069/Product-Case-Study-Netflix-Discoverability-Issue",
      tags: ["Product Management", "UX Research", "Data Analysis"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Sign Language Model to Control Volume",
      description: "AI-powered system that recognizes sign language gestures to control computer volume, enhancing accessibility.",
      icon: <Brain className="w-8 h-8" />,
      link: "https://github.com/Tanvi42069/Sign-Language-Model-to-Control-System-Volume",
      tags: ["Machine Learning", "Computer Vision", "Python"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Sign Language to Text Translator",
      description: "Machine learning application that translates sign language into text, bridging communication gaps.",
      icon: <Code className="w-8 h-8" />,
      link: "https://github.com/Tanvi42069/Sign-Language-Translator",
      tags: ["Deep Learning", "OpenCV", "TensorFlow"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Fraud Detection System",
      description: "Advanced fraud detection system using machine learning algorithms to identify fraudulent transactions.",
      icon: <Shield className="w-8 h-8" />,
      link: "https://github.com/Tanvi42069/Fraud-Detection",
      tags: ["Machine Learning", "Data Science", "Python"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-Time Women Safety Monitoring",
      description: "Research paper documenting a comprehensive real-time monitoring system for women's safety.",
      icon: <Shield className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1I9KDq2Fb49kz7_em_F-TWl73auOmayqu/view",
      tags: ["Research", "System Design", "Safety Technology"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Spotify Personalized Playlist Analysis",
      description: "Product teardown analyzing Spotify's personalized playlist feature and user experience design.",
      icon: <Music className="w-8 h-8" />,
      link: "https://github.com/Tanvi42069/Product-Teardown-Spotify-Personalized-Playlist",
      tags: ["Product Analysis", "UX Research", "Product Strategy"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-gray-800">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing innovation in machine learning, product analysis, and social impact technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-3 cursor-pointer overflow-hidden"
              onClick={() => window.open(project.link, '_blank')}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">
                    Click to explore
                  </span>
                  <div className="flex gap-2">
                    {project.link.includes('github.com') ? (
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Tanvi42069?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;