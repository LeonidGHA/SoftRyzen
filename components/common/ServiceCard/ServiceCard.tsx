import { FC } from 'react';
import Link from 'next/link';

import { ServiceCardProps } from './ServiceCard.props';
import { Paragraph } from '@/components/typography/Paragraph';

import Arrow from '@/public/images/button-arrow.svg';

export const ServiceCard: FC<ServiceCardProps> = ({ service, linkText }) => {
  const subservicesInFirstList = Math.round(service.subservices.length / 2);

  return (
    <li className="xl:flex">
      <div className="relative min-h-[400px] bg-primary p-6 pb-8 md:min-h-[294px] md:p-10 xl:min-h-[492px] xl:w-[392px]">
        <h3 className="mb-6 text-2xl font-semibold text-white xl:mb-8 xl:text-[32px] xl:leading-[44px]">
          {service.title}
        </h3>
        <Paragraph className="text-white_light xl:text-xl mdOnly:w-[595px]">
          {service.overview}
        </Paragraph>
        <p className="absolute bottom-0 right-6 text-[60px] font-black leading-[109px] text-white_light opacity-20 md:right-10 md:text-[72px] md:leading-[109px] xl:right-5">
          {service.number}
        </p>
      </div>
      <div className="relative min-h-[400px] bg-white p-6 md:min-h-[382px] md:p-10 md:pb-6 xl:w-[824px] xl:p-[60px]">
        <Paragraph className="mb-6 md:mb-10 md:w-[595px] xl:mb-[60px] xl:w-[660px] xl:text-xl">
          {service.description}
        </Paragraph>
        <div className="mb-10 flex flex-col gap-5 md:mb-0 md:flex-row">
          <ul className="flex flex-col gap-5 xl:gap-7">
            {...service.subservices
              .slice(0, subservicesInFirstList)
              .map((subservice, index) => (
                <li
                  key={index}
                  className="border-l border-disabled pl-3 xl:text-lg"
                >
                  {subservice}
                </li>
              ))}
          </ul>
          <ul className="flex flex-col gap-5 md:absolute md:left-[368px] md:w-[270px] xl:left-[389px] xl:w-[352px] xl:gap-7">
            {...service.subservices
              .slice(subservicesInFirstList)
              .map((subservice, index) => (
                <li
                  key={index}
                  className="border-l border-disabled pl-3 xl:text-lg"
                >
                  {subservice}
                </li>
              ))}
          </ul>
        </div>
        <Link
          href="/contacts"
          className="right-5 ml-auto flex w-[199px] gap-6 pb-2 text-lg text-primary md:absolute md:bottom-6 md:m-0 xl:bottom-7 xl:right-7"
        >
          {linkText}
          <Arrow className="h-6 w-6" />
        </Link>
      </div>
    </li>
  );
};
