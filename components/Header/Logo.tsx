import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[61px] h-[33px]">
      <Image
        src="/assets/icons/logo.svg"
        alt="logo"
        className="w-full h-full"
        priority
        fill
      />
    </div>
  );
};

export default Logo;
