import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha Solutions",
  description: "One Stop for Technological Solutions | Alpha Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        <Navbar />
        <div className="Pavin">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
