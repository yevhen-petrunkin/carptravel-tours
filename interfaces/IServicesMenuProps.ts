import ServiceMenuT from "@/types/ServiceMenuT";

interface IServicesMenuProps {
  menu: ServiceMenuT;
  slideIndex: number;
  handleClick: (index: number) => void;
}

export default IServicesMenuProps;
