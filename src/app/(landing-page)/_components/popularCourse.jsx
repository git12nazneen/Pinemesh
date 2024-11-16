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

const PopularCourse = () => {
  const swiperRef = useRef(null);

  return (
    <Container>
      <div className="max-w-7xl mt-3 lg:mt-14 py-8">
        <div className='flex justify-between'>
          <div className='text-start  justify-start'>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-start">
              Our Popular Courses
            </h2>
            <p className='max-w-3xl py-3 mb-3'>By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance</p>
          </div>
          <div>
            <button
              className="px-3 py-3 rounded-full text-black border border-gray-800"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
          <FaAngleLeft />
            </button>
            <button
              className="px-3 py-3 rounded-full text-black border-gray-800 border ml-2"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
             <FaAngleRight />
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}  // Space between slides
          slidesPerView={3}  // Number of slides to show
          loop={true}         // Infinite loop
          breakpoints={{
            1024: {
              slidesPerView: 3,
              slidesToScroll: 3,
            },
            768: {
              slidesPerView: 2,
              slidesToScroll: 2,
            },
            640: {
              slidesPerView: 1,
              slidesToScroll: 1,
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
