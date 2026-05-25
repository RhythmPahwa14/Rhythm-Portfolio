import { Sofia_Sans_Condensed, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Preloader from './components/Preloader';

const sofiaSansCondensed = Sofia_Sans_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "RHYTHM PAHWA | Software Engineer",
  description:
    "Brutalist monochrome portfolio for Rhythm Pahwa, a software engineer focused on conversational AI, Dialogflow, and GCP.",
  author: "Rhythm Pahwa",
  icons: {
    icon: '/favicon.ico',
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sofiaSansCondensed.variable} ${splineSansMono.variable} antialiased transition-colors duration-300`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}