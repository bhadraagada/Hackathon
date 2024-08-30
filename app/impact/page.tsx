import React from 'react';
import Image from 'next/image';

const Impact = () => {
  return (
    <div className="bg-gradient-to-b from-white-1 via-white-1 to-gray-100 p-12 shadow-xl">
      <h1 className="text-5xl font-extrabold text-center text-teal-300 mb-12">
        Our Impact
      </h1>

      {/* First Impact Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/assets/images/impact1.jpeg"
            alt="Impact 1"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="md:w-1/2 md:ml-10">
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            At SureShare, we are dedicated to creating real-world solutions for pressing challenges. By optimizing the public distribution of food and essential supplies, we ensure that these vital resources reach those who need them most.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our initiatives reduce hunger, alleviate poverty, and promote community well-being. Through innovative tracking and transparent processes, we empower communities, build trust, and make a meaningful impact in people&apos;s lives every day.
          </p>
        </div>
      </div>

      {/* Second Impact Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 md:order-2">
          <Image
            src="/assets/images/impact2.jpeg"
            alt="Impact 2"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="md:w-1/2 md:mr-10">
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            SureShare plays a crucial role in bridging the gap between surplus and scarcity. We strive to reach underserved areas, ensuring that vulnerable populations have access to nutritious food and essential supplies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our efforts empower individuals and communities to take charge of their futures, fostering sustainability and minimizing waste along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
