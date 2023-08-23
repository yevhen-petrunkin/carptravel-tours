import { StaticImageData } from "next/image";

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
