import React from 'react';
import { School } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">UWT Urban Design</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#team" className="hover:text-purple-300 transition">Our Team</a>
            <a href="#project" className="hover:text-purple-300 transition">The Project</a>
            <a href="#feedback" className="hover:text-purple-300 transition">Share Feedback</a>
          </div>
        </div>
      </div>
    </nav>
  );
}