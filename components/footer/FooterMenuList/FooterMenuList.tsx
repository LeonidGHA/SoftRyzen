import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';

import { IFooterMenu } from './FooterMenuList.props';

export const FooterMenuList: FC = () => {
  const { t } = useTranslation(['footer']);

  const i18Menu = t('menu', {
    returnObjects: true,
    defaultValue: '',
  }) as IFooterMenu;

  return (
    <div>
      <Title tag="h3">{i18Menu.title}</Title>
      <ul className="mt-6 grid gap-5 text-xs text-gray_light  md:grid-flow-row md:text-sm  xl:mt-7 smOnly:grid-cols-2">
        {i18Menu.item.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="md:hover:text-primary md:focus:text-primary"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
