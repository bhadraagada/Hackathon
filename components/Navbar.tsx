import Link from "next/link";

const navItems = [
  { src: "/features", name: "Features" },
  { src: "/contact", name: "Contact" },
  { src: "/impact", name: "Impact" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <p className="font-spaceGrotesk text-[21px] font-bold">LOGONAME</p>
        </Link>
        <div className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.src}
              className="font-spaceGrotesk font-bold"
            >
              {/* Image */}
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
