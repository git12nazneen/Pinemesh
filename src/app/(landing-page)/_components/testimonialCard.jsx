import Image from "next/image";

const TestimonialCard = ({ name, quote, imageUrl }) => {
  return (
    <div className="max-w-sm p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {/* Profile Image */}
        <div className="rounded-full">
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            className="rounded-full"
            width={80}
            height={100}
          />
        </div>
        {/* Name */}
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
      </div>
      {/* Quote */}
      <blockquote className="text-gray-600 italic">
        “{quote}”
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
