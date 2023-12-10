import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
