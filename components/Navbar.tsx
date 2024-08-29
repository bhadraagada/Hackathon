import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
// import { useUser } from '@clerk/nextjs/client';

const navItems = [
  { src: "/features", name: "Features" },
  { src: "/impact", name: "Impact" },
  {src: "/track", name: "Track"},
  {src: "/about", name: "About"},
];

const Navbar = () => {
  // const {user} = useUser();

  return (
    <header className="w-full bg-white-5 border-b border-white-6">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <p className="font-spaceGrotesk text-[21px] font-bold">Sure<span className="text-blue-700">Share</span></p>
        </Link>
        <div className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.src}
              className="font-spaceGrotesk font-bold "
            >
              {/* Image */}
              <div className="active:scale-[0.9] border border-black-6 rounded-lg p-3 hover:bg-black-6 hover:text-white-5 transition-all">

              {item.name}
              </div>
            </Link>
          ))}
          <Button size={"lg"} className="font-spaceGrotesk text-[16px] font-bold py-4 transition-all">
            <SignInButton />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
