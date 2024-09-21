import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

// fonts used in the website
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const lovecookies = localFont({
  src: './fonts/LoveCookies.otf',
  variable: '--font-lovecookies',
})

const handmade = localFont({
  src: './fonts/Handmade.otf',
  variable: '--font-handmade',
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
      <body className={`${poppins.variable} ${pretendard.variable} ${lovecookies.variable} ${handmade.variable}`}>
        {children}
      </body>
    </html>
  );
}
