export interface AuthorCardProps {
  className?: string;
  author: AuthorProps;
  defaultValue: string;
  stylingIcon?: string;
  textColor?: string;
}

export type AuthorProps = {
  photo: string;
  name: string;
  position: string;
  company: string;
  socials: {
    linkedin: string;
  };
};
