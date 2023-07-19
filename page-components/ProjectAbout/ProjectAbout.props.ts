import { IAboutTechnologiesList } from './../../components/common/AboutTechnologies/AboutTechnologiesList/AboutTechnologiesListprops';

export interface ProjectAboutProps {
  project: IProjectAboutChapter;
}

export interface IProjectAboutChapter {
  aboutChapter: IAboutChapter;
  technologiesChapter: IAboutTechnologiesList;
}

export interface IAboutChapter {
  title: string;
  text: string;
}
