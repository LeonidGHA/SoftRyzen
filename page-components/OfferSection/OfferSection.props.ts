export interface IOfferProps {
  title: string;
  subtitle: string;
  description: string;
  paragraph: string;
  buttons: IOfferButtons;
}

export interface IOfferButtons {
  firstBtn: IOfferBtn;
  secondBtn: IOfferBtn;
}

export interface IOfferBtn {
  text: string;
  url: string;
}
