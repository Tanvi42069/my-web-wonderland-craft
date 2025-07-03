import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, Calendar, MapPin } from "lucide-react";

const SocialServiceSection = () => {
  const nssActivities = [
    {
      title: "Gadh Samvardhan and Swaccata Mohim at Singhad Fort",
      description: "Heritage conservation and cleanliness drive at historic Singhad Fort",
      impact: "Fort Restoration",
      date: "2024",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_nss-communityservice-gadhsamvardan-activity-7312807563408949250-a3tK",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Water Hyacinth Collection & River Cleaning Drive",
      description: "Environmental conservation initiative to clean and preserve river ecosystem",
      impact: "River Cleanup",
      date: "2024",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_earthday2024-nss-mitadtuniversity-activity-7313732385957732352-yHg5",
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Donation Drive",
      description: "Community service initiative to collect donations for underprivileged communities",
      impact: "Community Support",
      date: "2024",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_donationdrive-aces-communityservice-activity-7316287788738318336-R-PV",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Voter Awareness Drive",
      description: "Electoral literacy campaign to promote democratic participation and voter awareness",
      impact: "Electoral Awareness",
      date: "2024",
      link: "https://www.linkedin.com/posts/tanvi-bokade-3817681b0_nss-electoralliteracy-voteforindia-activity-7316288661585600512-LZ4V",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="social-service" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-gray-800">
            Social Service & Community Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Giving back to the community through meaningful initiatives and social responsibility projects.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-light text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            NSS Volunteering
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nssActivities.map((activity, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 cursor-pointer"
                onClick={() => window.open(activity.link, '_blank')}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${activity.color} flex items-center justify-center flex-shrink-0`}>
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                      {activity.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-800 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {activity.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        NSS - MIT ADT
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-red-50 to-pink-50">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Committed to creating positive change through volunteer work and community engagement initiatives.
              </p>
              <Badge className="bg-red-100 text-red-700">
                Active NSS Volunteer
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceSection;