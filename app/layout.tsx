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

const handmade = localFont({
  src: './fonts/Handmade.otf',
  variable: '--font-handmade',
})

const malven = localFont({
  src: './fonts/Malven.otf',
  variable: '--font-malven',
})

const krishna = localFont({
  src: './fonts/Krishna.otf',
  variable: '--font-krishna',
})

const spacer36 = localFont({
  src: './fonts/Spacer36.otf',
  variable: '--font-spacer36',
})

const deutschlander = localFont({
  src: './fonts/Deutschlander.otf',
  variable: '--font-deutschlander',
})

const glorich = localFont({
  src: './fonts/Glorich-Bold.otf',
  variable: '--font-glorich',
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
      <body className={`${poppins.variable} ${pretendard.variable} ${handmade.variable} ${malven.variable} 
      ${krishna.variable} ${spacer36.variable} ${deutschlander.variable} ${glorich.variable}`}>
        {children}
      </body>
    </html>
  );
}
