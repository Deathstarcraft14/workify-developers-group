
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white border-b">
      <div className="flex items-center space-x-6">
        <div className="block lg:hidden">
          <button className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <Link to="/" className="text-xl font-bold text-gray-800">
          Home
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/application" className="flex items-center text-gray-800 hover:text-gray-600">
            Application <ChevronDown className="ml-1 h-4 w-4" />
          </Link>

          <Link to="/messages" className="text-gray-800 hover:text-gray-600">
            Messages
          </Link>

          <Link to="/jobs" className="text-gray-800 hover:text-gray-600">
            Job opportunities
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search"
            className="py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search className="h-5 w-5" />
          </button>
        </div>

        <Link to="/profile" className="flex items-center text-gray-800 hover:text-gray-600">
          <User className="h-6 w-6 mr-1" />
          <span className="hidden md:inline">User</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
