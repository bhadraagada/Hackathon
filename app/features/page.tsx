import React from 'react';

const Features = () => {
  return (
    <div className="p-10 bg-gray-900 text-white">
      <h1 className="text-4xl-white font-bold text-center mb-8 text-teal-400">Key Features</h1>
      <ul className="list-disc list-inside text-lg max-w-2xl mx-auto">
        <li className="mb-4">
          <strong className="text-teal-400">Blockchain Security:</strong> Ensure transparency and security in public distribution through immutable blockchain records.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Real-Time Tracking:</strong> Monitor the distribution process in real-time to prevent leaks and ensure resources reach the right beneficiaries.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Smart Contracts:</strong> Automate the release of resources based on predefined criteria, minimizing human intervention and errors.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">User-Friendly Interface:</strong> Easy-to-use platform for both administrators and beneficiaries, ensuring accessibility for all users.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Scalability:</strong> Designed to handle large-scale distribution programs, adaptable to various regions and requirements.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Data Analytics:</strong> Leverage detailed analytics to optimize resource allocation, predict needs, and improve overall efficiency.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Multi-Channel Notifications:</strong> Keep stakeholders informed via SMS, email, or app notifications to enhance communication and transparency.
        </li>
        <li className="mb-4">
          <strong className="text-teal-400">Customizable Reports:</strong> Generate tailored reports for different stakeholders, providing insights into distribution performance and impact.
        </li>
      </ul>
    </div>
  );
}

export default Features;
