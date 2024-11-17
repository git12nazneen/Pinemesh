import Container from '@/app/components/ui/container'
import TypingAnimation from '@/components/ui/typing-animation'
import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <section className='bg-gray-100 px-8'>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between rounded-lg">

          {/* <!-- Left Section: Content --> */}
          <div className="max-w-lg space-y-4">
            {/* <!-- Rating --> */}
            <div className="flex items-center space-x-2 text-yellow-500">
              <span className="flex space-x-1">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </span>
              <span className="text-gray-600 text-sm">(566)</span>
            </div>
            <TypingAnimation text=" #1 Platform Powering Health and Wellness" />
            {/* <!-- Description --> */}
            <p className="text-gray-700 text-2xl sm:text-3xl md:text-4xl">
              We’re restoring home as the primary place of personal well-being.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Health is not just about what you’re eating. It’s also about what you’re thinking and saying.
            </p>

            {/* <!-- Call-to-action Buttons --> */}
            <div className="flex space-x-4">
              <button className="px-6 py-2 rounded-full hover:border-2 hover:border-gray-600 hover:bg-slate-300 bg-[#287279] text-white shadow hover:text-[#287279]">
                Browse Courses
              </button>
              <button className="px-6 py-2 rounded-full border-2 border-gray-600 bg-slate-300 hover:bg-[#287279] hover:text-white shadow text-[#287279]">
                Get Started
              </button>
            </div>
          </div>

          {/* <!-- Right Section: Image and Stats --> */}
          <div className="relative mt-8 md:mt-0 md:ml-6">
            {/* <!-- Image --> */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/Group4.png"
                height={400}
                width={600}
                alt="Abstract Background"
                className="object-cover"
              />
            </div>

            {/* <!-- Stats Card --> */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg backdrop-blur-md bg-opacity-80">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">12,000+</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Happy learners rely on us regularly</p>
              <p className="mt-2 text-blue-600 font-semibold">Find your wellbeing</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
