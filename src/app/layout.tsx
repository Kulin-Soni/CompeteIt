import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
export const metadata: Metadata = {
  title: "CompeteIt",
  description: "Description",
};


import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} selection:text-white selection:bg-cyan-800`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
