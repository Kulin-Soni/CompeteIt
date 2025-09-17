import { getUserSettings, updateUserSettings } from '@/actions/userSettings'
import { UserSettings } from '@/types/data';
import { queryOptions, useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'


const QUERY_KEY = "userSettings";
export const userSettings = queryOptions({
  queryKey: [QUERY_KEY],
  queryFn: async () => getUserSettings(),
})


export const useUserSettings = ()=>{
  const { data: currentUserProfile } = useSuspenseQuery(userSettings);
  return currentUserProfile;
}

export const useUserSettingsMutation = ()=>{
  const queryClient = useQueryClient();
  return useMutation<UserSettings, Error, Parameters<typeof updateUserSettings>[0]>({
    mutationFn: updateUserSettings,
    onSuccess: (data)=>{
      queryClient.setQueryData([QUERY_KEY], ()=>data)
    }
  })
}