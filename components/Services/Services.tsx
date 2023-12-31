"use client";

import { ServiceMenuT, ServiceT } from "@/types";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade, Autoplay, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { servicesData } from "@/constants";
import { getServicesMenu, getCurrentNumber } from "@/services";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";

import { Slide } from "@/components";

const Services = () => {
  const { heading, slides } = servicesData;

  const [counter, setCounter] = useState<number>(0);

  const currentNumber = useMemo(
    (): string => getCurrentNumber(counter),
    [counter]
  );

  const currentLength = useMemo(
    (): string => getCurrentNumber(slides.length - 1),
    [slides.length]
  );

  const serviceMenu = useMemo((): ServiceMenuT => {
    return getServicesMenu(slides);
  }, [slides]);

  const handleClick = useCallback(
    (index: number): void => {
      setCounter(index);
    },
    [setCounter]
  );

  const sliderRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const swiper = sliderRef.current.swiper;
      swiper.slideTo(counter);
    }
  }, [counter]);

  return (
    <section id="services">
      <Swiper
        ref={sliderRef}
        className="h-full"
        modules={[EffectFade, Autoplay, A11y, Keyboard]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        keyboard={{ enabled: true }}
      >
        {slides.map((slide: ServiceT, index: number) => {
          return (
            <SwiperSlide key={slide.id}>
              <Slide
                heading={heading}
                currentNumber={currentNumber}
                length={currentLength}
                slide={slide}
                menu={serviceMenu}
                index={index}
                handleClick={handleClick}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
