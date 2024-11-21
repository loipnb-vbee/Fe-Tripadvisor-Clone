import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import 'swiper/css';
import {
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from 'react';

const SwiperLocation = () => {
  const swiperRef = (useRef < Swiper) | (null > null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const imagesData = [
    {
      id: 'photo-o/29/02/6b/7b',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/6b/7b/caption.jpg?w=700&h=300&s=1',
    },
    {
      id: 'photo-o/29/02/07/d4',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/07/d4/caption.jpg?w=700&h=300&s=1&cx=1000&cy=666&chk=v1_763694e0140d23e6c8aa',
    },
    {
      id: 'photo-o/2b/2d/40/95',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2d/40/95/keep-on-planning.jpg?w=700&h=300&s=1&cx=492&cy=358&chk=v1_f64df95338d294710736',
    },
    {
      id: 'photo-o/29/02/09/3e',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/09/3e/caption.jpg?w=700&h=300&s=1',
    },
  ];

  return (
    <SectionWrapper id="swiper-location-wrapper" className="mb-4">
      <Swiper
        spaceBetween={40}
        ref={swiperRef}
        breakpoints={{
          768: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
          1536: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {imagesData.map((item) => (
          <SwiperSlide
            key={item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={item.src}
              width={640}
              height={300}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default SwiperLocation;