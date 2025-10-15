import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componenets/Navbar";
import VantaBackground from "@/componenets/VantaBackground";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Personal developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">
        <VantaBackground />

        <Navbar />
        <div className="pt-16 relative z-10">{children}</div>
      </body>
    </html>
  );
}
