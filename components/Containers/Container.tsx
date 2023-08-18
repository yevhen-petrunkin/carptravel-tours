import { IContainerProps } from "@/interfaces";

const Container: React.FC<IContainerProps> = ({
  isHero,
  background,
  children,
}) => {
  return (
    <div
      className={`px-[20px] md:px-[32px] ${
        isHero
          ? "py-[105px] md:py-[123px] xl:px-[104px] xl:py-[130px]"
          : "py-[56px] md:py-[64px] xl:p-[104px]"
      } width-container h-full ${
        background ? background : ""
      } cover-norepeat container-bg`}
    >
      {children}
    </div>
  );
};

export default Container;
