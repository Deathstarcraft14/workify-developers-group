
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link to="/" className="flex items-center ml-2 md:ml-0">
              <img src="/lovable-uploads/791c5abf-a844-481a-b4b0-8248c6f77267.png" alt="Workify Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-workify-blue">Workify</span>
            </Link>
            
            <div className="hidden md:flex md:ml-6 space-x-8">
              <Link to="/" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Home
              </Link>
              <Link to="/applications" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Application
              </Link>
              <Link to="/messages" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Messages
              </Link>
              <Link to="/jobs" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Job opportunities
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-workify-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="ml-4 flex items-center md:ml-6">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-full" size="icon">
                      <span className="sr-only">Open user menu</span>
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="px-4 py-3">
                      <p className="text-sm">Signed in as</p>
                      <p className="text-sm font-medium truncate">{user?.fullName || user?.email.split('@')[0]}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/applications" className="w-full">
                        Applications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="w-full">
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-600 focus:text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex space-x-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-workify-blue hover:bg-blue-700">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/applications"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Application
            </Link>
            <Link 
              to="/messages"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Messages
            </Link>
            <Link 
              to="/jobs"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Job opportunities
            </Link>
          </div>
          
          {!isAuthenticated && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                </Button>
                <Button className="w-full bg-workify-blue hover:bg-blue-700" asChild>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
