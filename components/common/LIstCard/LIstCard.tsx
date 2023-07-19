import { FC } from 'react';

import { ListCardProps } from './LIstCard.props';
import { Paragraph } from '@/components/typography/Paragraph';

export const LIstCard: FC<ListCardProps> = ({ item }) => {
  const { number, text } = item;

  return (
    <li className="get-card md:first relative h-[172px] w-full border border-b-0 border-disabled p-5 last:border-b sm:w-[440px] md:w-[352px]  md:last:!border-r md:odd:border-r-0 xl:w-[304px]">
      <div className="get-card--top h-full w-full">
        <div className="get-card--bottom h-full w-full">
          <p className="mb-5 text-xl font-semibold text-disabled">{number}</p>
          <Paragraph variantFontSize="lg_20">{text}</Paragraph>
        </div>
      </div>
    </li>
  );
};
