"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { Container, StylishButton } from "@/components";

const Hero = () => {
  const router = useRouter();

  const handleClick = useCallback((): void => {
    router.push("./");
  }, [router]);

  return (
    <section className="bg-hero cover-norepeat">
      <Container isHero>
        <div className="grid grid-cols-1 md:grid-cols-[426px_230px] xl:grid-cols-[646px_294px] md:grid-rows-[auto_auto_auto]; gap-[24px] md:gap-0 md:justify-between ">
          <h1 className="ml-auto text-[37px] md:text-[67px] xl:text-[98px] leading-[1] font-thin uppercase tracking-[0.045em] md:tracking-[0.13em] xl:tracking-[0] md:row-start-1 md:mb-[56px] xl:mb-[181px]">
            <span className="font-medium tracking-normal ">7</span>days
            <span className="block text-[12px] md:text-[14px] xl:text-[16px] font-light tracking-[0.79em] md:tracking-[1.85em] xl:tracking-[2.28em] -mr-[0.79em]">
              journey
            </span>
          </h1>

          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-[1.4] md:leading-[1.21] font-thin uppercase -tracking-[0.04em] md:col-start-1 md:row-start-1 md:row-span-2">
            <span className="block font-medium ">Uncover</span>
            Carpathian’s
            <br />
            Secrets
          </h2>

          <p className="w-[157px] md:w-[263px] xl:w-full text-[10px] md:text-[14px] xl:text-[16px] leading-[1.6] md:leading-[1.14] xl:leading-[1.5] font-extralight md:tracking-[0.09em] md:row-start-3 md:mt-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>

          <p className="text-justify text-[14px] md:text-[16px] xl:text-[18px] leading-[1.42] md:leading-[1.25] xl:leading-[1.33] font-extralight">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <div className="md:mt-[28px] w-full">
            <StylishButton
              text="Join now"
              size={["18px", "18px", "32px"]}
              line={[2.66, 1.21, 1.21]}
              weight={700}
              onClick={handleClick}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
