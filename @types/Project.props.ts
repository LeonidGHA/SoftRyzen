import { IProjectScreens } from './../page-components/ProjectScreens/ProjectScreens.props';
import { IProjectProblems } from '@/page-components/ProjectProblems/ProjectProblems.props';
import { IProjectAboutChapter } from './../page-components/ProjectAbout/ProjectAbout.props';
import { IProjecttypographyChapter } from './../page-components/ProjectTypography/ProjectTypography.props';
import { IProjectUserFlow } from '@/page-components/ProjectUserFlow/ProjectUserFlow.props';
import { IProjectHero } from '@/page-components/ProjectHero/ProjectHero.props';
import { IProjectScreensAndAnimation } from '@/page-components/ProjectScreensAndAnimation/ProjectScreensAndAnimation.props';
import { IProjectFeedbacks } from '@/page-components/ProjectFeedbacks/ProjectFeedbacks.props';

export interface ProjectInterface {
  name: string;
  link: string;
  hero: IProjectHero;
  projectAbout: IProjectAboutChapter;
  projectTypography: IProjecttypographyChapter;
  projectUserFlow: IProjectUserFlow;
  projectScreens: IProjectScreens;
  projectProblems: IProjectProblems;
  screensAndAnimation: IProjectScreensAndAnimation;
  projectFeedbacks: IProjectFeedbacks;
}
