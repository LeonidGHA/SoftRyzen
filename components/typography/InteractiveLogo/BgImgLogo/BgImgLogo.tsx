import { FC } from 'react';
import cn from 'classnames';

import { BgImgLogoProps } from './BgImgLogo.props';

import LogoBg from '@/public/images/hero/logoBG.svg';

export const BgImgLogo: FC<BgImgLogoProps> = ({ className, inDetails }) => {
  return (
    <LogoBg
      className={cn(
        'absolute right-[100px] top-[-131px] w-[168px] transition-all duration-500 hover:top-[-171px] xl:top-[-145px] xl:w-[250px] xl:hover:top-[-185px]',
        inDetails ? 'xl:right-[10px]' : 'xl:right-[185px]',
        className,
      )}
    />
  );
};
