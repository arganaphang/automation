import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Hello World",
  description: "Hello World",
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
