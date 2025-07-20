import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Cursor from '../components/Cursor/Cursor';
import { AudioProvider } from "../contexts/AudioContext";
import GlobalClickHandler from "../components/GlobalClickHandler";

// Keep your existing font definitions
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const spacer36 = localFont({
  src: './fonts/Spacer36.otf',
  variable: '--font-spacer36',
})


// metadata for the website
export const metadata: Metadata = {
  title: "Ratan Rathod",
  description: "Ratan's personal portfolio website",
};

// root layout for the website
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={`${pretendard.variable} ${spacer36.variable}`}>
      <AudioProvider>
        <GlobalClickHandler />
        <Cursor />
        {children}
      </AudioProvider>
    </body>
    </html>
  )
}
