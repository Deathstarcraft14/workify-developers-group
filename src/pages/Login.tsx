
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Mail, Lock, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back to Workify!",
        });
        navigate('/profile');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please check your credentials and try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: `${provider} login is not implemented in this demo.`,
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center">
              <div className="bg-workify-blue bg-opacity-10 rounded-full p-2">
                <div className="bg-workify-blue bg-opacity-20 rounded-full p-1">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                    <span className="text-workify-blue text-xl font-bold">W</span>
                  </div>
                </div>
              </div>
              <span className="ml-2 text-2xl font-bold text-workify-blue">Workify</span>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">Login to Your Account</h1>
          
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-workify-blue hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
          
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
          <p className="text-center mb-4">Login using social networks</p>
          
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              className="h-12 w-12 rounded-full p-0"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <Facebook className="h-5 w-5 text-blue-600" />
            </Button>
            
            <Button 
              variant="outline" 
              className="h-12 w-12 rounded-full p-0"
              onClick={() => handleSocialLogin('Google')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.677 0 3.218.588 4.418 1.564L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-12 w-12 rounded-full p-0"
              onClick={() => handleSocialLogin('LinkedIn')}
            >
              <Linkedin className="h-5 w-5 text-blue-800" />
            </Button>
          </div>
          
          <p className="mt-8 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-workify-blue hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Banner */}
      <div className="hidden md:block md:w-1/2 bg-workify-blue text-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-5xl font-bold mb-6">Welcome Back!</h2>
          <p className="text-xl mb-8">
            Log in to access your account and continue your job search journey.
          </p>
          <Link to="/signup" className="mt-4">
            <Button className="bg-white text-workify-blue hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
