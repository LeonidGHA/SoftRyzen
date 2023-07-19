import { FC, Key } from 'react';
import { useTranslation } from 'next-i18next';

import { CustomFieldset } from '@/components/form/CustomFieldset';
import { Checkbox } from '@/components/form/Checkbox';
import { RadioButton } from '@/components/form/RadioButton';

import {
  IBriefFormQuestionItem,
  IBriefFormQuestionsProps,
} from './BriefFormQuestions.props';

export const BriefFormQuestions: FC<IBriefFormQuestionsProps> = ({
  register,
  watch,
}) => {
  const { t } = useTranslation('brief');

  const checkboxServices = t('form.services.items', {
    returnObjects: true,
    defaultValue: '',
  }) as IBriefFormQuestionItem[];
  const checkboxDiscover = t('form.discover.items', {
    returnObjects: true,
    defaultValue: '',
  }) as IBriefFormQuestionItem[];

  const radioBtnCorporateStyle = t('form.corporateStyle.items', {
    returnObjects: true,
    defaultValue: '',
  }) as IBriefFormQuestionItem[];

  const radioBtnProjectLaunchDates = t('form.projectLaunchDates.items', {
    returnObjects: true,
    defaultValue: '',
  }) as IBriefFormQuestionItem[];
  return (
    <>
      <CustomFieldset
        idAreaLabel={t('form.services.ariaLabel')}
        legend={t('form.services.title')}
        className="mb-10 md:mb-[80px]"
      >
        {checkboxServices.map((item, ind: Key) => (
          <Checkbox
            key={ind}
            label={item.text}
            {...register('services')}
            value={item.text}
            watchValue={watch('services')}
          />
        ))}
      </CustomFieldset>

      <CustomFieldset
        idAreaLabel={t('form.corporateStyle.ariaLabel')}
        legend={t('form.corporateStyle.title')}
        className="mb-10 md:mb-[80px]"
      >
        {radioBtnCorporateStyle.map((item, ind: Key) => (
          <RadioButton
            key={ind}
            label={item.text}
            value={item.text}
            {...register('corporateStyle')}
            watchValue={watch('corporateStyle')}
          />
        ))}
      </CustomFieldset>

      <CustomFieldset
        idAreaLabel={t('form.projectLaunchDates.ariaLabel')}
        legend={t('form.projectLaunchDates.title')}
        className="mb-10 md:mb-[80px]"
      >
        {radioBtnProjectLaunchDates.map((item, ind: Key) => (
          <RadioButton
            key={ind}
            label={item.text}
            value={item.text}
            {...register('projectLaunchDates')}
            watchValue={watch('projectLaunchDates')}
          />
        ))}
      </CustomFieldset>

      <CustomFieldset
        idAreaLabel={t('form.discover.ariaLabel')}
        legend={t('form.discover.title')}
        className="mb-10 md:mb-[80px]"
      >
        {checkboxDiscover.map((item, ind: Key) => (
          <Checkbox
            key={ind}
            label={item.text}
            value={item.text}
            {...register('discover')}
            watchValue={watch('discover')}
          />
        ))}
      </CustomFieldset>
    </>
  );
};
