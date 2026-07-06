import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] flex flex-col justify-center">
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
