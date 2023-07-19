import { AuthorProps } from '../AuthorCard/AuthorCard.props';

export interface FeedbackVideoCardProps {
  className?: string;
  feedback: {
    review: string;
    image?: string;
    author: AuthorProps;
  };
  defaultValue: string;
}
