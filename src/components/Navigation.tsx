import React, { useState } from 'react';
import { School, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <nav className="sticky top-0 z-50 bg-purple-700 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-2">
              <School className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">UWT Urban Design</span>
            </NavLink>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                  to="/"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
              >
                Home
              </NavLink>
              <div className="relative"
                   onMouseOver={() => setIsDropdownOpen(true)}
                   onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                    className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors focus:outline-none py-2"
                >
                  <span>Projects</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                    <>
                      <div className="absolute top-full left-0 h-2 w-full"/>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                        <NavLink
                            to="/projects/food-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                        >
                          Food Analysis
                        </NavLink>
                        <NavLink
                            to="/projects/transportation-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                        >
                          Transportation Analysis
                        </NavLink>
                        <NavLink
                            to="/projects/community-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                        >
                          Community Connection Analysis
                        </NavLink>
                      </div>
                    </>
                )}
              </div>
              <NavLink
                  to="/about"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
              >
                About
              </NavLink>
              <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
  );
}