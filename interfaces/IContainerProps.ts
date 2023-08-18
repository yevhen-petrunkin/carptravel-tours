interface IContainerProps {
  background?:
    | "bg-hero"
    | "bg-about"
    | "bg-career"
    | "bg-gallery"
    | "bg-contacts";
  isHero?: boolean;
  children: React.ReactNode;
}

export default IContainerProps;
