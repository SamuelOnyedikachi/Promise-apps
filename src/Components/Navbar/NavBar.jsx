import React from 'react'
import Logo from '../../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

      return (
        <div className="sticky top-0 z-50 bg-[#2c2c2c73]">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-2">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={Logo}
                onClick={handleClick}
                alt="Logo"
                className="h-[50px] cursor-pointer"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm text-[#DAA71F] font-medium">
              <a href="/" className="hover:text-[#a30b0b] transition">
                Home
              </a>
              <a href="/About" className="hover:text-[#a30b0b] transition">
                About
              </a>
              <a href="/Service" className="hover:text-[#a30b0b] transition">
                Services
              </a>
              <a href="/Blog" className="hover:text-[#a30b0b] transition">
                Blog
              </a>
              <a href="/Contact" className="hover:text-[#a30b0b] transition">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      );
  }

  export default NavBar;

