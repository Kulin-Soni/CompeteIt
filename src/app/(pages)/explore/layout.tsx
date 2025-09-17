import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Description",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
        <div>Search bar here</div>
        {children}
    </div>
  );
}
