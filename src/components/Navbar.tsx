
import React, { useEffect, useState } from 'react';
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

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(userData.isLoggedIn);
      setUserName(userData.fullName || userData.email.split('@')[0]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
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
              <div className="bg-workify-blue bg-opacity-10 rounded-full p-1">
                <div className="bg-workify-blue bg-opacity-20 rounded-full p-0.5">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    <span className="text-workify-blue text-xl font-bold">W</span>
                  </div>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold text-workify-blue">Workify</span>
            </Link>
            
            <div className="hidden md:flex md:ml-6 space-x-8">
              <Link to="/jobs" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Jobs
              </Link>
              <Link to="/alerts" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Job Alerts
              </Link>
              <Link to="/quick-apply" className="text-gray-700 hover:text-workify-blue hover:border-workify-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                Quick Apply
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
              {isLoggedIn ? (
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
                      <p className="text-sm font-medium truncate">{userName}</p>
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
              to="/jobs"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link 
              to="/alerts"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Job Alerts
            </Link>
            <Link 
              to="/quick-apply"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-workify-blue hover:text-workify-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quick Apply
            </Link>
          </div>
          
          {!isLoggedIn && (
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
