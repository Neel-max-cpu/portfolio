import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-poppins",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable}  ${poppins.variable} antialiased`}
        className={`${poppins.variable} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Toaster
          toastOptions={{
            className:"",
            style:{
              fontSize:'13px'
            },
          }}
        />
      </body>
    </html>
  );
}
