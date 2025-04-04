
import React, { useState } from 'react';
import { useResume, Experience } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { X, Plus, FileText } from 'lucide-react';

const ExperienceForm = () => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<Experience, 'id'>>({
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = () => {
    if (!formData.company || !formData.position) return;
    
    if (editingId) {
      updateExperience({ ...formData, id: editingId });
    } else {
      addExperience(formData);
    }
    
    resetForm();
  };

  const handleEditExperience = (exp: Experience) => {
    setFormData({
      company: exp.company,
      position: exp.position,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
    });
    setEditingId(exp.id);
    setIsEditing(true);
  };

  const resetForm = () => {
    setFormData({
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Work Experience</h3>
      
      {!isEditing ? (
        <Button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-1 bg-workify-blue hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Experience
        </Button>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {editingId ? 'Edit Experience' : 'Add Experience'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Job title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Remote, New York, NY, etc."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="text"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  placeholder="Jan 2020"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date (or 'Present')</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="text"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  placeholder="Present"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your responsibilities and achievements..."
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddExperience}
              disabled={!formData.company || !formData.position}
              className="bg-workify-blue hover:bg-blue-700"
            >
              {editingId ? 'Update' : 'Add'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of Experiences */}
      {resumeData.experiences.length > 0 && (
        <div className="space-y-4 mt-6">
          <h4 className="text-md font-medium">Added Experiences</h4>
          {resumeData.experiences.map(exp => (
            <Card key={exp.id} className="relative">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">{exp.position}</h4>
                    <p className="text-gray-700">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate || 'Present'}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                    {exp.description && (
                      <p className="text-sm mt-2">{exp.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleEditExperience(exp)}
                      className="h-8 w-8"
                    >
                      <FileText size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeExperience(exp.id)}
                      className="h-8 w-8 text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
