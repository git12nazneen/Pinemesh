'use client'
import Image from "next/image";

export default function CourseCard({ 
  image, 
  tags, 
  title, 
  rating, 
  lessons, 
  duration, 
  instructor, 
  instructorImage, 
  price 
}) {
  return (
    <div className="max-w-sm mx-auto rounded-lg border border-gray-200 shadow-lg overflow-hidden bg-white group-hover:bg-green-100">
      {/* Card Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex space-x-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium bg-[#edf2d4] border-red-300 text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center text-sm text-yellow-500 mb-3">
          ⭐ {rating}
        </div>

        {/* Course Info */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>⏱️ {duration}</span>
          <span>📚 {lessons} Lessons</span>
        </div>

        {/* Instructor */}
        <div className="flex justify-between items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="flex">
            <Image
              src={instructorImage}
              alt={instructor}
              width={32}
              height={32}
              objectFit="cover"
            />
              
          </div>
          <span className="text-sm font-medium text-gray-800">{instructor}</span>
          </div>
           {/* Price */}
        <div className="text-lg font-semibold text-gray-900">${price}</div>
        </div>

       
      </div>
    </div>
  );
}
