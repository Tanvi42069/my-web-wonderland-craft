import { Heart, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light mb-4">Let's Create Something Amazing Together</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on innovative projects? I'm always excited to work with passionate teams 
            and individuals who want to create meaningful impact through technology and creativity.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:tanvi.bokade@gmail.com" 
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Tanvi42069" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="mailto:tanvi.bokade@gmail.com"
            className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Tanvi Bokade © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;