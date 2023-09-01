import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wordly",
  description: "Create your own blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-stone-100 text-slate-950 ${poppins.className} min-h-[100vh] min-w-[100vw] max-w-[100vw]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
