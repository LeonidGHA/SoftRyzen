import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { IconLink } from '@/components/button/IconLink';
import Behance from '@/public/images/social/behance.svg';
import Instagram from '@/public/images/social/instagram.svg';
import Linkedin from '@/public/images/social/linkedin.svg';
import Telegram from '@/public/images/social/telegram.svg';

import { IFooterSocialLinks } from './FooterSocialLinks.props';

const cssIconLink = 'text-dark duration-500   hover:text-primary';

export const FooterSocialLinks: FC = () => {
  const { t } = useTranslation(['footer']);

  const i18Social = t('social', {
    returnObjects: true,
    defaultValue: '',
  }) as IFooterSocialLinks;

  return (
    <div className="flex gap-5 smOnly:justify-center">
      <IconLink
        href={i18Social.linkedin.url}
        label={i18Social.linkedin.label}
        className={cssIconLink}
      >
        <Linkedin />
      </IconLink>

      <IconLink
        href={i18Social.instagram.url}
        label={i18Social.instagram.label}
        className={cssIconLink}
      >
        <Instagram />
      </IconLink>

      <IconLink
        href={i18Social.behance.url}
        label={i18Social.behance.url}
        className={cssIconLink}
      >
        <Behance />
      </IconLink>

      <IconLink
        href={i18Social.telegram.url}
        label={i18Social.telegram.label}
        className={cssIconLink}
      >
        <Telegram />
      </IconLink>
    </div>
  );
};
