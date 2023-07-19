import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Link from 'next/link';

import { router } from '@/utils/routes';

import LogoImg from '@/public/images/logo.svg';

import { LogoProps } from './Logo.props';

export const Logo: FC<LogoProps> = ({
  sticky,
  width = 115,
  height = 20,
  className,
}) => {
  const { t } = useTranslation(['common']);
  return (
    <Link
      aria-label="SoftRyzen logo that leads to the homepage"
      href={router.HOME}
      className={cn(
        'block w-full hover:outline-primary focus:outline-primary',
        { ['py-5 xl:py-2']: sticky },
        className,
      )}
    >
      <LogoImg
        className="md:h-[32px] md:w-[186px]"
        width={width}
        height={height}
        aria-label={t('logo.aria')}
      />
    </Link>
  );
};
