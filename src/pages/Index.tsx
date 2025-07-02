
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, FileText, Folder, Github, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: "SOFTWARE SYSTEM TO PERFORM REAL TIME ANALYSIS FOR WOMEN'S SAFETY",
      company: "Academic Project",
      period: "2024",
      location: "University",
      description: "Real-time analysis software system designed to enhance women's safety through intelligent monitoring, threat detection, and emergency response mechanisms.",
      skills: ["Real-time Analytics", "Safety Systems", "Machine Learning", "Emergency Response"]
    },
    {
      title: "Netflix Discoverability Issue - Product Case Study",
      company: "Personal Project",
      period: "2024",
      location: "Remote",
      description: "Comprehensive product case study analyzing Netflix's content discoverability challenges and proposing user-centric solutions.",
      skills: ["Product Management", "UX Research", "Data Analysis"],
      link: "https://github.com/Tanvi42069/Product-Case-Study-Netflix-Discoverability-Issue"
    },
    {
      title: "Sign Language Model to Control System Volume",
      company: "Academic Project",
      period: "2024",
      location: "University",
      description: "AI-powered system that recognizes sign language gestures to control computer volume, enhancing accessibility for the hearing-impaired community.",
      skills: ["Machine Learning", "Computer Vision", "Python"],
      link: "https://github.com/Tanvi42069/Sign-Language-Model-to-Control-System-Volume"
    },
    {
      title: "Sign Language Translator",
      company: "Personal Project",
      period: "2024",
      location: "Remote",
      description: "Machine learning application that translates sign language into text, bridging communication gaps and promoting inclusivity.",
      skills: ["Deep Learning", "OpenCV", "TensorFlow"],
      link: "https://github.com/Tanvi42069/Sign-Language-Translator"
    },
    {
      title: "Fraud Detection System",
      company: "Academic Project",
      period: "2023",
      location: "University",
      description: "Advanced fraud detection system using machine learning algorithms to identify and prevent fraudulent transactions in real-time.",
      skills: ["Machine Learning", "Data Science", "Python"],
      link: "https://github.com/Tanvi42069/Fraud-Detection"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Tanvi Bokade
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </button>
              <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Tanvi Bokade
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creative professional passionate about building innovative solutions and bringing ideas to life. 
                I transform concepts into reality through strategic thinking, creative problem-solving, and collaborative teamwork.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="px-3 py-1 bg-blue-100 text-blue-800">Innovation</Badge>
                <Badge className="px-3 py-1 bg-purple-100 text-purple-800">Creative Solutions</Badge>
                <Badge className="px-3 py-1 bg-green-100 text-green-800">Leadership</Badge>
                <Badge className="px-3 py-1 bg-pink-100 text-pink-800">Strategic Thinking</Badge>
              </div>
              
              <div className="flex gap-4">
                <a href="mailto:tanvi.bokade@gmail.com">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                    <Mail className="mr-2" size={18} />
                    Get In Touch
                  </Button>
                </a>
                <Button onClick={() => scrollToSection('projects')} variant="outline" className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Folder className="mr-2" size={18} />
                  View My Work
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
                  alt="Tanvi Bokade" 
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl" 
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Building the Future Through Innovation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Computer Science Engineering student at MIT Art, Design and Technology University, 
                dedicated to creating meaningful impact through technology. My journey spans from developing 
                accessibility solutions like sign language translators to building safety systems for women.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a leader and collaborator, I've founded Java Brewers, served as NSS Secretary, and worked 
                across multiple technical communities. I believe in the power of technology to solve real-world 
                problems and create inclusive solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  MIT ADT University, Pune
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  Expected Graduation: 2025
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-5 h-5 mr-3 text-gray-400" />
                  CGPA: 8.97
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Skills & Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Technical</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Data Science</li>
                    <li>Python</li>
                    <li>Real-time Systems</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Leadership</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Team Management</li>
                    <li>Project Leadership</li>
                    <li>Community Building</li>
                    <li>Event Planning</li>
                    <li>Public Speaking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{project.period}</span>
                    <span>{project.location}</span>
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next big idea? I'm always excited to work with passionate teams 
            and individuals who want to create meaningful impact through innovative solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:tanvi.bokade@gmail.com">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                <Mail className="mr-2" size={18} />
                Start a Conversation
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                <FileText className="mr-2" size={18} />
                LinkedIn Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Tanvi Bokade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
