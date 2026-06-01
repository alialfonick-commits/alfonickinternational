import type { Metadata } from "next";
import { Archivo, Inter, Unbounded } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfonick International",
  description: "Marketing agency for creative business solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${unbounded.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://db.onlinewebfonts.com/c/aa4a0305ca8b9f59618acc4c461e514a?family=TrumpGothicPro"
          rel="stylesheet"
        />
      </head>

      <body className={`${archivo.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}