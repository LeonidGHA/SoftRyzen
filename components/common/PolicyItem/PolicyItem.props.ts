export interface PolicyItemProp {
  item: { name: string; list: List[] };
}

export interface List {
  subTitle: string;
  subItems?: string[];
}
