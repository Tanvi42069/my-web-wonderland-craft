
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Trophy, 
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  BookOpen,
  Github
} from "lucide-react";

const PortfolioSection = () => {
  const projects = [
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
    },
    {
      title: "Additional Project Documentation",
      company: "Portfolio",
      period: "2023-2024",
      location: "Various",
      description: "Comprehensive documentation and portfolio showcasing various technical projects and implementations.",
      skills: ["Documentation", "Project Management", "Technical Writing"],
      link: "https://drive.google.com/file/d/1I9KDq2Fb49kz7_em_F-TWl73auOmayqu/view"
    }
  ];

  const education = [
    {
      institution: "MIT Art, Design and Technology University, Pune",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      score: "CGPA: 8.97",
      period: "2021 - 2025"
    },
    {
      institution: "Pace Junior College, Mumbai",
      degree: "HSC – Science and Mathematics",
      score: "Percentage: 74.67%",
      period: "2019 - 2021"
    },
    {
      institution: "Lokhandwala Foundation School, Mumbai",
      degree: "ICSE",
      score: "Percentage: 97.67%",
      period: "2019"
    }
  ];

  const awards = [
    {
      title: "Outstanding Orator - PERSONA 2025",
      organization: "MIT ADT University",
      year: "2025",
      description: "Recognized for exceptional oratory skills and communication excellence",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_mitadt-persona2025-outstandingorator-activity-7316292197975232512-pB_t?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE78hEBujZ2nX25WAjGp6sI2acFsZJ4YZA"
    }
  ];

  const nssActivities = [
    {
      title: "Gadh Samvardhan and Swaccata Mohim at Singhad Fort",
      organization: "NSS - MIT ADT University",
      period: "2024",
      description: "Heritage conservation and cleanliness drive at historic Singhad Fort",
      impact: "Fort restoration",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_nss-communityservice-gadhsamvardan-activity-7312807563408949250-a3tK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE78hEBujZ2nX25WAjGp6sI2acFsZJ4YZA"
    },
    {
      title: "Water Hyacinth Collection Drive and Mula-Mutha River Cleaning Drive",
      organization: "NSS - MIT ADT University",
      period: "2024",
      description: "Environmental conservation initiative to clean and preserve river ecosystem",
      impact: "River cleanup",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_earthday2024-nss-mitadtuniversity-activity-7313732385957732352-yHg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE78hEBujZ2nX25WAjGp6sI2acFsZJ4YZA"
    },
    {
      title: "Donation Drive",
      organization: "ACES - MIT ADT University",
      period: "2024",
      description: "Community service initiative to collect donations for underprivileged communities",
      impact: "Community support",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_donationdrive-aces-communityservice-activity-7316287788738318336-R-PV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE78hEBujZ2nX25WAjGp6sI2acFsZJ4YZA"
    },
    {
      title: "Voter Awareness Drive",
      organization: "NSS - MIT ADT University",
      period: "2024",
      description: "Electoral literacy campaign to promote democratic participation and voter awareness",
      impact: "Electoral awareness",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_nss-electoralliteracy-voteforindia-activity-7316288661585600512-LZ4V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE78hEBujZ2nX25WAjGp6sI2acFsZJ4YZA"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            Portfolio & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* 1. Academics and Education */}
        <div className="mb-16">
          <Card className="border-0 bg-white/90 shadow-lg border border-blue-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Academics and Education
              </CardTitle>
              <CardDescription className="text-gray-600">
                Academic journey and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-blue-100 text-blue-700 text-xs font-semibold">
                      {edu.score}
                    </Badge>
                  </div>
                </div>
              ))}

              {/* Certifications Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Certifications
                  </h3>
                  <a 
                    href="https://www.linkedin.com/in/tanvi-bokade-3817681b0/details/certifications/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on LinkedIn
                  </a>
                </div>
                <p className="text-gray-600 text-sm">
                  Multiple professional certifications in technology and leadership. Click the link above to view all certifications.
                </p>
              </div>

              {/* Awards Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Awards
                </h3>
                {awards.map((award, index) => (
                  <div key={index} className="border border-yellow-100 rounded-lg p-4 bg-yellow-50/50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-600" />
                        <h4 className="font-semibold text-gray-800">{award.title}</h4>
                      </div>
                      <span className="text-sm text-gray-500">{award.year}</span>
                    </div>
                    <p className="text-yellow-700 font-medium text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-600 text-sm mb-2">{award.description}</p>
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Post
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 2. Projects */}
        <div className="mb-16">
          <Card className="border-0 bg-white/90 shadow-lg border border-purple-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <FolderOpen className="w-6 h-6 text-purple-600" />
                Projects
              </CardTitle>
              <CardDescription className="text-gray-600">
                Building impactful solutions through innovation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{project.title}</h3>
                      <p className="text-purple-600 font-medium">{project.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-purple-100 text-purple-700 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    {project.link.includes('github.com') ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    {project.link.includes('github.com') ? 'View on GitHub' : 'View Project'}
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 3. Team Leadership and Collaboration */}
        <div className="mb-16">
          <Card className="border-0 bg-white/90 shadow-lg border border-pink-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-pink-600" />
                Team Leadership and Collaboration
              </CardTitle>
              <CardDescription className="text-gray-600">
                Building connections and fostering growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Tanvi Bokade is a dynamic student leader known for her strong collaboration, leadership, and communication skills. As the Founding Member and Event Lead of JAVA BREWERS and NSS Secretary of MIT IMPACT, she has led impactful initiatives and events. Her cross-functional work with Geeks for Geeks, ACES, and the Cyber Security & Blockchain Club showcases her versatility. Tanvi has also represented MIT ADT at the 38th West Zone Youth Festival, anchored major events, and created viral digital content, reflecting her commitment to community, creativity, and teamwork.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">10+</div>
                  <div className="text-sm text-gray-600">Projects Led</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700 text-sm">Cross-functional team leadership</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 text-sm">Mentoring & Team Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 text-sm">Conflict Resolution</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Social Service */}
        <div className="mb-16">
          <Card className="border-0 bg-white/90 shadow-lg border border-green-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Social Service
              </CardTitle>
              <CardDescription className="text-gray-600">
                Giving back to the community through knowledge sharing and social initiatives
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* NSS Volunteering */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  NSS Volunteering
                </h3>
                <div className="space-y-4">
                  {nssActivities.map((activity, index) => (
                    <div key={index} className="border border-green-100 rounded-lg p-4 bg-green-50/50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                        <Badge className="bg-green-100 text-green-700 text-xs">{activity.impact}</Badge>
                      </div>
                      <p className="text-green-700 font-medium text-sm mb-2">{activity.organization}</p>
                      <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {activity.period}
                        </div>
                        <a 
                          href={activity.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Post
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
