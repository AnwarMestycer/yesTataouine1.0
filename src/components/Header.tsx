import React from 'react';
import { Link } from 'react-router-dom';
import YVlogo from "../youth-vision-logo.png";

const Header: React.FC = () => {
  return (
    <header className=" text-white p-4">
      <nav className="flex justify-between items-center gap-[25rem]">
        <div className="flex items-center">
          <img src={YVlogo} alt="Youth Vision Logo" className="h-20" />
        </div>

        <div className='flex gap-6'>
          <Link to="/" className="hover:text-blue-300 transition-colors duration-300">Home</Link>
          <Link to="/mission" className="hover:text-blue-300 transition-colors duration-300">Mission & Vision</Link>
          <Link to="/festival" className="hover:text-blue-300 transition-colors duration-300">Festival de Robotique</Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors duration-300">About Us</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors duration-300">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
