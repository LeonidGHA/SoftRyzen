import { FC } from 'react';

import { Title } from '@/components/typography/Title';
import { TypographyChapterList } from '../TypographyChapterList/TypographyChapterList';

import { ITypographyChapterProps } from './TypographyChapter.props';

export const TypographyChapter: FC<ITypographyChapterProps> = ({
  typography,
}) => {
  const { title, imagesGroups } = typography;
  return (
    <>
      <div className="mb-10 border-b border-disabled pb-6 md:mb-[88px] md:pb-10 xl:mb-[60px] xl:pb-[60px]">
        <Title tag="h2">{title}</Title>
      </div>
      <TypographyChapterList imagesGroups={imagesGroups} />
    </>
  );
};
