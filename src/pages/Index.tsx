
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, FileText, Folder, Github } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <div className="min-h-screen relative overflow-hidden" style={{
    backgroundImage: `url('/lovable-uploads/abe6b2fd-bef7-4a31-a41b-745aeac05b38.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-orange-200/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Tanvi Bokade
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-100/50 transition-colors text-gray-700">
                <User size={18} />
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-100/50 transition-colors text-gray-700">
                <Briefcase size={18} />
                Portfolio
              </button>
              <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <FileText size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative flex flex-col items-center mb-8">
            <div className="mb-8">
              <img src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" alt="Tanvi Bokade" className="w-48 h-48 rounded-full object-cover border-4 border-pink-400 shadow-2xl" />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-pink-700 to-blue-800 bg-clip-text text-transparent leading-tight">
              Tanvi Bokade
            </h1>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-zinc-800 font-medium">
            Creative professional passionate about building innovative solutions and bringing ideas to life. 
            I transform concepts into reality through strategic thinking, creative problem-solving, and collaborative teamwork.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-pink-600 text-white hover:bg-pink-700">Innovation</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-600 text-white hover:bg-purple-700">Creative Solutions</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">Leadership</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-600 text-white hover:bg-green-700">Strategic Thinking</Badge>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 font-bold">
                <Github className="mr-2" size={20} />
                View My Work
              </Button>
            </a>
            <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold">
              <User className="mr-2" size={20} />
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm text-gray-800 py-12 border-t border-purple-200/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Let's Build Something Extraordinary Together</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to collaborate on your next big idea? I'm always excited to work with passionate teams 
            and individuals who want to create meaningful impact through innovative solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:tanvi.bokade@gmail.com" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-colors font-bold text-white">
              Start a Conversation
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-gray-500 text-sm">
            © 2024 Tanvi Bokade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
