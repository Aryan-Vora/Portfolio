import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className={styles.navbox}>
          <nav>
            <ul>
              <a rel="noopener" target="_self" href="#home">
                Home
              </a>
              <a rel="noopener" target="_self" href="#about">
                About
              </a>
              <a rel="noopener" target="_self" href="#projects">
                Projects
              </a>
              <a
                rel="noopener"
                target="_self"
                href="mailto:voraaryan1@gmail.com"
              >
                Contact
              </a>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
