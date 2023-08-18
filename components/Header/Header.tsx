import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="pt-[36px] md:pt-[24px] px-[20px] md:px-[32px] xl:px-[104px] width-container flex center-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
