import { FC } from 'react';

import { Title } from '@/components/typography/Title';

import { IColorsChapterProps } from './ColorsChapter.props';

export const ColorsChapter: FC<IColorsChapterProps> = ({ colors }) => {
  const { colorsList, title } = colors;
  return (
    <>
      <div className="mb-6 border-b border-disabled pb-6 md:mb-10 md:pb-10 xl:mb-[60px] xl:pb-[60px]">
        <Title tag="h2">{title}</Title>
      </div>
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 mdOnly:gap-[17px]">
        {colorsList.map((item, index) => (
          <li key={index}>
            <div
              className="border- mb-3 h-[94px] w-full border border-disabled md:h-[104px] xl:h-[172px] mdOnly:mb-4"
              style={{ backgroundColor: `${item.color}` }}
              aria-label={item.label}
            ></div>
            <span className="text-base font-light xl:text-xl">
              {item.color}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
