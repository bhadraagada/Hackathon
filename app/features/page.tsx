import { features } from '@/constants';
import React from 'react';


const Features = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-500">Key Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal-500">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
