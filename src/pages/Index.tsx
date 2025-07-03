
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Calendar, ExternalLink, Github, Linkedin } from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tanvi Bokade
            </div>
            <div className="flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </button>
              <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <Badge className="px-4 py-2 bg-blue-100 text-blue-700 font-medium">
                  Computer Science Engineering Student
                </Badge>
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tanvi
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Creative professional passionate about building innovative solutions and bringing ideas to life through technology, leadership, and social impact.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <Badge className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                  Machine Learning
                </Badge>
                <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                  Leadership
                </Badge>
                <Badge className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0">
                  Social Service
                </Badge>
                <Badge className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                  Innovation
                </Badge>
              </div>
              
              <div className="flex gap-4">
                <a href="mailto:tanvi.bokade@gmail.com">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Mail className="mr-2" size={18} />
                    Get In Touch
                  </Button>
                </a>
                <Button 
                  onClick={() => scrollToSection('portfolio')} 
                  variant="outline" 
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-2xl transform rotate-6"></div>
                <img 
                  src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
                  alt="Tanvi Bokade" 
                  className="relative w-96 h-96 rounded-3xl object-cover shadow-2xl border-4 border-white" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
                Building the Future Through Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                I'm a passionate Computer Science Engineering student at MIT Art, Design and Technology University, 
                dedicated to creating meaningful impact through technology. My journey spans from developing 
                accessibility solutions like sign language translators to building safety systems for women.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a leader and collaborator, I've founded Java Brewers, served as NSS Secretary, and worked 
                across multiple technical communities. I believe in the power of technology to solve real-world 
                problems and create inclusive solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  MIT ADT University, Pune
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                  Expected Graduation: 2025
                </div>
                <div className="flex items-center text-gray-700">
                  <User className="w-5 h-5 mr-3 text-pink-600" />
                  CGPA: 8.97
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next big idea? I'm always excited to work with passionate teams 
            and individuals who want to create meaningful impact through innovative solutions.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:tanvi.bokade@gmail.com">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="mr-2" size={18} />
                Start a Conversation
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-8 py-3 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
                <Linkedin className="mr-2" size={18} />
                LinkedIn Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Tanvi Bokade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
