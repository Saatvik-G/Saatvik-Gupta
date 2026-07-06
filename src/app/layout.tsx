import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Saatvik Gupta | Portfolio",
  description: "Personal portfolio website of Saatvik Gupta, a 3rd year Computer Science student at PES University, specializing in Cloud computing, Artificial Intelligence, Data Analytics, and Cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-gray-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
