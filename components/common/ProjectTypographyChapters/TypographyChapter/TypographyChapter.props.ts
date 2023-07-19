export interface ITypographyChapterProps {
  typography: ITypographyChapter;
}
export interface ITypographyChapter {
  title: string;
  imagesGroups: ITypograpyImagesGroup[];
}

export interface ITypograpyImagesGroup {
  bigSmallLetterImg: ITyporgaphyImage;
  fontStyleImg: ITyporgaphyImage;
  alphabetImg: ITyporgaphyImage;
}

export interface ITyporgaphyImage {
  src: string;
  alt: string;
}
