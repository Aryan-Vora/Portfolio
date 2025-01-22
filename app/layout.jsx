import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Aryan Vora's Portfolio",
  description:
    "Aryan Vora's portfolio showcasing full-stack development projects, software engineering skills, and tech internships.",
  keywords:
    'full-stack developer, software engineer, tech internships, web development, backend, frontend, UC Santa Cruz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
