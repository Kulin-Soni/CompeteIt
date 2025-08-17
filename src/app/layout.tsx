import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompeteIt",
  description: "Description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`selection:text-white selection:bg-cyan-800`}>
        {children}
      </body>
    </html>
  );
}
