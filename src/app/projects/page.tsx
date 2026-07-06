import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] flex flex-col justify-center">
        <Projects />
      </main>
      <ScrollToTop />
    </>
  );
}
