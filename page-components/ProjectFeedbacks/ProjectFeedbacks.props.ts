export interface IProjectFeedback {
  type: string;
  review: string;
  image?: string;
  author: {
    photo: string;
    name: string;
    position: string;
    company: string;
    socials: {
      linkedin: string;
    };
  };
  defaultValue: {
    photoAlt: string;
  };
}

export interface IProjectFeedbacks {
  title: string;
  titleExtended: string;
  feedbacks: IProjectFeedback[];
}

export interface ProjectFeedbacksProps {
  project: IProjectFeedbacks;
}
