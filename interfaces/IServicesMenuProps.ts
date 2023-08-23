import { ServiceMenuT } from "@/types/ServiceMenuT";

export interface IServicesMenuProps {
  menu: ServiceMenuT;
  slideIndex: number;
  handleClick: (index: number) => void;
}
