import { Link } from 'react-scroll';
import { useTranslation } from 'next-i18next';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import ArrowDown from '@/public/images/arrow-down.svg';

export const PortfolioHeroSection = () => {
  const { t } = useTranslation('commonPortfolio');

  return (
    <Section className="portfolio-hero-bg relative bg-white_gray pb-[368px] pt-[124px] md:pb-[351px] md:pt-[110px] xl:pb-[259px] xl:pt-[202px]  ">
      <div className="container">
        <div className="absolute top-0 z-10 bg-transparent pt-[12px]">
          <Breadcrumbs />
        </div>

        <Title
          tag="h1"
          className="mb-[46px] !text-5xl !leading-none md:mb-[60px] md:!text-[44px] md:!leading-[60px] xl:!text-7xl xl:!leading-[98px] "
        >
          {t('title')}
        </Title>
        <Link
          to="prided-works"
          offset={-60}
          href="#prided-works"
          rel="noopener norefferer nofollow"
          smooth
          duration={600}
          className=" flex cursor-pointer items-center gap-1 scroll-auto text-xl font-bold text-primary duration-300 hover:text-hover focus:text-hover "
        >
          {t('buttonScroll')}
          <ArrowDown className="h-[34px] w-[34px]" />
        </Link>
      </div>
    </Section>
  );
};
