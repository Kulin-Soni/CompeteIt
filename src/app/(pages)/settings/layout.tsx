import { getQueryClient } from "@/lib/get-query-client";
import { userProfileSettings } from "@/queries/userProfileSettings";
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(userProfileSettings);
  return (
    <div className="w-full h-full flex justify-center overflow-hidden bg-primary relative">
        <div className="h-full w-full max-w-[80rem] flex">{children}</div>
    </div>
  );
}
