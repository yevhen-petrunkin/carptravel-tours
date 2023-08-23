"use client";

import { NavMenuT } from "@/types";

import { navMenu } from "@/constants";

import { useState, useCallback } from "react";

import { Link } from "react-scroll";

import { NavMenuModal, Button } from "@/components";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    setModalOpen(true);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "hidden";
    }
  }, [setModalOpen]);

  const onClose = useCallback(() => {
    setModalOpen(false);
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "auto";
    }
  }, [setModalOpen]);

  return (
    <div className="text-[14px] leading-[1.21] tracking-[0.1em]">
      <span className="md:hidden">
        <Button
          text="Menu"
          size={["14px"]}
          line={[1.21]}
          wider
          onClick={onOpen}
        />
      </span>

      <nav className="hidden md:flex md:gap-[24px] xl:gap-[56px] center-end">
        {navMenu.map(({ section, link }: NavMenuT, index: number) => (
          <Link
            key={section}
            className="cursor-pointer"
            to={link}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            tabIndex={index + 1}
            aria-label={`Go to ${section}`}
          >
            {section}
          </Link>
        ))}
      </nav>

      <NavMenuModal isOpen={modalOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
