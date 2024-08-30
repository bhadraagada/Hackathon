import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative text-white bg-white-1">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/images/background-aboutus.jpg")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-10 bg-opacity-70 bg-white-1">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/assets/images/aboutus1.jpeg"
              alt="About Us 1"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-10">
            <ul className="text-lg list-disc list-inside">
              <li className="mb-4">
                <strong>Our Purpose:</strong> To make a meaningful difference in
                the lives of those who need it most.
              </li>
              <li className="mb-4">
                <strong>Our Mission:</strong> Simplifying and streamlining the
                public distribution process to ensure essential resources reach
                those in need.
              </li>
              <li className="mb-4">
                <strong>Our Foundation:</strong> Built on the principles of
                community, collaboration, and care.
              </li>
              <li className="mb-4">
                <strong>Our Approach:</strong> Working with local organizations,
                government agencies, and volunteers to create a robust network
                for resource distribution.
              </li>
            </ul>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:order-2">
            <Image
              src="/assets/images/a.jpg"
              alt="About Us 2"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:mr-10">
            <ul className="text-lg list-disc list-inside">
              <li className="mb-4">
                <strong>Partner With Us:</strong> Join a community committed to
                fostering kindness, empathy, and solidarity.
              </li>
              <li className="mb-4">
                <strong>Our Vision:</strong> A future where no one goes hungry,
                and resources are fairly allocated.
              </li>
              <li className="mb-4">
                <strong>Your Role:</strong> Whether through donating,
                volunteering, or spreading the word, your involvement makes a
                tangible impact.
              </li>
              <li className="mb-4">
                <strong>Our Promise:</strong> At SureShare, we are not just
                distributing food and supplies – we are distributing hope,
                dignity, and opportunity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section with Collaboration Form */}
      <footer className="bg-gray-100 text-gray-800 p-10">
        <div className="text-center mb-8 bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Collaboration</h2>
          <p className="mt-4 text-lg">
            Join us in our mission to make a difference. Fill out the form below
            to collaborate with us.
          </p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center">
          <form className="w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="How can we collaborate?"
                className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
