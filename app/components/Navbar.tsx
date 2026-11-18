import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white">
      <section className="py-[28px] px-[40px]">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-lg font-medium">
            Tunyawat Winyu
          </Link>

          <ul className="flex gap-8 items-center text-sm">
            <li>
              <Link href="#work" className="hover:text-white/50 transition">
                Work
              </Link>
            </li>

            <li>
              <Link href="#about" className="hover:text-white/50 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="#contact" className="hover:text-white/50 transition">
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
