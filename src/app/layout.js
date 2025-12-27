import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Rhythm Pahwa",
  description: "Portfolio of Rhythm Pahwa",
  author: "Rhythm Pahwa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </body>
    </html>
  );
}
