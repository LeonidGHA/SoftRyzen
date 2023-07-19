import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { router } from '@/utils/routes';

import { Logo } from '@/components/typography/Logo';
import { FooterServicesList } from '@/components/footer/FooterServicesList';
import { FooterMenuList } from '@/components/footer/FooterMenuList';
import { FooterContacts } from '@/components/footer/FooterContacts';
import { FooterSocialLinks } from '@/components/footer/FooterSocialLinks';

import { LinkBtnProps } from './Footer.props';

export const Footer: FC = () => {
  const { t } = useTranslation(['footer']);
  const year = new Date().getFullYear();

  const i18BtnLink = t('buttons', {
    returnObjects: true,
    defaultValue: '',
  }) as LinkBtnProps;

  return (
    <footer className="bg-white py-10 md:py-16">
      <div className="container  md:flex md:gap-[101px]">
        <div className=" md:flex md:gap-[60px] mdOnly:flex-col-reverse">
          <div className="flex flex-col smOnly:items-center">
            <div className="m-w-[186px]">
              <Logo />
            </div>

            <Link
              href={i18BtnLink.brief.url}
              className="mt-10 block max-w-fit border border-primary px-4 py-3 text-xs text-primary duration-500 hover:bg-blue_light focus:bg-blue_light xl:mt-auto "
            >
              {i18BtnLink.brief.text}
            </Link>

            <Link
              href="/privacy-policy"
              className="block text-sm text-gray_light duration-300 hover:text-primary focus:text-primary md:mt-8 xl:mt-9 smOnly:hidden"
            >
              Terms of Service & Privacy Policy
            </Link>
            <span className="mt-5 block text-sm text-gray_light smOnly:hidden">
              © {year}, All Rights Reserved SoftRyzen
            </span>
          </div>

          <FooterServicesList />
        </div>

        <div className="flex grow flex-col xl:flex-row smOnly:mt-10 mdOnly:gap-[60px]">
          <FooterMenuList />

          <div className="flex flex-col xl:ml-auto smOnly:mt-10 mdOnly:grow">
            <FooterContacts />

            <FooterSocialLinks />
          </div>
        </div>

        <Link
          href={router.POLICY}
          className="mt-10 block text-center text-xs text-gray_light duration-300 hover:text-primary focus:text-primary md:hidden"
        >
          Terms of Service & Privacy Policy
        </Link>
        <span className="mt-5 block text-center text-xs text-gray_light md:hidden">
          © {year}, All Rights Reserved SoftRyzen
        </span>
      </div>
    </footer>
  );
};
