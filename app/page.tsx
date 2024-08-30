import Image from "next/image";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center mt-12">
        <h1 className="text-6xl font-extrabold text-teal-300">SURE SHARE</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-gray-200">
          Welcome to SURE SHARE, a Blockchain-Based Public Distribution System
          designed to ensure transparency, security, and efficiency in public
          resource distribution.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/features">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col items-center mt-20">
        <h2 className="text-4xl font-bold mb-8 text-teal-300">About Us</h2>
        <Link href="/aboutus">
          <div className="group cursor-pointer p-8 bg-gray-800 hover:bg-gray-600 transition-colors duration-300 rounded-lg flex items-center shadow-lg">
            <div className="ml-8">
              <div className="flex justify-start items-center gap-2 text-white-1 group-hover:text-teal-300 transition-colors duration-300">
                <FiUsers className="scale-2 bold" />
                <h3 className="text-2xl font-semibold text-white ">
                  Who We Are
                </h3>
              </div>
              <p className="mt-2 text-gray-300 leading-relaxed">
                We are dedicated to creating a secure and efficient public
                distribution system using blockchain technology. Our mission is
                to bring transparency and accountability to resource
                distribution.
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Featured Section */}
      <section className="mt-20 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-300">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              Innovative Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We leverage cutting-edge blockchain technology to ensure that
              resources are distributed efficiently, securely, and
              transparently.
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              Global Impact
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our platform is designed to scale and adapt to the needs of
              diverse populations, ensuring that everyone benefits from the fair
              distribution of resources.
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              User-Centric Design
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We prioritize the user experience by providing an intuitive and
              accessible platform for both administrators and beneficiaries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
