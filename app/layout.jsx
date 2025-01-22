import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Aryan Vora's Portfolio",
  description:
    'I’m Aryan Vora, a Computer Science student at UC Santa Cruz, graduating early in June 2025. Passionate about full-stack development, I’m seeking roles to contribute and tackle meaningful problems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
