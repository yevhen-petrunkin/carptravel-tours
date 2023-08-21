import { StaticImageData } from "next/image";

type ServiceT = {
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

export default ServiceT;
