import { FC } from 'react';
import Image from 'next/image';

import { ITypographyChapterItemProps } from './TypographyChapterItem.props';

export const TypographyChapterItem: FC<ITypographyChapterItemProps> = ({
  images,
}) => {
  return (
    <li className="flex max-w-[804px] items-center smOnly:flex-wrap smOnly:gap-y-[40px]">
      <div className="mr-[30px] max-h-[90px] max-w-[125px] md:max-w-[150px] xl:mr-[60px]">
        <Image
          src={images.bigSmallLetterImg.src}
          width={155}
          height={90}
          alt={images.bigSmallLetterImg.alt}
          className="h-auto w-auto"
          priority
        />
      </div>
      <div className="max-w-[125px] md:mr-auto  md:max-w-[150px]">
        <Image
          src={images.fontStyleImg.src}
          width={226}
          height={56}
          alt={images.fontStyleImg.alt}
          className="h-auto w-auto"
          priority
        />
      </div>
      <div className="max-h-[80px] max-w-[292px]">
        <Image
          src={images.alphabetImg.src}
          width={292}
          height={80}
          alt={images.alphabetImg.alt}
          className="h-auto w-auto"
          priority
        />
      </div>
    </li>
  );
};
