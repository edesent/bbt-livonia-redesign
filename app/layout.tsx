import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bethel Baptist Church Livonia",
  description:
    "A modern redesign concept for Bethel Baptist Church in Livonia, Michigan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
