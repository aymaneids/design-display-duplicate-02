import { Check, Smartphone, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Check,
      title: "Mark Episodes/Seasons",
      description: "Easily keep track of which episodes and seasons you've watched.",
    },
    {
      icon: Smartphone,
      title: "Cross-Device Sync",
      description: "Access your watch history from any device, anytime.",
    },
    {
      icon: History,
      title: "Personal Watch History",
      description: "View your complete watching journey in one place.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Features You'll Love</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            EpiTracker comes packed with powerful features to enhance your TV show and movie watching experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <feature.icon size={36} className="text-black" />
                </div>
                <CardTitle className="text-xl font-semibold text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};