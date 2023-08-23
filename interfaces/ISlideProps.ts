import { ServiceT } from "@/types/ServiceT";
import { ServiceMenuT } from "@/types/ServiceMenuT";

export interface ISlideProps {
  heading: {
    content: string;
    highlight: string;
  };
  currentNumber: string;
  length: string;
  slide: ServiceT;
  menu: ServiceMenuT;
  index: number;
  handleClick: (index: number) => void;
}
