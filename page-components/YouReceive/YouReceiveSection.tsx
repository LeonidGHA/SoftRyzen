import { FC, Key } from 'react';
import { useTranslation } from 'next-i18next';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { LIstCard } from '../../components/common/LIstCard';

export const YouReceiveSection: FC = () => {
  const { t } = useTranslation('youGet');

  const list = t('list', {
    returnObjects: true,
    defaultValue: '',
  });

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white_gray"
    >
      <div className="container">
        <ul className=" md:grid md:grid-cols-2 xl:grid-cols-4">
          <li className="relative w-full border  border-transparent sm:w-[440px]  md:h-[172px] md:w-[352px]  md:border-r xl:w-[304px] ">
            <div className="h-full w-full smOnly:pb-[24px]">
              <Title tag="h2" className=" md:w-[223px]">
                {t('title')}
              </Title>
            </div>
          </li>

          {list.map((item, ind: Key) => (
            <LIstCard key={ind} item={item} />
          ))}
        </ul>
      </div>
    </MSection>
  );
};
