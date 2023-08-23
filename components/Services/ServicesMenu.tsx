"use client";

import { IServicesMenuProps } from "@/interfaces";

import Image from "next/image";

const ServicesMenu: React.FC<IServicesMenuProps> = ({
  menu,
  slideIndex,
  handleClick,
}) => {
  return (
    <ul className="mt-[24px] md:mt-[36px] xl:mt-[21px] md:pl-[20px] xl:pr-[40px] w-[185.48px] md:w-full flex flex-col gap-[16px] xl:gap-[24px] text-[20px] md:text-[22px] xl:text-[28px] leading-[0.85] md:leading-[0.82] xl:leading-[0.86] uppercase md:col-start-2 md:row-start-2 ">
      {menu.map((item, index) => (
        <li
          key={`${item.menuItem}${index}`}
          className={`${
            slideIndex === index
              ? "font-medium flex items-center gap-[8px]"
              : "font-extralight text-white/50"
          } cursor-pointer`}
          onClick={() => handleClick(index)}
          aria-label={`Menu item ${item.menuItem}`}
        >
          <Image
            src="/assets/icons/bullet.svg"
            alt="bullet"
            width={8.49}
            height={8.49}
            className={`${slideIndex === index ? "block" : "hidden"}`}
          />

          {item.menuItem}
        </li>
      ))}
    </ul>
  );
};

export default ServicesMenu;
