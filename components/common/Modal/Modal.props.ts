import { AuthorProps } from '../AuthorCard/AuthorCard.props';

export interface ModalProps {
  feedback: {
    review: string;
    author: AuthorProps;
  };
  defaultValue: string;
  onClose: () => void;
  handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
