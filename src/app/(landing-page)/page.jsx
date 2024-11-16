'use client'
import React from 'react'
import { Banner } from './_components/banner';
import { Testimonial } from './_components/testimonial';
// import { PopularCourse } from './_components/popularCourse';
import { Provide } from './_components/provide';
import PopularCourse from './_components/popularCourse';


const HomePage = () => {
  return (
    <div>
      <Banner/>
      <PopularCourse/>
      <Provide/>
      <Testimonial/>
    </div>
  )
}

export default HomePage;
