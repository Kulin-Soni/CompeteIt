import { addSocialLink, getUserSettings, updateDescription, updateDisplayname, updateProfilePicture, updateSocialLink, updateUsername, updateVisibilityData } from "@/actions/userSettings";
import { UserSettings } from "@/app/(pages)/settings/types";
import {
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { produce } from "immer";

const QUERY_KEY = ["userSettings"];
export const userSettings = queryOptions({
  queryKey: QUERY_KEY,
  queryFn: async () => getUserSettings(),
});

export const useUserSettings = () => {
  const { data: currentUserProfile } = useSuspenseQuery(userSettings);
  return currentUserProfile;
};
export const useUpdateUserSettings = ()=>{
  const queryClient = useQueryClient();

  const UpdateProfilePicture = () => {
    return useMutation({
      mutationFn: updateProfilePicture,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.avatar = data.data
        }))
      },
    });
  };
  const UpdateUserName = () => {
    return useMutation({
      mutationFn: updateUsername,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.userName = data.data
        }))
      },
    });
  };
  
  const UpdateDisplayName = () => {
    return useMutation({
      mutationFn: updateDisplayname,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.displayName = data.data
        }))
      },
    });
  };

  const UpdateDescription = () => {
    return useMutation({
      mutationFn: updateDescription,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.description = data.data
        }))
      },
    });
  };
  
  const AddSocialLink = () => {
    return useMutation({
      mutationFn: addSocialLink,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.links.push(data.data)
        }))
      },
    });
  };
  
  const RemoveSocialLink = () => {
    return useMutation({
      mutationFn: updateDescription,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.links.filter(i=>i.id!=data.data)
        }))
      },
    });
  };

  const UpdateSocialLink = () => {
    return useMutation({
      mutationFn: updateSocialLink,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          draft.userProfile.links.map(i=>i.id==data.data.id?{...data.data}:i)
        }))
      },
    });
  };

  const UpdateVisibility = () => {
    return useMutation({
      mutationFn: updateVisibilityData,
      onSuccess: (data) => {
        queryClient.setQueryData(QUERY_KEY, (prev: UserSettings): UserSettings =>produce(prev, draft => {
          const i = draft.userProfile.showPublic;
          
        }))
      },
    });
  };
  

  return { UpdateProfilePicture, UpdateDisplayName, UpdateUserName, UpdateDescription, AddSocialLink, RemoveSocialLink, UpdateSocialLink }
}