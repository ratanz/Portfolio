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

export const metadata: Metadata = {
  title: "Ratan.codes",
  description: "Ratan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pretendard.variable}`}>
        {children}
      </body>
    </html>
  );
}
