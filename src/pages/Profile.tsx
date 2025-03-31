import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Briefcase, Calendar, Edit2, LogOut, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../components/Navbar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../context/AuthContext';

interface UserProfile {
  fullName: string;
  email: string;
  location?: string;
  bio?: string;
  experience?: string[];
  education?: string[];
  skills?: string[];
  isLoggedIn: boolean;
}

const defaultProfile: UserProfile = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  location: 'New York, NY',
  bio: 'Passionate software engineer with 5+ years of experience in web development.',
  experience: [
    'Senior Developer at TechCorp (2020-Present)',
    'Web Developer at StartupX (2018-2020)'
  ],
  education: [
    'MS Computer Science, State University (2018)',
    'BS Computer Science, Local College (2016)'
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS'],
  isLoggedIn: true
};

const Profile = () => {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(defaultProfile);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Merge user data with default profile data
    if (user) {
      const mergedProfile = {
        ...defaultProfile,
        fullName: user.fullName || defaultProfile.fullName,
        email: user.email || defaultProfile.email,
        isLoggedIn: true
      };
      
      setProfileData(mergedProfile);
      setEditedProfile(mergedProfile);
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const handleSaveProfile = () => {
    setProfileData(editedProfile);
    
    // Update only the user fields in localStorage, not the entire profile with default data
    if (user) {
      const updatedUser = {
        ...user,
        fullName: editedProfile.fullName,
        email: editedProfile.email,
        location: editedProfile.location,
        bio: editedProfile.bio
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value
    });
  };

  if (!profileData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-workify-blue text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold">{profileData.fullName.charAt(0)}</span>
                </div>
                <CardTitle>{profileData.fullName}</CardTitle>
                <CardDescription className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {profileData.email}
                </CardDescription>
                {profileData.location && (
                  <CardDescription className="flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profileData.location}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {profileData.bio && (
                  <div className="mb-4">
                    <h3 className="font-medium text-sm text-gray-500 mb-1">About</h3>
                    <p className="text-sm">{profileData.bio}</p>
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="font-medium text-sm text-gray-500 mb-1">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills?.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
            
            <Button 
              variant="outline" 
              className="w-full mt-4 text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          {/* Profile Content */}
          <div className="w-full md:w-2/3">
            {isEditing ? (
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={editedProfile.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={editedProfile.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={editedProfile.location || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={editedProfile.bio || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                </CardFooter>
              </Card>
            ) : (
              <Tabs defaultValue="experience">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="experience" className="mt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>Your professional history</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {profileData.experience?.map((exp, index) => (
                        <div key={index} className="mb-4 pb-4 border-b last:border-0">
                          <div className="flex items-start">
                            <Briefcase className="w-5 h-5 mr-2 mt-0.5 text-gray-500" />
                            <div>
                              <p className="font-medium">{exp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="education" className="mt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>Your academic background</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {profileData.education?.map((edu, index) => (
                        <div key={index} className="mb-4 pb-4 border-b last:border-0">
                          <div className="flex items-start">
                            <Calendar className="w-5 h-5 mr-2 mt-0.5 text-gray-500" />
                            <div>
                              <p className="font-medium">{edu}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="applications" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Applications</CardTitle>
                      <CardDescription>Track your job applications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">You haven't applied to any jobs yet.</p>
                        <Button>Browse Jobs</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
