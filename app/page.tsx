import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white-1 text-center">
        <h1 className="text-4xl font-bold">SURE SHARE</h1>
        <p className="mt-4 text-lg">
          Welcome to SURE SHARE, a Blockchain-Based Public Distribution System.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      <section className="flex flex-col items-center mt-12">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <Link href="/aboutus">
          <div className="group cursor-pointer p-6 bg-gray-800 hover:bg-gray-600 transition-colors duration-300 rounded-lg flex items-center">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="ml-6">
              <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                Who We Are
              </h3>
              <p className="mt-2 text-gray-300">
                We are dedicated to creating a secure and efficient public distribution system using blockchain technology.
              </p>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
