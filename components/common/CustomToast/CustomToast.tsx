import toast from 'react-hot-toast';
import { useTranslation } from 'next-i18next';

import { IconButton } from '@/components/button/IconButton';

import CloseMenuIcon from '@/public/images/header/icon-close.svg';
import Success from '@/public/images/notify/success.svg';
import Error from '@/public/images/notify/error.svg';

import { CustomToastProps } from './CustomToast.props';

export const CustomToast = ({ tst, success }: CustomToastProps) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={`${
        tst.visible ? 'animate-enter' : 'animate-leave'
      }  pointer-events-auto flex w-full max-w-md items-center justify-between  bg-white_gray px-4 py-5 shadow-lg ring-1 ring-black ring-opacity-5`}
    >
      {success ? (
        <Success width={24} height={24} />
      ) : (
        <Error width={24} height={24} />
      )}
      <div className={`${success ? 'text-secondary' : 'text-error'}`}>
        <h2 className="mb-1 text-sm font-semibold md:text-lg">
          {success ? t('notifyTitle.success') : t('notifyTitle.error')}
        </h2>
        <p className="text-xs md:text-base">
          {success ? t('notifyText.success') : t('notifyText.error')}
        </p>
      </div>
      <IconButton
        onClick={() => {
          toast.dismiss(tst.id);
        }}
        label={t('close')}
        className={`${
          success ? 'text-secondary' : 'text-error'
        } focus:primary flex items-center justify-center duration-300 hover:text-primary`}
      >
        <CloseMenuIcon width={24} height={24} />
      </IconButton>
    </div>
  );
};
