"use client";

import NavMenuT from "@/types/NavMenuT";
import INavMenuModalProps from "@/interfaces/INavMenuModalProps";

import { navMenu } from "@/constants";

import { Link } from "react-scroll";

import { Button } from "@/components";

const NavMenuModal: React.FC<INavMenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <nav
      className={`${
        isOpen ? "fixed" : "hidden"
      } md:hidden inset-0 w-[100vw] h-[100vh] z-10 flex flex-col center-center gap-[48px] text-[18px] bg-overlayMod/75 backdrop-blur-md`}
    >
      {navMenu.map(({ section, link }: NavMenuT) => (
        <Link
          key={section}
          onClick={() => {
            onClose();
          }}
          className="cursor-pointer"
          to={link}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          aria-label={`Go to ${section}`}
        >
          {section}
        </Link>
      ))}

      <div className="absolute top-[43px] right-[20px]">
        <Button
          text="Close"
          size={["14px"]}
          line={[1.21]}
          wider
          onClick={onClose}
        />
      </div>
    </nav>
  );
};

export default NavMenuModal;
