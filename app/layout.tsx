import { noto_serif } from "@/public/assets/fonts/font";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body
        style={{
          fontFamily: `${noto_serif.className}`,
        }}
        className="bg-[#F4F1E7]"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
