import React, { useState } from 'react';
import { CloudSun, ChevronDown, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from './ScrollToTop';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const handleNavClick = () => {
    scrollToTop();
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
  };

  return (
      <nav className="sticky top-0 z-50 bg-purple-700 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
              <CloudSun className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">UWT Urban Design 2025 Capstone</span>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
              ) : (
                  <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                  to="/"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
                  onClick={handleNavClick}
              >
                Home
              </NavLink>
              <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
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
                      <div className="absolute top-full left-0 h-2 w-full" />
                      <div className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                        <NavLink
                            to="/projects/food-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                            onClick={handleNavClick}
                        >
                          Food Analysis
                        </NavLink>
                        <NavLink
                            to="/projects/transportation-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                            onClick={handleNavClick}
                        >
                          Transportation Analysis
                        </NavLink>
                        <NavLink
                            to="/projects/community-analysis"
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors ${isActive ? 'bg-purple-100' : ''}`
                            }
                            onClick={handleNavClick}
                        >
                          Community Connection Analysis
                        </NavLink>
                      </div>
                    </>
                )}
              </div>
              <NavLink
                  to="/events"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
                  onClick={handleNavClick}
              >
                Events
              </NavLink>
              {/*<NavLink*/}
              {/*    to="/about"*/}
              {/*    className={({ isActive }) =>*/}
              {/*        `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`*/}
              {/*    }*/}
              {/*    onClick={handleNavClick}*/}
              {/*>*/}
              {/*  About*/}
              {/*</NavLink>*/}
              <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                      `text-white transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                  }
                  onClick={handleNavClick}
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <div className="flex flex-col space-y-2">
                  <NavLink
                      to="/"
                      className={({ isActive }) =>
                          `text-white py-2 transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                      }
                      onClick={handleNavClick}
                  >
                    Home
                  </NavLink>
                  <div>
                    <button
                        onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                        className="flex items-center justify-between w-full text-white py-2 hover:text-purple-200 transition-colors"
                    >
                      <span>Projects</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProjectsOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          <NavLink
                              to="/projects/food-analysis"
                              className={({ isActive }) =>
                                  `block py-2 text-white hover:text-purple-200 transition-colors ${isActive ? 'text-purple-200 font-semibold' : ''}`
                              }
                              onClick={handleNavClick}
                          >
                            Food Analysis
                          </NavLink>
                          <NavLink
                              to="/projects/transportation-analysis"
                              className={({ isActive }) =>
                                  `block py-2 text-white hover:text-purple-200 transition-colors ${isActive ? 'text-purple-200 font-semibold' : ''}`
                              }
                              onClick={handleNavClick}
                          >
                            Transportation Analysis
                          </NavLink>
                          <NavLink
                              to="/projects/community-analysis"
                              className={({ isActive }) =>
                                  `block py-2 text-white hover:text-purple-200 transition-colors ${isActive ? 'text-purple-200 font-semibold' : ''}`
                              }
                              onClick={handleNavClick}
                          >
                            Community Connection Analysis
                          </NavLink>
                        </div>
                    )}
                  </div>
                  <NavLink
                      to="/events"
                      className={({ isActive }) =>
                          `text-white py-2 transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                      }
                      onClick={handleNavClick}
                  >
                    Events
                  </NavLink>
                  {/*<NavLink*/}
                  {/*    to="/about"*/}
                  {/*    className={({ isActive }) =>*/}
                  {/*        `text-white py-2 transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`*/}
                  {/*    }*/}
                  {/*    onClick={handleNavClick}*/}
                  {/*>*/}
                  {/*  About*/}
                  {/*</NavLink>*/}
                  <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                          `text-white py-2 transition-colors ${isActive ? 'text-purple-200 font-semibold' : 'hover:text-purple-200'}`
                      }
                      onClick={handleNavClick}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}