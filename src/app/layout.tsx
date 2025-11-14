import type { Metadata } from "next";
import "./globals.css";
import Providers from "../providers/providers"
import { Poppins, Alef } from "next/font/google"
import SidebarLayout from "@/components/SidebarLayout";
const poppins = Poppins({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-c-poppins",
})
const alef = Alef({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-c-alef",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${alef.variable} selection:text-white selection:bg-cyan-800 min-w-screen min-h-screen`}>
        <Providers>
          <div className="h-screen w-screen flex relative">
            <SidebarLayout />
              {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "CompeteIt",
  description: "Description",
};