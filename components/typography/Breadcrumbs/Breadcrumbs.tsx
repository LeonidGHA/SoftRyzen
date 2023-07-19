import { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { router } from '@/utils/routes';

import { BreadcrumbsProps } from './Breadcrumbs.props';

interface Breadcrumb {
  title: string;
  path: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  contacts,
  className,
  translation,
}) => {
  const { t } = useTranslation('common');
  const r = useRouter();
  const { asPath } = r;
  const pathSegments = asPath.split('/').filter(segment => segment !== '');

  const breadcrumbs: Breadcrumb[] = pathSegments.map((segment, index) => {
    const titleGeneration = (segment: string) => {
      switch (segment) {
        case 'about-us':
          return t('about-us');

        case 'services':
          return t('services');

        case 'portfolio':
          return t('portfolio');

        case 'reviews':
          return t('reviews');

        case 'contacts':
          return t('contacts');

        case 'brief':
          return t('brief');

        case 'privacy-policy':
          return t('privacy-policy');

        default:
          return null;
      }
    };
    const breadcrumb: Breadcrumb = {
      title: titleGeneration(segment) || translation || segment,
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
    };
    return breadcrumb;
  });

  return (
    <nav className={className}>
      <ul
        className={`flex text-xs font-normal ${
          contacts ? 'text-white' : 'text-gray_light'
        } `}
      >
        <li>
          <Link
            href={router.HOME}
            className={`${
              contacts
                ? 'hover:text-blue_light focus:text-blue_light'
                : 'hover:text-primary focus:text-primary'
            } `}
          >
            {t('home')}
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <span className="mx-2">/</span>
            <Link
              href={breadcrumb.path}
              className={
                breadcrumb.path === asPath && !contacts
                  ? 'font-semibold text-primary'
                  : contacts
                  ? 'hover:text-blue_light focus:text-blue_light'
                  : 'hover:text-primary focus:text-primary'
              }
            >
              {breadcrumb.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
