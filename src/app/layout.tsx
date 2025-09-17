import type { Metadata } from "next";
import "./globals.css";
import Providers from "../providers/providers"
import { Poppins } from "next/font/google"
import SidebarLayout from "@/components/SidebarLayout";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} dark selection:text-white selection:bg-cyan-800 min-w-screen min-h-screen`}>
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