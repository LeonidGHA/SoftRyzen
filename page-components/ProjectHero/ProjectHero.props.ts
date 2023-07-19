export interface ProjectHeroProps {
  project: IProjectHero;
}

export interface IProjectHero {
  breadcrumbs: string;
  title: string;
  text: string;
  desktopImage: string;
  desktopImageAlt: string;
  mobileImage: string;
  mobileImageAlt: string;
  behanceLink: string;
  learnMoreLink: string;
}
