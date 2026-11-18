import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full text-white">
      <section className="max-w-280 mx-auto py-6 md:py-7 px-6 md:px-10 lg:px-10">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link
            href="#home"
            className="text-base md:text-lg font-medium whitespace-nowrap"
          >
            Tunyawat Winyu
          </Link>

          {/* Navigation */}
          <ul className="flex gap-4 sm:gap-6 md:gap-8 items-center text-xs sm:text-sm">
            <li>
              <Link
                href="#work"
                className="hover:text-white/50 transition-colors"
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="hover:text-white/50 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="hover:text-white/50 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
