
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';

// Import the new components
import FormFieldWrapper from './apply/FormFieldWrapper';
import ResumeUpload from './apply/ResumeUpload';
import ApplyFormActions from './apply/ApplyFormActions';

interface ApplyJobFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please describe your experience"),
  coverLetter: z.string().optional(),
  resume: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyJobForm: React.FC<ApplyJobFormProps> = ({ isOpen, onClose, jobTitle, company }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Add the selected file name to the data if it exists
      const formData = {
        ...data,
        resumeFileName: data.resume ? data.resume.name : undefined
      };
      
      // In a real app, we would submit to an API here
      console.log('Application data:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Application submitted successfully!");
      setIsSubmitting(false);
      onClose();
      
      // Navigate to applications page after successful submission
      navigate('/applications');
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error("Failed to submit application. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Submit your application to {company}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormFieldWrapper 
              name="name" 
              label="Full Name" 
              control={form.control}
            >
              <Input placeholder="Your full name" />
            </FormFieldWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormFieldWrapper 
                name="email" 
                label="Email" 
                control={form.control}
              >
                <Input placeholder="Your email address" type="email" />
              </FormFieldWrapper>
              
              <FormFieldWrapper 
                name="phone" 
                label="Phone Number" 
                control={form.control}
              >
                <Input placeholder="Your phone number" />
              </FormFieldWrapper>
            </div>
            
            <FormFieldWrapper 
              name="experience" 
              label="Relevant Experience" 
              control={form.control}
            >
              <Textarea 
                placeholder="Briefly describe your relevant experience for this position"
                className="min-h-[100px]"
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper 
              name="coverLetter" 
              label="Cover Letter (Optional)" 
              control={form.control}
            >
              <Textarea 
                placeholder="Why are you interested in this position?"
                className="min-h-[150px]"
              />
            </FormFieldWrapper>
            
            <ResumeUpload setValue={form.setValue} />
            
            <ApplyFormActions onClose={onClose} isSubmitting={isSubmitting} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobForm;
