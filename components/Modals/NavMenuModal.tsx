"use client";

import type { NavMenuT } from "@/types";
import type { INavMenuModalProps } from "@/interfaces";

import { navMenu } from "@/constants";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { Button } from "@/components";

const NavMenuModal: React.FC<INavMenuModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleClick = useCallback(
    (link: string): void => {
      if (!link) {
        return;
      }
      router.push(link);
    },
    [router]
  );

  return (
    <nav
      className={`${
        isOpen ? "fixed" : "hidden"
      } md:hidden inset-0 w-[100vw] h-[100vh] z-10 flex flex-col center-center gap-[48px] text-[18px] bg-overlayMod/75 backdrop-blur-md`}
    >
      {navMenu.map(({ section, link }: NavMenuT) => (
        <div
          key={section}
          onClick={() => {
            handleClick(link);
            onClose();
          }}
          className="cursor-pointer"
        >
          {section}
        </div>
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
