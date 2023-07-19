import { FC } from 'react';

import { AboutTechnologiesItem } from '../AboutTechnologiesItem';

import { IAboutTechnologiesListProps } from './AboutTechnologiesListprops';

export const AboutTechnologiesList: FC<IAboutTechnologiesListProps> = ({
  technologiesChapter,
}) => {
  const { technologies } = technologiesChapter;

  return (
    <ul className="flex flex-wrap gap-4 md:gap-5 xl:w-[800px]">
      {technologies.map((technology, index) => (
        <AboutTechnologiesItem
          src={technology.src}
          alt={technology.alt}
          key={index}
        />
      ))}
    </ul>
  );
};
