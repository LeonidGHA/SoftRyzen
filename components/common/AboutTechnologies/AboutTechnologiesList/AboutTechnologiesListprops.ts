import { IAboutTechnologiesItemProps } from '../AboutTechnologiesItem/AboutTechnologiesItem.props';

export interface IAboutTechnologiesListProps {
  technologiesChapter: IAboutTechnologiesList;
}

export interface IAboutTechnologiesList {
  title: string;
  technologies: IAboutTechnologiesItemProps[];
}
