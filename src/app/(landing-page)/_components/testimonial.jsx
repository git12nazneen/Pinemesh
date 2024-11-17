import Marquee from '@/components/ui/marquee'
import { testimonials } from '@/lib/data'
import React from 'react'
import TestimonialCard from './testimonialCard'
import SparklesText from '@/components/ui/sparkles-text'

export const Testimonial = () => {
  return (
    <div>
      <section className="pb-20 pt-4">
      <SparklesText className='text-center' text=" Learners love EduPath. See why " />
      <SparklesText  className='text-center mb-10' text=" they rate us 4.9 out of 5 " />
      <Marquee gradient={false ? undefined : undefined} speed={50}>
        <div className="flex gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </Marquee>
    </section>
    </div>
  )
}


