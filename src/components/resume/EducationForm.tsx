
import React, { useState } from 'react';
import { useResume, Education } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { X, Plus, FileText } from 'lucide-react';

const EducationForm = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<Education, 'id'>>({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    if (!formData.school || !formData.degree) return;
    
    if (editingId) {
      updateEducation({ ...formData, id: editingId });
    } else {
      addEducation(formData);
    }
    
    resetForm();
  };

  const handleEditEducation = (edu: Education) => {
    setFormData({
      school: edu.school,
      degree: edu.degree,
      fieldOfStudy: edu.fieldOfStudy,
      startDate: edu.startDate,
      endDate: edu.endDate,
      description: edu.description,
    });
    setEditingId(edu.id);
    setIsEditing(true);
  };

  const resetForm = () => {
    setFormData({
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Education</h3>
      
      {!isEditing ? (
        <Button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-1 bg-workify-blue hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Education
        </Button>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {editingId ? 'Edit Education' : 'Add Education'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="school">School / University</Label>
                <Input
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="Harvard University"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Input
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  placeholder="Bachelor of Science"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">Field of Study (Optional)</Label>
                <Input
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  placeholder="Computer Science"
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
                  placeholder="Sep 2018"
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
                  placeholder="May 2022"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Achievements, activities, GPA, etc."
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddEducation}
              disabled={!formData.school || !formData.degree}
              className="bg-workify-blue hover:bg-blue-700"
            >
              {editingId ? 'Update' : 'Add'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* List of Education */}
      {resumeData.education.length > 0 && (
        <div className="space-y-4 mt-6">
          <h4 className="text-md font-medium">Added Education</h4>
          {resumeData.education.map(edu => (
            <Card key={edu.id} className="relative">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">{edu.school}</h4>
                    <p className="text-gray-700">
                      {edu.degree}
                      {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </p>
                    {edu.description && (
                      <p className="text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleEditEducation(edu)}
                      className="h-8 w-8"
                    >
                      <FileText size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeEducation(edu.id)}
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

export default EducationForm;
