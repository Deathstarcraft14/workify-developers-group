
import React from 'react';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';

interface ApplyFormActionsProps {
  onClose: () => void;
  isSubmitting: boolean;
  isSuccess?: boolean;
}

const ApplyFormActions: React.FC<ApplyFormActionsProps> = ({ 
  onClose, 
  isSubmitting,
  isSuccess = false
}) => {
  return (
    <DialogFooter className="pt-4">
      <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
        {isSuccess ? 'Close' : 'Cancel'}
      </Button>
      {!isSuccess && (
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      )}
    </DialogFooter>
  );
};

export default ApplyFormActions;
