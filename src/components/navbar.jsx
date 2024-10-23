import { useState } from 'react';
import MyDropdown from './additional_comps/profile_dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="relative flex justify-between items-center p-4">
        {/* Logo on the left */}
        <div className="text-pColor font-bold text-4xl transition duration-300 transform hover:text-sColor hover:scale-110">Profin<></></div>

        {/* Profile and Notification always visible */}
        <div className="flex items-center space-x-4">
          <div className="antialiased hover:subpixel-antialiased text-black font-bold"><MyDropdown/></div>

          {/* Menu button for smaller screens */}
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-black font-bold">
              Menu
            </button>
          </div>
        </div>

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
          <a href="#home" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Home</a>
          <a href="#dashboard" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Dashboard</a>
          <a href="#about" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">About</a>
          <a href="#support" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Support</a>
          <a href="#contact" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Contact Us</a>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-2 p-4">
          <li><a href="#home" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Home</a></li>
          <li><a href="#dashboard" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Dashboard</a></li>
          <li><a href="#about" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">About</a></li>
          <li><a href="#support" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Support</a></li>
          <li><a href="#contact" className="text-black font-bold transition duration-300 transform hover:text-green-500 hover:scale-110">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
