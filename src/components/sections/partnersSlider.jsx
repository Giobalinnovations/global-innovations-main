'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { cn } from '@/lib/utils';

const PartnersSlider = ({ className, data }) => {
  return (
    <div
      className={cn(
        `bg-background lg:px-25 sm:px-14 px-10 lg:py-9 py-5 lg:rounded-[42px] rounded-3xl ${className}`
      )}
    >
      <Swiper
        // slidesPerView={4}
        spaceBetween={20}
        grabCursor={true}
        className="[&_.swiper-wrapper]:items-center"
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {data.map(({ id, src }) => {
          return (
            <SwiperSlide key={id}>
              <Image
                src={src}
                width={123}
                height={40}
                alt="invison"
                className="mx-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
