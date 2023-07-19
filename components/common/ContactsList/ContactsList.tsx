import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Mail from '@/public/images/mail.svg';
import Telephone from '@/public/images/telephone.svg';
import Telegram from '@/public/images/telegram.svg';

export const ContactsList: FC = () => {
  const { t } = useTranslation('contacts');

  return (
    <ul className="mb-[22px] flex flex-col gap-3.5">
      <li>
        <a
          href={t('links.emailLink.url')}
          className="text-md flex items-center gap-3 font-light duration-300 hover:text-blue_light focus:text-blue_light md:text-xl"
        >
          <Mail className="inline h-5 w-5 text-current" />
          {t('links.emailLink.text')}
        </a>
      </li>
      <li>
        <a
          href={t('links.phoneLink.url')}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className="text-md flex items-center gap-3 font-light duration-300 hover:text-blue_light focus:text-blue_light md:text-xl"
        >
          <Telephone className="inline h-5 w-5 text-current" />
          {t('links.phoneLink.text')}
        </a>
      </li>
      <li>
        <a
          href={t('links.telegramLink.url')}
          className="text-md flex items-center gap-3 font-light duration-300 hover:text-blue_light focus:text-blue_light md:text-xl"
        >
          <Telegram className="inline h-5 w-5 text-current" />
          {t('links.telegramLink.text')}
        </a>
      </li>
    </ul>
  );
};
