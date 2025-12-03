import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { type StaticImageData } from "next/image";

export interface itemsTitle {
  link: string;
  title: string;
}

export interface integrationItems {
  item: itemsTitle;
}

export interface Week {
  title: string;
  isShowItem: boolean;
  questionsNumber?: number;
  minutesNumber?: number;
};

export interface Course {
  courseTitle: string;
  courseDescrption: string;
  weeks: Week[];
};

export interface isItems {
  item: Week;
};

export interface listItem {
  icon: IconProp;
  title: string;
  time: string;
};

export interface isItem {
  item: listItem;
};

export interface isTitle {
  title: string;
};

export interface isBoxComments {
  image: StaticImageData;
  title: string;
  date: string;
  descrption: string;
};

export interface isItemsComments {
  item: isBoxComments;
};

export interface keys {
  title: string;
  icon: IconProp;
  link: string;
};

export interface isItemsScroll {
  item: keys;
};