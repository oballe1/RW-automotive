import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto Repair & Tire Shop Douglasville GA | RW Automotive",
  description: "Trusted auto repair in Douglasville, GA. Oil changes, brake service, used tires & more. Schedule online or call (404) 429-0256. Open Mon-Sat 8:30-6pm.",
  keywords: ["auto repair Douglasville GA", "tire shop Douglasville", "oil change near me", "brake repair Douglasville", "car mechanic Douglasville"],
  openGraph: {
    title: "Auto Repair & Tire Shop Douglasville GA | RW Automotive",
    description: "Trusted auto repair in Douglasville, GA. Oil changes, brake service, used tires & more.",
    url: "https://rwgeneralautomotiveandtires.com",
    siteName: "RW General Automotive and Tire Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
