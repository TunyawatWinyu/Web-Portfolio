import Image from "next/image";
import Navbar from "./components/Navbar";
import Aboutme from "./AboutMe/page";
import WorkSection from "./Work/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#141414] px-[72px]">
      <Navbar />
      <main>
        <Aboutme />
        <WorkSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
