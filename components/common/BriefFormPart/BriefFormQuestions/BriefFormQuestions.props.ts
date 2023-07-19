import { UseFormReturn } from 'react-hook-form';

import { FormInputs } from '@/hooks';

export interface IBriefFormQuestionsProps {
  register: UseFormReturn<FormInputs>['register'];
  watch: UseFormReturn<FormInputs>['watch'];
}

export interface IBriefFormQuestionItem {
  text: string;
}
