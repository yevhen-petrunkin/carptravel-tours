"use client";

import type { navMenuT } from "@/types";

import { navMenu } from "@/constants";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { NavMenuModal, Button } from "@/components";

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

  const onOpen = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  const onClose = useCallback(() => {
    setModalOpen(false);
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
        {navMenu.map(({ section, link }: navMenuT) => (
          <div
            key={section}
            onClick={() => handleClick(link)}
            className="cursor-pointer"
          >
            {section}
          </div>
        ))}
      </nav>

      <NavMenuModal isOpen={modalOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
