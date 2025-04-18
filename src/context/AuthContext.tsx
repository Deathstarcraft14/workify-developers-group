
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  fullName?: string;
  email: string;
  isLoggedIn: boolean;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (fullName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

// Create context with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proper functional component declaration
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(parsedUser.isLoggedIn);
      } catch (e) {
        // Handle invalid JSON in localStorage
        localStorage.removeItem('user');
        console.error('Invalid user data in localStorage');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a mock implementation
    if (email && password) {
      const newUser = { email, isLoggedIn: true };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = async (fullName: string, email: string, password: string): Promise<boolean> => {
    // This is a mock implementation
    if (fullName && email && password) {
      const newUser = { fullName, email, isLoggedIn: true };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
