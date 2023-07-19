import { FC, Key } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

export const TechnologiesSection: FC = () => {
  const { t } = useTranslation('technologies');

  const technologies = t('technologiesArray', {
    returnObjects: true,
    defaultValue: '',
  });

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white pb-[64px] pt-10 md:pb-[64px] md:pt-10 xl:pb-[84px] xl:pt-[60px]"
    >
      <div className="container">
        <Title tag="h2" className="mb-12 md:mb-[64px] xl:mb-[84px]">
          {t('title')}
        </Title>

        <ul className="relative grid grid-cols-4 gap-x-4 gap-y-6   before:absolute before:top-[-24px] before:block before:h-[2px] before:w-full before:rounded-sm before:bg-disabled before:content-['']   after:absolute after:bottom-[-24px] after:block after:h-[2px] after:w-full after:rounded-sm after:bg-disabled after:content-['']   md:grid-cols-7 md:gap-x-5 xl:grid-cols-12 xl:after:bottom-[-24px]">
          {technologies.map(({ icon_dark, icon_color }, ind: Key) => (
            <li
              key={ind}
              className="group relative mx-auto h-10 w-[68px] md:h-12 md:w-[83px]"
            >
              <Image
                width={83}
                height={48}
                src={icon_dark.src}
                alt={icon_dark.alt}
                className="absolute left-0 top-0 h-full w-full duration-300 group-hover:opacity-0"
              />
              <Image
                width={83}
                height={48}
                src={icon_color.src}
                alt={icon_color.alt}
                className="h-full w-full opacity-0 duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </MSection>
  );
};
