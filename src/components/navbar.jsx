import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="h-20 md:h-23 bg-cream shadow-md z-10 sticky top-0 bg-cream py-4 px-8 flex items-center justify-between">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Image width="100" height="100" src="/logo.png" alt="Kindkain Logo" className="h-8 mr-6 ml-2" />
      </div>

      {/* Middle - Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/about-us" className="text-darktext hover:text-darkpurple font-nunito">About Us</Link>
        <Link href="/why-menstrual-pads" className="text-darktext hover:text-darkpurple font-nunito">Why Menstrual Pads or Cups?</Link>
        <Link href="/browse-products" className="text-darktext hover:text-darkpurple font-nunito">Browse Products</Link>
        <Link href="/partnerships" className="text-darktext hover:text-darkpurple font-nunito">Partnerships</Link>
      </div>

      {/* Right Side - Language Selector and Shop Button */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-darktext py-2 px-4 rounded-full  flex items-center">
          <span>EN</span>
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <Link href="/shop" className="bg-darkpurple text-white py-2 px-6 rounded-full flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16 6V5a3 3 0 00-3-3H7a3 3 0 00-3 3v1H3a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-1zM7 5a1 1 0 011-1h6a1 1 0 011 1v1H7V5z" />
          </svg>
          Shop Our Products
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;