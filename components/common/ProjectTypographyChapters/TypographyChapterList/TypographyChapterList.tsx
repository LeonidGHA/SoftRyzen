import { FC } from 'react';

import { TypographyChapterItem } from '../TypographyChapterItem/TypographyChapterItem';

import { ITypographyChapterListProps } from './TypographyChapterList.props';

export const TypographyChapterList: FC<ITypographyChapterListProps> = ({
  imagesGroups,
}) => {
  return (
    <ul className="mb-10 flex flex-col gap-10 md:mb-[100px] md:gap-[100px]">
      {imagesGroups.map((images, index) => (
        <TypographyChapterItem images={images} key={index} />
      ))}
    </ul>
  );
};
