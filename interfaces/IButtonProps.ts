interface IButtonProps {
  text?: string;
  size: string[];
  line: number[];
  wider?: boolean;
  type?: "button" | "submit" | "reset";
  lowercase?: boolean;
  weight?: number;
  color?: string;
  customClass?: string;
  onClick: () => void;
}

export default IButtonProps;
