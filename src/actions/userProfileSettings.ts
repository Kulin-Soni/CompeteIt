"use server";
import type {
  AvatarType,
  Description,
  LinkType,
  Name,
  NamesType,
  ShowPublicType,
  UserProfileSettings,
} from "@/app/(pages)/settings/types";
import { UserProtect } from "@/types/actionAuth";
function Success<T>(payload: T) {
  return {code: 1, data: payload}
}
function Failed<T>(warning: T){
  throw { code: 0, warning: warning }
}

export async function getUserSettings(): Promise<UserProfileSettings> {
  return {
    userProfile: {
      avatar: "https://i.pravatar.cc/300",
      displayName: { name: "Joe Biden", canBeUpdated: true },
      userName: { name: "joebiden00", canBeUpdated: true },
      description: "ABCD",
      showPublic: [{id: "competitions", show: false, displayName: "Competition"}, {id: "events", show: true, displayName: "Event"}, {id: "giveaways", show: true, displayName: "Giveaway"}],
      links: [],
    },
  };
}

export async function updateProfilePicture(imageFile: UserProtect<File>) {
  return Success<AvatarType>("https://i.pravatar.cc/300");
}
export async function updateUsername(newName: UserProtect<Name>)  {
  return Success<NamesType>({name: newName.actionData, canBeUpdated: false});
}
export async function updateDisplayname(newName: UserProtect<Name>) {
  return Success<NamesType>({name: newName.actionData, canBeUpdated: false});
}
export async function updateDescription(newDescription: UserProtect<Description>) {
  return Success<Description>(newDescription.actionData);
}
export async function addSocialLink(linkData: UserProtect<Omit<LinkType, "id" | "type">>) {
  const id = `${Math.random()}`;
  return Success<LinkType>({id: id, label: linkData.actionData.label, type: "other", url: linkData.actionData.url});
}
export async function removeSocialLink(linkData: UserProtect<LinkType["id"]>) {
   return Success<LinkType["id"]>(linkData.actionData);
}
export async function updateSocialLink(linkData: LinkType) {
  return Success<LinkType>(linkData);
}
export async function updateVisibilityData(visibilityData: ShowPublicType) {
  return Success<ShowPublicType>(visibilityData);
}

