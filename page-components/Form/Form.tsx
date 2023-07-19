import { FC, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';

import { sendGoogleTable, sendMessageToTg } from '@/utils/api';
import { router } from '@/utils/routes';

import { CustomToast } from '@/components/common/CustomToast';
import { ErrorMessage } from '@/components/form/ErrorMessage';
import { Input } from '@/components/form/Input';

import { FormInputs, useCustomForm } from '@/hooks/useCustomForm';

import Arrow from '@/public/images/button-arrow.svg';
import Check from '@/public/images/check.svg';
import Uncheck from '@/public/images/uncheck.svg';
import Loader from '@/public/images/loader.svg';

export const Form: FC = () => {
  const { t } = useTranslation('form');

  const [checked, setChecked] = useState(false);

  const isBrowser = typeof window != 'undefined';
  const SESSION_KEY = 'form';

  const handleChange = () => {
    setChecked(!checked);
  };

  const onSubmit = async (data: FormInputs) => {
    const user = {
      name: data.name,
      email: data.email,
      information: data.information,
      createdAt: new Date().toLocaleString(),
    };
    const message = /* html */ `
      <b>Отримано новий запит з контактів:</b>
        Name: ${data.name}
        Email: ${data.email}
        Text: ${data.information}
        createdAt: ${new Date().toLocaleString()}
      `;
    // eslint-disable-next-line no-undef
    const response = await Promise.all([
      await sendGoogleTable(user),
      await sendMessageToTg(message),
    ]);
    sessionStorage.removeItem(SESSION_KEY);
    return response;
  };

  const {
    isError,
    isSuccess,
    isLoading,
    disabled,
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
  } = useCustomForm({ onSubmit });

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
    exclude: ['consent'],
  });

  useEffect(() => {
    if (isSuccess) {
      toast.custom(t => {
        return <CustomToast tst={t} success />;
      });
    }
    if (isError) {
      toast.custom(t => {
        return <CustomToast tst={t} />;
      });
    }
  }, [isSuccess, isError]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full gap-2 bg-white_light px-5 py-10 md:w-[336px] md:px-8 xl:w-[494px] xl:px-10 smOnly:mx-auto"
      >
        <div className="mb-5 flex flex-col gap-2">
          <Input
            label={t('input.name.title')}
            className="focus:pl-3"
            {...register('name', {
              required: t('input.name.requiredError'),
              pattern: {
                value: /^.[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ 'ʼ`-]{1,}$/gm,
                message: t('input.name.patternError'),
              },
              minLength: {
                value: 2,
                message: t('input.name.minLengthError'),
              },
              maxLength: {
                value: 30,
                message: t('input.name.maxLengthError'),
              },
            })}
            placeholder={t('input.name.placeholder')}
            error={errors?.name}
          />

          <Input
            label={t('input.email.title')}
            className="focus:pl-3"
            {...register('email', {
              required: t('input.email.requiredError'),
              pattern: {
                value:
                  /^(?=^.{3,63}$)(^[A-Za-z0-9]+(([_\\.\\-](?=[A-Za-z0-9]))[a-zA-Z0-9]+([\\-\\.](?=[A-Za-z0-9]))*?)*@(\w+([\\.\\-](?=(\w|\d))))+[a-zA-Z]{2,6})$/,
                message: t('input.email.patternError'),
              },
            })}
            placeholder={t('input.email.placeholder')}
            error={errors?.email}
          />

          <label className="block min-h-[144px] hover:text-primary focus:text-primary">
            <span className="block font-light">{t('input.info.title')}</span>

            <textarea
              rows={4}
              cols={30}
              autoComplete="off"
              className={`textarea relative block w-full max-w-[390px] resize-none border-x-0 border-b border-t-0 bg-transparent px-0 pb-3 pt-[7px] text-sm duration-300 placeholder:absolute placeholder:bottom-[16px] focus:pl-3 focus:text-primary  ${
                errors.information
                  ? 'border-error text-error'
                  : 'border-primary text-dark'
              }`}
              {...register('information', {
                required: t('input.info.requiredError'),
                minLength: {
                  value: 10,
                  message: t('input.info.minLengthError'),
                },
                maxLength: {
                  value: 900,
                  message: t('input.info.maxLengthError'),
                },
              })}
              placeholder={t('input.info.placeholder')}
            />

            {errors.information && (
              <ErrorMessage>
                {errors?.information?.message as ReactNode}
              </ErrorMessage>
            )}
          </label>
        </div>

        <label
          className="mb-10 flex shrink-0 cursor-pointer items-start gap-3.5"
          onChange={handleChange}
        >
          <input
            type="checkbox"
            className="custom-checkbox sr-only"
            {...register('consent', {
              required: t('input.checkbox.requiredError'),
            })}
          />

          {checked ? (
            <Check className="mt-1 h-5 w-5 shrink-0" />
          ) : (
            <Uncheck
              className={`${
                errors.consent && 'stroke-error'
              } mt-1 h-5 w-5 shrink-0`}
            />
          )}

          <span className={`text-xs ${errors.consent && 'text-error'}`}>
            {t('input.checkbox.text')}
            <Link
              href={router.POLICY}
              className="hover:text-primary hover:underline focus:text-primary focus:underline"
            >
              {t('input.checkbox.link')}
            </Link>
          </span>
        </label>

        <button
          type="submit"
          disabled={disabled || isLoading}
          className="button w-full duration-300 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-primary xl:w-[259px]"
        >
          {isLoading && !isSuccess && t('input.button.pending')}
          {isSuccess && !isLoading && t('input.button.success')}
          {!isLoading && !isSuccess && t('input.button.idle')}
          {isLoading ? (
            <Loader
              className="mr-3 h-6 w-6 animate-spin"
              width={24}
              height={24}
            />
          ) : (
            <Arrow className="h-8 w-8" />
          )}
        </button>
      </form>
    </>
  );
};
