import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/framer/Navbar";
import Footer from "@/components/framer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creative Media Agency",
  description: "We help brands grow through design, content, and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        

        {/* Page Content */}
        <main className="relative w-full overflow-x-hidden">
          {children}
        </main>

      </body>
    </html>
  );
}
