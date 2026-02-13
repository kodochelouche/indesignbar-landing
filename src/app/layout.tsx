import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IndesignBar | Hamptons Interior Design Studio",
  description: "Refined interior design for Hamptons living. Full-service residential design from Manhattan to Montauk. Led by Inbar Meitus Sandler.",
  keywords: "interior design hamptons, hamptons interior designer, luxury interior design NYC, manhattan interior designer, hamptons home design",
  openGraph: {
    title: "IndesignBar | Hamptons Interior Design Studio",
    description: "Refined interior design for Hamptons living. Full-service residential design from Manhattan to Montauk.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
