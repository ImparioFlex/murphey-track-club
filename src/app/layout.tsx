import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterBanner from "@/components/NewsletterBanner";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grassroots Elite | Greenville, SC Running Club",
  description:
    "The running club you've been looking for. Elite coaching, real community, and the best miles of your life. Based in Greenville, SC.",
  icons: {
    icon: "/logos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <NewsletterBanner />
        <Footer />
      </body>
    </html>
  );
}
