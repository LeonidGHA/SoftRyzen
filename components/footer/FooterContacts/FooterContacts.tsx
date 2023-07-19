import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';

import MailImg from '@/public/images/mail.svg';
import PhoneImg from '@/public/images/telephone.svg';

import { IFooterContacts } from './FooterContacts.props';

export const FooterContacts: FC = () => {
  const { t } = useTranslation(['footer']);

  const i18Contacts = t('contacts', {
    returnObjects: true,
    defaultValue: '',
  }) as unknown as IFooterContacts;

  return (
    <div className="mb-10 md:mb-auto">
      <Title tag="h3">{i18Contacts.title}</Title>
      <ul className="mt-6 flex flex-row-reverse gap-5 text-xs md:flex-col md:gap-3 md:text-base smOnly:justify-end">
        <li>
          <a
            href={`tel:${i18Contacts.phone}`}
            className="flex  text-gray_light duration-300 hover:text-primary"
          >
            <PhoneImg className="mr-[6px] h-[14px] w-[14px] text-current md:mr-3 md:h-6 md:w-6" />
            {i18Contacts.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${i18Contacts.email}`}
            className="flex  text-gray_light duration-300 hover:text-primary"
          >
            <MailImg className="mr-[6px] h-[14px] w-[14px]  text-current md:mr-3 md:h-6 md:w-6" />
            {i18Contacts.email}
          </a>
        </li>
      </ul>
    </div>
  );
};
