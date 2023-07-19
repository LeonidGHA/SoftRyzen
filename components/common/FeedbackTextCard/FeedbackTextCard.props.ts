import { AuthorProps } from '../AuthorCard/AuthorCard.props';

export interface FeedbackTextCardProps {
  className?: string;
  lineClamp?: boolean;

  feedback: {
    review: string;
    author: AuthorProps;
  };
  defaultValue: string;
  onClick?: () => void;
}
