import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="pt-[36px] md:pt-[24px] px-[20px] md:px-[32px] xl:px-[104px] mx-auto max-w-[480px] md:max-w-[768px] xl:max-w-[1280px] flex center-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
