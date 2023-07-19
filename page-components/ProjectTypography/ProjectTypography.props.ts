import { IColorsChapter } from './../../components/common/ProjectTypographyChapters/ColorsChapter/ColorsChapter.props';
import { ITypographyChapter } from './../../components/common/ProjectTypographyChapters/TypographyChapter/TypographyChapter.props';

export interface ProjectTypographyProps {
  project: IProjecttypographyChapter;
}

export interface IProjecttypographyChapter {
  typography: ITypographyChapter;
  colors: IColorsChapter;
}
