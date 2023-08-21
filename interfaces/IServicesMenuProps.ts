import type { ServiceMenuT } from "@/types";

interface IServicesMenuProps {
  menu: ServiceMenuT;
  slideIndex: number;
  handleClick: (index: number) => void;
}

export default IServicesMenuProps;
