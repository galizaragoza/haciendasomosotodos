import type { Metadata } from "next";
import { Geist, Geist_Mono, Overpass } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const overpass = Overpass({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Hacienda somos todos",
  description: "Una web que te permite calcular cuánto se queda el Estado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${overpass.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
