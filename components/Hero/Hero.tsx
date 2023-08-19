"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { heroData } from "@/constants";

import { Container, MainHeading, StylishButton, Paragraph } from "@/components";

const Hero = () => {
  const router = useRouter();

  const handleClick = useCallback((): void => {
    router.push("./");
  }, [router]);

  return (
    <section className="bg-hero cover-norepeat">
      <Container isHero>
        <div className="grid grid-cols-1 md:grid-cols-[426px_230px] xl:grid-cols-[646px_294px] md:grid-rows-[auto_auto_auto] gap-[24px] md:gap-0 md:justify-between ">
          <MainHeading />

          <h2 className="heading-content md:col-start-1 md:row-start-1 md:row-span-2">
            <span className="block font-medium ">Uncover</span>
            Carpathian’s
            <br />
            Secrets
          </h2>

          <p className="w-[157px] md:w-[263px] xl:w-full text-[10px] md:text-[14px] xl:text-[16px] leading-[1.6] md:leading-[1.14] xl:leading-[1.5] font-extralight md:tracking-[0.09em] md:row-start-3 md:mt-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>

          <Paragraph
            size={["14px", "16px", "18px"]}
            line={[1.42, 1.25, 1.33]}
            content={heroData.paragraphs.p01.content}
            justify
          />

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
