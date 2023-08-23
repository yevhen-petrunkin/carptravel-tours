"use client";

import type { ServiceMenuT, ServiceT } from "@/types";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
        modules={[EffectFade]}
        effect="fade"
        speed={1000}
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
