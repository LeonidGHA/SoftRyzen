import { FC, ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

import { CustomFieldset } from '@/components/form/CustomFieldset';
import { Input } from '@/components/form/Input';
import { ErrorMessage } from '@/components/form/ErrorMessage';

import { IBriefFormContactsProps } from './BriefFormContacts.props';

export const BriefFormContacts: FC<IBriefFormContactsProps> = ({
  register,
  errors,
}) => {
  const { t } = useTranslation('brief');

  return (
    <CustomFieldset
      idAreaLabel={t('form.contacts.ariaLabel')}
      legend={t('form.contacts.title')}
      className="mb-10 md:mb-[39px]"
      styleCell="gap-y-[8px] gap-x-[25px]"
    >
      <Input
        label={t('form.contacts.name.title')}
        {...register('name', {
          required: t('form.contacts.name.requiredError'),
          pattern: {
            value: /^.[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ 'ʼ`-]{1,}$/gm,
            message: t('form.contacts.name.patternError'),
          },
          minLength: {
            value: 2,
            message: t('form.contacts.name.minLengthError'),
          },
          maxLength: {
            value: 30,
            message: t('form.contacts.name.maxLengthError'),
          },
        })}
        placeholder={t('form.contacts.name.placeholder')}
        error={errors?.name}
        className="focus:pl-3"
      />
      <Input
        label={t('form.contacts.email.title')}
        {...register('email', {
          required: t('form.contacts.email.requiredError'),
          pattern: {
            value:
              /^(?=^.{3,63}$)(^[A-Za-z0-9]+(([_\\.\\-](?=[A-Za-z0-9]))[a-zA-Z0-9]+([\\-\\.](?=[A-Za-z0-9]))*?)*@(\w+([\\.\\-](?=(\w|\d))))+[a-zA-Z]{2,6})$/,
            message: t('form.contacts.email.patternError'),
          },
        })}
        placeholder={t('form.contacts.email.placeholder')}
        error={errors?.email}
        className="focus:pl-3"
      />
      <Input
        label={t('form.contacts.phone.title')}
        {...register('phone', {
          required: t('form.contacts.phone.requiredError'),
          pattern: {
            value: /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?[\d\s-]{5,}$/g,
            message: t('form.contacts.phone.patternError'),
          },
          minLength: {
            value: 5,
            message: t('form.contacts.phone.minLengthError'),
          },
          maxLength: {
            value: 16,
            message: t('form.contacts.phone.maxLengthError'),
          },
        })}
        placeholder={t('form.contacts.phone.placeholder')}
        error={errors?.phone}
        className="focus:pl-3"
      />

      <Input
        label={t('form.contacts.site.title')}
        {...register('site', {
          pattern: {
            value:
              /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?([a-zA-Z0-9/?=&%#\-_.]*)$/g,
            message: t('form.contacts.site.patternError'),
          },
          minLength: {
            value: 2,
            message: t('form.contacts.site.minLengthError'),
          },
          maxLength: {
            value: 30,
            message: t('form.contacts.site.maxLengthError'),
          },
        })}
        placeholder={t('form.contacts.site.placeholder')}
        error={errors?.site}
        className="focus:pl-3"
      />

      <label className="min-h-[144px] hover:text-primary focus:text-primary  md:col-start-2 md:row-start-2 md:row-end-4 md:pt-[58px]">
        <span className="block font-light">
          {t('form.contacts.info.title')}
        </span>

        <textarea
          rows={4}
          cols={30}
          autoComplete="off"
          className={`textarea relative w-full max-w-[390px] resize-none border-x-0 border-b border-t-0 bg-transparent px-0 pb-3 pt-[7px] text-sm duration-300 placeholder:absolute placeholder:bottom-[16px] focus:pl-3 focus:text-primary  ${
            errors.information
              ? 'border-error text-error'
              : 'border-primary text-dark'
          }`}
          {...register('information', {
            minLength: {
              value: 10,
              message: t('form.contacts.info.minLengthError'),
            },
            maxLength: {
              value: 900,
              message: t('form.contacts.info.maxLengthError'),
            },
          })}
          placeholder={t('form.contacts.info.placeholder')}
        />

        {errors.information && (
          <ErrorMessage>
            {errors?.information?.message as ReactNode}
          </ErrorMessage>
        )}
      </label>
    </CustomFieldset>
  );
};
