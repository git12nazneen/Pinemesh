'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './courseCard';
import { cards } from "@/lib/data";
import Container from '@/app/components/ui/container';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation';  // For navigation buttons
import 'swiper/css/pagination';  // For pagination (dots)
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BlurIn from '@/components/ui/blur-in';

const PopularCourse = () => {
  const swiperRef = useRef(null);

  return (
    <Container>
      <div className="max-w-7xl mt-3 lg:mt-14 py-8">
        <div className='flex flex-col md:flex-row justify-between mb-5'>
          <div className='text-start md:w-2/3'>
            <BlurIn word='Our Popular Courses' />
            <p className='max-w-3xl py-3 mb-3'>
              By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance.
            </p>
          </div>
          {/* Navigation buttons */}
          <div className='flex justify-between lg:justify-end md:w-1/3'>
            <button
              className="px-3 py-3 h-10 rounded-full text-black border border-gray-800"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <FaAngleLeft />
            </button>
            <button
              className="px-3 py-3 h-10 rounded-full text-black border-gray-800 border ml-2"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3}  // Default for larger screens
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,  // 3 cards on screens larger than 1024px (e.g., desktop)
            },
            768: {
              slidesPerView: 2,  // 2 cards on medium screens (e.g., tablets)
            },
            640: {
              slidesPerView: 1,  // Only 1 card on small screens (e.g., mobile)
            },
            340: {
              slidesPerView: 1,  // Only 1 card on small screens (e.g., mobile)
            },
          }}
        >
          {cards.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularCourse;
