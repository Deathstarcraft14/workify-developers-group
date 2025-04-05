
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ResumeUpload from '@/components/apply/ResumeUpload';
import FormFieldWrapper from '@/components/apply/FormFieldWrapper';
import ApplyFormActions from '@/components/apply/ApplyFormActions';
import ApplicationSuccess from '@/components/apply/ApplicationSuccess';

interface ApplyJobFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

// Form schema for validation
const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(5, { message: 'Phone number is required' }),
  coverLetter: z.string().optional(),
  resume: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyJobForm: React.FC<ApplyJobFormProps> = ({ isOpen, onClose, jobTitle, company }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitted application:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      // Reset form state after dialog closes
      setTimeout(() => {
        if (isSuccess) {
          setIsSuccess(false);
          form.reset();
        }
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isSuccess ? 'Application Submitted' : `Apply for ${jobTitle}`}
          </DialogTitle>
        </DialogHeader>
        
        {isSuccess ? (
          <ApplicationSuccess jobTitle={jobTitle} company={company} />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormFieldWrapper name="fullName" label="Full Name" control={form.control}>
                <Input placeholder="Your full name" />
              </FormFieldWrapper>
              
              <FormFieldWrapper name="email" label="Email" control={form.control}>
                <Input placeholder="you@example.com" />
              </FormFieldWrapper>
              
              <FormFieldWrapper name="phone" label="Phone" control={form.control}>
                <Input placeholder="Your phone number" />
              </FormFieldWrapper>
              
              <FormFieldWrapper name="coverLetter" label="Cover Letter (optional)" control={form.control}>
                <Textarea placeholder="Tell us why you're a good fit for this position" rows={5} />
              </FormFieldWrapper>
              
              <ResumeUpload form={form} />
              
              <ApplyFormActions 
                onClose={handleClose} 
                isSubmitting={isSubmitting} 
                isSuccess={isSuccess}
              />
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobForm;
