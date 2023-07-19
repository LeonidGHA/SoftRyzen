export interface IColorsChapterProps {
  colors: IColorsChapter;
}

export interface IColorsChapter {
  title: string;
  colorsList: IColorsChapterItem[];
}

export interface IColorsChapterItem {
  label: string;
  color: string;
}
