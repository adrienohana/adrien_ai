import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adrien.ai'),
  title: "Adrien O'Hana - AI Engineer Portfolio",
  description: "AI Engineer proficient in Python, machine learning, and artificial intelligence. Portfolio showcasing projects in data science, NLP, and robotics.",
  keywords: ["AI Engineer", "Data Scientist", "Machine Learning", "NLP", "Python", "EPFL", "Effixis"],
  authors: [{ name: "Adrien O'Hana" }],
  openGraph: {
    title: "Adrien O'Hana - AI Engineer Portfolio",
    description: "AI Engineer proficient in Python, machine learning, and artificial intelligence. Portfolio showcasing projects in data science, NLP, and robotics.",
    url: "https://adrien.ai",
    siteName: "Adrien O'Hana Portfolio",
    images: [
      {
        url: "/adrien-ohana.jpg",
        width: 1200,
        height: 630,
        alt: "Adrien O'Hana - AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrien O'Hana - AI Engineer Portfolio",
    description: "AI Engineer proficient in Python, machine learning, and artificial intelligence.",
    images: ["/adrien-ohana.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/adrien-ohana.jpg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
