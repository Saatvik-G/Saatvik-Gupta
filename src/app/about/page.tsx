import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import ScrollToTop from "../components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303]">
        <div className="py-16 space-y-40">
          <About />
          <Skills />
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
