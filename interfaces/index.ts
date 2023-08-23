import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import {
  CareerReasonT,
  ContactT,
  TextareaT,
  FormInputT,
  GalleryPhotoT,
  TextAlignT,
  ServiceMenuT,
  ServiceT,
} from "@/types";

export interface IButtonProps {
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

export interface ICareerReasonsProps {
  list: CareerReasonT[];
}

export interface IContactProps {
  contact: ContactT;
  changeable?: boolean;
}

export interface IContainerProps {
  isHero?: boolean;
  isGallery?: boolean;
  children: React.ReactNode;
}

export interface ICounterProps {
  number: string;
  length: string;
}

export interface IErrorProps {
  error: Error;
}

export interface IFormProps {
  form: {
    inputs: FormInputT[];
    textarea: TextareaT;
    confirmation?: string;
    btnText?: string;
  };
  messageHeight: string[];
  uneven?: boolean;
  onSubmit: (formData: FieldValues) => void;
}

export interface IGallerySliderProps {
  photos: GalleryPhotoT[];
}

export interface IInputProps {
  input: FormInputT;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export interface INavMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IParagraphProps {
  size: string[];
  line: number[];
  highlight?: string;
  content: string;
  align?: TextAlignT[];
}

export interface ISectionHeadingProps {
  highlight: string;
  content: string;
}

export interface IServicesMenuProps {
  menu: ServiceMenuT;
  slideIndex: number;
  handleClick: (index: number) => void;
}

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

export interface IStylishButtonProps extends IButtonProps {
  link: string;
}

export interface ITextareaProps {
  textarea: TextareaT;
  height: string[];
  register: UseFormRegister<FieldValues>;
}
