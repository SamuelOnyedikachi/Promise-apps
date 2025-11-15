import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => navigate('/');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking a link
  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Service', label: 'Services' },
    { path: '/Blog', label: 'Blog' },
    { path: '/Contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#2c2c2c] backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              onClick={handleClick}
              alt="Get Result Agency Logo"
              className="h-12 sm:h-14 md:h-16 cursor-pointer transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className="text-[#DAA71F] hover:text-white px-4 text-[14px] xl:text-[14px] font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('/SignUp')}
              className="bg-[#DAA71F] hover:bg-[#aa0b0b] text-white px-6 py-2 rounded-lg text-[14px] font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#DAA71F] hover:text-white p-2 rounded-lg focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-[#1a1a1a] border-t border-white/10 px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.path)}
                  className="text-[#DAA71F] hover:text-white text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('/SignUp')}
                  className="w-full bg-[#DAA71F] hover:bg-[#b88a1a] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;