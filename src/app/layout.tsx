import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";


export const metadata: Metadata = {
  title: "Semaxio",
  description: "Semaxio example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
