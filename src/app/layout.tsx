import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "👋 Hello, Render",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/*
        TODO: Re-add navbar when there's something worth navving to
        <Navbar />
        */}
        <main className="pb-20 lg:pb-28">{children}</main>
      </body>
    </html>
  );
}
