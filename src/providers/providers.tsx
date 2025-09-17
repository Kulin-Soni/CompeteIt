import { HeroProvider } from "./hero";
import QueryProvider from "./query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <HeroProvider><QueryProvider>{children}</QueryProvider></HeroProvider>;
}
