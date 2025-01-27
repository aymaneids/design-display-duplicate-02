import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "TV Enthusiast",
    quote: "EpiTracker has completely changed how I watch TV shows. I never lose track of where I left off anymore!",
    initials: "AJ",
    avatarColor: "bg-purple-500",
  },
  {
    name: "Sarah Lee",
    role: "Movie Buff",
    quote: "As someone who watches a lot of series, EpiTracker is a game-changer. It's so easy to use and keeps everything organized.",
    initials: "SL",
    avatarColor: "bg-pink-500",
  },
  {
    name: "Mike Brown",
    role: "Casual Viewer",
    quote: "I love how I can sync my watch history across all my devices. EpiTracker makes binge-watching so much more enjoyable!",
    initials: "MB",
    avatarColor: "bg-green-500",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what EpiTracker users have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className={`h-12 w-12 ${testimonial.avatarColor}`}>
                    <AvatarFallback className="text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-600 text-center italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};