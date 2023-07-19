import { FC } from 'react';
import Image from 'next/image';

import { IconLink } from '@/components/button/IconLink';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import LinkedIDIcon from '@/public/images/feedbacks/linkedin.svg';

import { AuthorCardProps } from './AuthorCard.props';

const DEFAULT_AUTHOR_PHOTO = '/images/feedbacks/default-author.svg';

export const AuthorCard: FC<AuthorCardProps> = ({
  author,
  defaultValue,
  className,
  stylingIcon,
  textColor,
}) => {
  const {
    photo,
    name,
    position,
    company,
    socials: { linkedin },
  } = author;

  return (
    <div className={`flex items-end justify-between ${className}`}>
      <div className="flex items-start">
        <div className="mr-2 h-[60px] w-[60px] max-w-[264px] flex-shrink-0 text-[#F5F6F9] xl:h-[68px] xl:w-[68px] ">
          <Image
            className="h-full w-full object-cover object-center"
            src={photo || DEFAULT_AUTHOR_PHOTO}
            width={60}
            height={60}
            alt={photo.length !== 0 ? `${name}` : defaultValue}
          />
        </div>
        <div>
          <Title
            tag="h3"
            className={`mb-1 !text-base xl:!text-lg ${textColor}`}
          >
            {name}
          </Title>
          <Paragraph
            className={`mb-1 line-clamp-1 text-xs font-normal ${textColor}`}
          >
            {position}
          </Paragraph>
          <Paragraph className={`text-xs font-normal ${textColor}`}>
            {company}
          </Paragraph>
        </div>
      </div>

      {linkedin && (
        <IconLink
          className={`text-primary outline-primary duration-300 hover:text-blue_light focus:text-blue_light ${stylingIcon}`}
          href={linkedin}
          label={linkedin ? `linkedin ${name}` : 'linkedin'}
        >
          <LinkedIDIcon width={32} height={32} />
        </IconLink>
      )}
    </div>
  );
};
