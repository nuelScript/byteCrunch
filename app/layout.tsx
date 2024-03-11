import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StateContext } from "@/context/state-context";
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider>
      <html lang="en">
        <body className={lexendDeca.className}>
          <StateContext>
            <Toaster />
            {children}
          </StateContext>
        </body>
      </html>
    </SessionProvider>
  );
}
