import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { imagePositionObj } from '@/utils/imagePosition';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import Arrow from '@/public/images/button-arrow.svg';

import { WorksCardProps } from './WorksCard.props';

export const WorksCard: FC<WorksCardProps> = ({ work }) => {
  const { t } = useTranslation('pridedWorks');

  return (
    <li
      key={work.title}
      className="gap-x-8 odd:flex-row-reverse odd:gap-x-5 md:flex"
    >
      <div className="relative aspect-[160/107] min-h-[214px] w-full md:aspect-[42/41] md:h-[328px] md:w-[336px] xl:aspect-[299/160] xl:h-[320px] xl:w-[598px] smOnly:mb-6">
        <Image
          src={work.image}
          alt={work.title}
          className={`object-cover ${
            work.imagePosition ? ` ${imagePositionObj[work.imagePosition]}` : ''
          } `}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 336px, 598px"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-7">
        <Title tag="h3" className="text-xl xl:text-[28px] xl:leading-[32px]">
          {work.title}
        </Title>
        <Paragraph className=" md:text-xl xl:mb-auto smOnly:line-clamp-6 mdOnly:line-clamp-[7]">
          {work.text}
        </Paragraph>
        <Link
          href={work.link}
          className="focus:text-focus flex w-[179px] justify-between border-b border-primary pb-[7px] text-lg font-semibold text-primary hover:text-hover"
        >
          {t('workLink')}
          <Arrow className="h-6 w-6" />
        </Link>
      </div>
    </li>
  );
};
