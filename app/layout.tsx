import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StateContext } from "@/context/state-context";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte & Crunch",
  description: "Byte & Crunch is an e-commerce store for foods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>
        <StateContext>
          <Toaster />
          {children}
        </StateContext>
      </body>
    </html>
  );
}
