import { UseFormReturn, FieldErrors, FieldValues } from 'react-hook-form';

import { FormInputs } from '@/hooks';

export interface IBriefFormContactsProps {
  register: UseFormReturn<FormInputs>['register'];
  errors: FieldErrors<FieldValues>;
}
