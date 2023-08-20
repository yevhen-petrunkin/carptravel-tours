import { IContainerProps } from "@/interfaces";

const Container: React.FC<IContainerProps> = ({ isHero, children }) => {
  return (
    <div
      className={`px-[20px] md:px-[32px] xl:px-[24px] ${
        isHero
          ? "pt-[105px] pb-[56px] md:pt-[123px] md:pb-[64px] xl:pt-[130px] xl:pb-[104px]"
          : "py-[56px] md:py-[64px] xl:py-[104px]"
      } width-container h-full`}
    >
      {children}
    </div>
  );
};

export default Container;
