"use client";

import type { IGallerySliderProps } from "@/interfaces";
import type { GalleryPhotoT } from "@/types";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";

import { createSlidesFromPhotos } from "@/services";

import Image from "next/image";
import { Button } from "@/components";

const GallerySlider: React.FC<IGallerySliderProps> = ({ photos }) => {
  const slides = useMemo((): GalleryPhotoT[] => {
    return createSlidesFromPhotos(photos);
  }, [photos]);

  const galleryRef = useRef<SwiperRef | null>(null);
  const swiper = galleryRef?.current?.swiper;

  return (
    <div className="mt-[24px] md:mt-[72px]">
      <div className="block w-full aspect-[1/2.18] md:hidden">
        <Swiper
          ref={galleryRef}
          direction="vertical"
          modules={[Navigation]}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          slidesPerView={3}
          spaceBetween={24}
          speed={1500}
          grabCursor={true}
          initialSlide={1}
          loop
          centeredSlides
        >
          {slides.map((slide: GalleryPhotoT, index: number) => (
            <SwiperSlide key={`${slide.id}_${index}_${slide.url}`}>
              <div className="relative max-w-[440px] aspect-[1.5/1] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                <Image
                  src={slide.url}
                  alt={`photo-${index + 1}`}
                  fill
                  sizes="100vw, (min-width: 768px) 50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block h-[294px] xl:h-[429px]">
        <Swiper
          ref={galleryRef}
          direction="horizontal"
          effect={"coverflow"}
          modules={[Navigation, EffectCoverflow]}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            scale: 0.305,
          }}
          slidesPerView={3}
          spaceBetween={24}
          speed={1500}
          grabCursor={true}
          initialSlide={1}
          loop
          centeredSlides
        >
          {slides.map((slide: GalleryPhotoT, index: number) => (
            <SwiperSlide key={`${slide.id}_${index}_${slide.url}`}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`relative -left-[90px] w-[415px] h-[294px] drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] xl:drop-shadow-none
                   `}
                >
                  <Image
                    src={slide.url}
                    alt={`photo-${index + 1}`}
                    fill
                    sizes="100vw, (min-width: 768px) 50vw"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ul className="hidden md:block">
        <li className="">
          <Button
            text="back"
            size={["30px", "30px", "32px"]}
            line={[1.21]}
            weight={100}
            customClass="button-prev"
            onClick={() => {}}
          />
        </li>
        <li className="">
          <Button
            text="next"
            size={["30px", "30px", "32px"]}
            line={[1.21]}
            weight={100}
            customClass="button-next"
            onClick={() => {}}
          />
        </li>
      </ul>
    </div>
  );
};

export default GallerySlider;
