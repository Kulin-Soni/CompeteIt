"use server";
import type {
  AvatarType,
  DataFields,
  DescriptionType,
  LinkType,
  Name,
  UserSettings,
} from "@/types/data";

type LinkPayloads =
  | { type: "add"; data: LinkType }
  | { type: "remove"; id: Pick<LinkType, "id"> }
  | { type: "update"; data: LinkType };
type PayloadMap = {
  [DataFields.Avatar]: AvatarType;
  [DataFields.DisplayName]: Name;
  [DataFields.UserName]: Name;
  [DataFields.Description]: DescriptionType;
  [DataFields.Link]: LinkPayloads;
};

export async function getUserSettings(): Promise<UserSettings> {
  return {
    userProfile: {
      avatar: "https://i.pravatar.cc/300",
      displayName: { name: "Joe Biden", canBeUpdated: true },
      userName: { name: "joebiden00", canBeUpdated: true },
      description: "ABCD",
      showPublic: { competitions: {id: "competitions", show: true}, events: {id: "events", show: true}, giveaways: {id: "giveaways", show: true} },
      links: [],
    },
  };
}

export async function updateUserSettings<K extends DataFields>(props: {
  id: K;
  payload: PayloadMap[K];
}): Promise<UserSettings> {
  return {
    userProfile: {
      avatar: "https://i.pravatar.cc/300",
      displayName: { name: "Joe Biden", canBeUpdated: true },
      userName: { name: "joebiden00", canBeUpdated: true },
      description: "ABCD",
      showPublic: { competitions: {id: "competitions", show: true}, events: {id: "events", show: true}, giveaways: {id: "giveaways", show: true} },
      links: [],
    },
  }
}
