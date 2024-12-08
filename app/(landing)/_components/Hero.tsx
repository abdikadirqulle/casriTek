import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-pattern min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary animate-fade-down">
            Empowering Businesses Through{" "}
            <span className="text-primary">Innovative Web Solutions</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-secondary/80 max-w-3xl mx-auto animate-fade-up">
            We craft cutting-edge web experiences that transform your digital presence and drive business growth.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-up">
            <Button size="lg" className="group">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;