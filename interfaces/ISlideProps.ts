import type { ServiceT, ServiceMenuT } from "@/types";

interface ISlideProps {
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

export default ISlideProps;
