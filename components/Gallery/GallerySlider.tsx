"use client";

import { IGallerySliderProps } from "@/interfaces";
import { GalleryPhotoT } from "@/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, A11y, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css";

import { useMemo } from "react";

import { createSlidesFromPhotos } from "@/services";
import { sliderBreakpoints } from "@/constants";

import Image from "next/image";
import { Button } from "@/components";

const GallerySlider: React.FC<IGallerySliderProps> = ({ photos }) => {
  const slides = useMemo((): GalleryPhotoT[] => {
    return createSlidesFromPhotos(photos);
  }, [photos]);

  return (
    <div className="relative mt-[24px] md:mt-[72px]">
      <div className="block w-full aspect-[1/2.18] md:hidden">
        <Swiper
          direction="vertical"
          modules={[Navigation, A11y]}
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
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
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
          direction="horizontal"
          effect={"coverflow"}
          modules={[Navigation, EffectCoverflow, A11y, Keyboard]}
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
          breakpoints={sliderBreakpoints}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          keyboard={{ enabled: true }}
        >
          {slides.map((slide: GalleryPhotoT, index: number) => (
            <SwiperSlide key={`${slide.id}_${index}_${slide.url}`}>
              {({ isActive }) => (
                <div
                  className={`relative -left-[96px] w-[415px] xl:w-[606px] h-[294px] xl:h-[429px] drop-shadow-[0_0_100px_rgba(rgba(9,20,16,0.5) 
                   ${
                     isActive
                       ? "xl:drop-shadow-none"
                       : "opacity-25 xl:opacity-50"
                   }`}
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
        <li className="absolute z-10 left-[37px] xl:left-[220px] bottom-[17px] xl:bottom-[24px]">
          <Button
            text="back"
            size={["30px", "30px", "33px"]}
            line={[1.21]}
            weight={100}
            customClass="button-prev"
            onClick={() => {}}
          />
        </li>
        <li className="absolute z-10 right-[37px] xl:right-[220px] bottom-[17px] xl:bottom-[24px]">
          <Button
            text="next"
            size={["30px", "30px", "33px"]}
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
