"use client";

import { ISlideProps } from "@/interfaces/ISlideProps";

import { useBackground } from "@/hooks";

import Image from "next/image";

import {
  Container,
  SectionHeading,
  Paragraph,
  Counter,
  ServicesMenu,
} from "@/components";

const Slide: React.FC<ISlideProps> = ({
  heading,
  currentNumber,
  length,
  slide,
  menu,
  index,
  handleClick,
}) => {
  const background = useBackground(slide?.background);

  return (
    <article
      style={{ backgroundImage: `url(${background})` }}
      className="w-full h-full font-extralight cover-norepeat"
    >
      <Container>
        <div className="md:grid md:grid-cols-[463px_auto] md:grid-rows-[auto_auto_auto_auto] xl:grid-cols-[607px_auto_293px] xl:grid-rows-[auto_auto_auto]">
          <SectionHeading
            content={heading.content}
            highlight={heading.highlight}
          />

          <Counter number={currentNumber} length={length} />

          <Image
            src={slide.photoUrl}
            alt={slide.menuItem}
            className="mt-[16px] md:mt-[36px] xl:mt-[23px] w-full aspect-[1.31/1] md:aspect-[1.25/1] xl:aspect-[1.41/1] md:col-start-1 md:row-start-2 md:row-span-3 drop-shadow-[0_0_100px_rgba(9,20,16,0.25)] xl:drop-shadow-none"
          />

          <h3 className="mt-[12px] md:mt-[25px] xl:mt-[21px] md:pl-[20px] xl:pl-0 text-[12px] leading-[2] tracking-[0.2em] text-right md:text-left xl:col-start-3 xl:row-start-2">
            {slide.slogan}
          </h3>

          <ServicesMenu
            menu={menu}
            slideIndex={index}
            handleClick={handleClick}
          />

          <div className="mt-[34px] xl:mt-[23px] md:pl-[20px] xl:pl-0 xl:col-start-3 xl:row-start-3">
            <Paragraph
              size={["14px", "13px", "18px"]}
              line={[1.42, 1.53, 1.33]}
              content={slide.paragraph}
              align={["left", "justify", "justify"]}
            />
          </div>
        </div>
      </Container>
    </article>
  );
};

export default Slide;
