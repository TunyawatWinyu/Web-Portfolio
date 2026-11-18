import Navbar from "./components/Navbar";
import Aboutme from "./AboutMe/page";
import WorkSection from "./Work/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#141414]">
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
