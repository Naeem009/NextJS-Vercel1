import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer/page";
import "./globals.css";
import Navigation from "./navigation/navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment by Naeem Shahzad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: 'absolute'}}>
        <Navigation></Navigation>        
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
