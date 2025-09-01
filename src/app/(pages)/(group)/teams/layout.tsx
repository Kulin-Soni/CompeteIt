import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teams",
  description: "Description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
        <div>Teams</div>
        {children}
    </div>
  );
}
