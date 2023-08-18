"use client";

import { navMenu } from "@/constants";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

const Navbar = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
    <div className="text-[14px] leading-[1.21] ">
      <span className="uppercase md:hidden">Menu</span>

      <nav className="hidden md:flex md:gap-[24px] xl:gap-[56px] center-end ">
        {navMenu.map(({ section, link }) => (
          <div
            key={section}
            onClick={() => handleClick(link)}
            className="cursor-pointer"
          >
            {section}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
