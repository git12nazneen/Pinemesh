import Marquee from '@/components/ui/marquee'
import { testimonials } from '@/lib/data'
import React from 'react'
import TestimonialCard from './testimonialCard'

export const Testimonial = () => {
  return (
    <div>
      <section className="pb-20 pt-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 max-w-3xl mx-auto">
        Learners love EduPath. See why they rate us 4.9 out of 5
      </h2>
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


