import { FC } from 'react';

import { Paragraph } from '@/components/typography/Paragraph';

import { ProblemListCardProps } from './ProblemListCard.props';

export const ProblemListCard: FC<ProblemListCardProps> = ({
  item,
  noBorder,
}) => {
  const { index, text } = item;
  const numberCard = Number(index);

  return (
    <li
      className={`problem-section-item relative h-[280px] w-full  last:h-[190px]  md:last:h-[280px] md:last:shrink-0 md:last:basis-[275px] xl:last:basis-[309px] ${
        noBorder ? 'xl:first:before:contents' : null
      }`}
    >
      <div className="problem-section-box h-full w-full overflow-hidden p-5">
        <p className=" mb-3 text-right text-xl font-semibold text-dark">
          {numberCard > 10 ? `0${numberCard + 1}` : `00${numberCard + 1}`}
        </p>
        <p className="text-sm md:text-base xl:text-xl">{text}</p>
      </div>
    </li>
  );
};
