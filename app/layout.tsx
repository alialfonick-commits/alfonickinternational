import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
// import { cn } from "@/lib/utils";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfonick International",
  description: "Marketing agency for creative business solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
