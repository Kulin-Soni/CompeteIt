import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { userSettings } from "@/queries/userSettings";
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(userSettings);
  return (
    <div className="w-full h-full flex justify-center overflow-hidden bg-primary relative">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="h-full w-full max-w-5xl flex">{children}</div>
      </HydrationBoundary>
    </div>
  );
}
