import Container from "@/app/components/ui/container";
import Image from "next/image";

// components/ServicesSection.js
export const Provide = () => {
  return (
    <section className=" p-8 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">We provide...</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-lg text-gray-600">Personalized routine</p>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-lg text-gray-600">Follow-up after completing courses</p>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-green-500 text-green-500 flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-lg text-gray-800 font-medium">
                  Access to additional resources
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-lg text-gray-600">Free community support</p>
              </li>
            </ul>
            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
              Learn More About Our Services
            </button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <Image
                height={400}
                width={300}
                src="/girl.png"
                alt="Mother and Child"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
                ✓
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}



