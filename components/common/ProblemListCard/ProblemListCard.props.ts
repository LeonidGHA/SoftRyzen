export interface ProblemListCardProps {
  item: ProblemItemCardProps;
  noBorder?: boolean;
}

export type ProblemItemCardProps = {
  index: string | number;
  text: string;
};
