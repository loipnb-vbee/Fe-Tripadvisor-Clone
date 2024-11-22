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
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from 'react';
import Picture from '@/components/Picture';

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
      id: 'photo-o/1b/33/f7/12',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg',
    },
    {
      id: 'photo-o/12/44/7c/9e',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/44/7c/9e/view.jpg',
    },
    {
      id: 'photo-o/08/fc/8f/0f',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/fc/8f/0f/lake-of-the-restored.jpg',
    },
    {
      id: 'photo-o/10/fb/cc/a6',
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/50/cf/phu-chu-tich.jpg',
    },
  ];

  return (
    <SectionWrapper id="swiper-location-wrapper" className="mb-4">
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#fff',
        }}
        className="rounded-2xl"
        // spaceBetween={40}
        ref={swiperRef}
        breakpoints={{
          768: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
          1536: { slidesPerView: 1 },
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        {imagesData.map((item) => (
          <SwiperSlide
            key={item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Picture src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default SwiperLocation;
