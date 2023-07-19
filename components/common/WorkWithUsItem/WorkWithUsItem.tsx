import { FC } from 'react';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { WorkWithUsItemProps } from './WorkWithUsItem.props';

export const WorkWithUsItem: FC<WorkWithUsItemProps> = ({ item }) => {
  return (
    <li className="border-b border-b-disabled pb-5 pt-6 first:pt-0 md:py-8 md:odd:pr-4 md:even:pl-8 xl:pb-[54px] xl:pt-[60px] xl:odd:pr-10 xl:even:pl-[60px]  smOnly:first:border-none smOnly:first:p-0 md:[&:nth-child(2)]:pt-0">
      <div className="mb-6 flex justify-between">
        <Title tag="h3" className="text-primary">
          {item.title}
        </Title>
        <span className="text-lg font-semibold text-disabled md:text-xl">
          {item.numbering}
        </span>
      </div>
      <Paragraph
        variant="dark"
        variantFontSize="sm_16"
        className="max-w-[469px]"
      >
        {item.text}
      </Paragraph>
    </li>
  );
};
