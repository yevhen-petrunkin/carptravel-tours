import { StaticImageData } from "next/image";

export type CareerReasonT = {
  id: string;
  title: string;
  paragraph: string;
};

export type ContactT = {
  id: string;
  label: string;
  list: { label: string; link: string }[];
};

export type FormInputT = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  prompt?: string;
  required?: boolean | string | undefined;
  name: string;
  pattern?: RegExp;
  error: string;
};

export type GalleryPhotoT = {
  id: string;
  url: string;
  index?: number;
  position: number;
  active?: boolean;
};

export type GallerySlideT = GalleryPhotoT & {
  index: number;
  position: number;
  active: boolean;
};

export type NavMenuT = {
  section: string;
  link: string;
};

export type ServiceBackgroundT = {
  urlSm: string;
  urlMd: string;
  urlXl: string;
};

export type ServiceMenuT = { menuItem: string; index: number }[];

export type ServiceT = {
  id: string;
  menuItem: string;
  slogan: string;
  paragraph: string;
  photoUrl: StaticImageData;
  background: {
    urlSm: string;
    urlMd: string;
    urlXl: string;
  };
};

export type TextAlignT = "right" | "left" | "justify" | "center";

export type TextareaT = {
  label: string;
  name: string;
  required?: boolean | string | undefined;
};

export type TextPropsT = {
  size: string[];
  line: number[];
};
