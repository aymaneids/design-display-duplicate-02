import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">
          Track Every Episode You Watch
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-slow">
          Never forget where you left off - for TV shows, movies, and series
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-lg">
            Start Tracking Now (Free)
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};