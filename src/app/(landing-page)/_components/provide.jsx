import Container from "@/app/components/ui/container";
import Image from "next/image";

// components/ServicesSection.js
export const Provide = () => {
  return (
    <section className="p-2 lg:p-8 bg-white py-20 lg:py-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Text Content */}
          <div className="md:w-1/2 space-y-7 lg:space-y-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 px-6">We provide...</h2>
            <ul className="space-y-8 px-6">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#287279] text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-base md:text-lg text-gray-600">Personalized routine</p>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#287279] text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-base md:text-lg text-gray-600">Follow-up after completing courses</p>
              </li>
              <hr />
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-[#287279] text-[#287279] flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-base md:text-lg text-gray-800 font-medium">
                  Access to additional resources
                </p>
              </li>
              <p className="px-6 md:px-10 text-sm md:text-base text-gray-600">
                We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.
              </p>
              <hr />
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#287279] text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-base md:text-lg text-gray-600">Free community support</p>
              </li>
            </ul>
          
            <button className="px-6 py-2 rounded-full border-2 border-gray-600 bg-slate-300 hover:bg-[#287279] hover:text-white shadow text-[#287279]">
              Learn More About Our Services
            </button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <Image
                height={600}
                width={600}
                src="/girl.png"
                alt="Mother and Child"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-[#287279] text-white flex items-center justify-center rounded-full">
                ✓
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
