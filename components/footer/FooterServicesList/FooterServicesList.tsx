import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';

import { IFooterServices } from './FooterSevicesList.props';

export const FooterServicesList: FC = () => {
  const { t } = useTranslation(['footer']);

  const i18Services = t('services', {
    returnObjects: true,
    defaultValue: '',
  }) as unknown as IFooterServices;

  return (
    <div className="smOnly:mt-10">
      <Title tag="h3">{i18Services.title}</Title>
      <ul className=" mt-6 grid  gap-5 text-xs text-gray_light md:grid-flow-row md:text-sm xl:mt-7 smOnly:grid-cols-2">
        {i18Services.item.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
