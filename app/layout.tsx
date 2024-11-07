import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

// fonts used in the website
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

const glorich = localFont({
  src: './fonts/Glorich-Bold.otf',
  variable: '--font-glorich',
})

const tanker = localFont({
  src: './fonts/Tanker-Regular.otf',
  variable: '--font-tanker',
})

// metadata for the website
export const metadata: Metadata = {
  title: "Ratan.codes",
  description: "Ratan's personal website",
};

// root layout for the website
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tanker.variable} ${pretendard.variable} ${spacer36.variable} 
       ${glorich.variable}`}>
        {children}
      </body>
    </html>
  );
}
