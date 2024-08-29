import React from 'react';
import Image from 'next/image';

const Impact = () => {
  return (
    <div className="text-white-1 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Impact</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/images/impact1.jpg"
            alt="Impact 1"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-10">
          <p className="text-lg mb-4">
            At SureShare, we are dedicated to creating real-world solutions for real-world problems. By streamlining the public distribution of food and essential supplies, we ensure that these critical resources reach those who need them most.
          </p>
          <p className="text-lg">
            Our efforts help reduce hunger, alleviate poverty, and promote community well-being. Through our innovative tracking system and transparent processes, we empower communities, foster trust, and make a meaningful difference in people's lives every day.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0 md:order-2">
          <Image
            src="/images/impact2.jpg"
            alt="Impact 2"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:mr-10">
          <p className="text-lg mb-4">
            By bridging the gap between surplus and scarcity, SureShare is playing a vital role in reducing hunger and alleviating poverty. We work tirelessly to reach underserved areas, ensuring that vulnerable populations have access to nutritious food and daily essentials.
          </p>
          <p className="text-lg">
            Our initiatives empower individuals and communities to take control of their future, promoting sustainability and reducing waste in the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
