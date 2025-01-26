import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Aryan Vora's Portfolio",
  description:
    "Aryan Vora's portfolio showcasing full-stack development projects, software engineering skills, and tech internships.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
