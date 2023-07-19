export interface ProjectProblemsProps {
  project: {
    problem: ProjectProblemSolutionType;
    solution: ProjectProblemSolutionType;
  };
}
export interface IProjectProblems {
  problem: ProjectProblemSolutionType;
  solution: ProjectProblemSolutionType;
}

export type ProjectProblemSolutionType = {
  title: string;
  list: string[];
};
