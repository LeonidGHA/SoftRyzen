export interface ProjectScreensProps {
  project: IProjectScreens;
}

export interface IProjectScreens {
  firstImage: IProjectScreensImage;
  secondImage: IProjectScreensImage;
  thirdImage: IProjectScreensImage;
  fourthImage: IProjectScreensImage;
}

export interface IProjectScreensImage {
  src: string;
  alt: string;
}
