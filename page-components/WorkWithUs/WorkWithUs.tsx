import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { router } from '@/utils/routes';
import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { MainLink } from '@/components/button/MainLink';
import { WorkWithUsItem } from '@/components/common/WorkWithUsItem';

import { IWorkWithUsBtn, IWorkWithUsItems } from './WorkWithUs.props';

export const WorkWithUs: FC = () => {
  const { t } = useTranslation('workWithUs');

  const i18WorkWithUsBtn = t('button', {
    returnObjects: true,
    defaultValue: '',
  }) as IWorkWithUsBtn;

  const i18WorkWithUsServices = t('services', {
    returnObjects: true,
    defaultValue: '',
  }) as IWorkWithUsItems;

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="workWithUs relative bg-white"
    >
      <div className=" container ">
        <ul className="mb-12 md:grid md:grid-cols-2 smOnly:mb-10">
          <li className="border-b border-b-disabled pb-5 pt-6 first:pt-0 md:py-8 md:odd:pr-4 md:even:pl-8 xl:pb-[54px] xl:pt-[60px] xl:odd:pr-10 xl:even:pl-[60px]  smOnly:first:border-none smOnly:first:p-0 [&:nth-child(2)]:pt-0">
            <Title tag="h2">{i18WorkWithUsServices.title}</Title>
          </li>
          {i18WorkWithUsServices.items.map((item, index) => (
            <WorkWithUsItem key={index} item={item} />
          ))}
        </ul>
        <MainLink noArrow={false} href={router.SERVICES} className="m-auto">
          {i18WorkWithUsBtn.text}
        </MainLink>
      </div>
    </MSection>
  );
};
