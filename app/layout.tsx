import "./globals.css";
import { inter } from "@/fonts";

import type { Metadata } from "next";

import { Media } from "@/hooks";
import { Header, Contacts } from "@/components";

export const metadata: Metadata = {
  title: "Carpathians Secret",
  description: "Travel website based on next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white overflow-x-hidden`}
      >
        <Media>
          <div className="relative max-w-[1440px] mx-auto">
            <Header />
            {children}
            <Contacts />
          </div>
        </Media>
      </body>
    </html>
  );
}
