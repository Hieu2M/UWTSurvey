import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [splineError, setSplineError] = useState(false);

  const handleSplineError = (error: Error) => {
    console.error('Spline error:', error);
    setSplineError(true);
  };

  return (
    <div className="relative h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/UWTCrowd.jpg" 
          alt="UW Tacoma Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 flex items-center h-[calc(100vh-5rem)]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Reimagining UW Tacoma's Future Together
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              We're a team of senior Urban Design students working to create a new master plan 
              that reflects your campus experience. Your voice matters in shaping UWT's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <a 
                href="https://forms.gle/UgqV66KyFrhX282X8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center group"
              >
                Share Your Experience
                <MessageCircle className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="#project" 
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center group"
              >
                Learn More
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}