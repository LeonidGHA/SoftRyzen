export interface ProjectUserFlowProps {
  project: IProjectUserFlow;
}

export interface IProjectUserFlow {
  title: string;
  imageUserFlow: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
