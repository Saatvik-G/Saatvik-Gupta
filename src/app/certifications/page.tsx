import Navbar from "../components/Navbar";
import Certifications from "../components/Certifications";
import ScrollToTop from "../components/ScrollToTop";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#030303] flex flex-col justify-center">
        <Certifications />
      </main>
      <ScrollToTop />
    </>
  );
}
