export enum DataFields {
  Avatar = "avatar",
  DisplayName = "displayname",
  UserName = "username",
  Description = "description",
  Link = "link"
}

export type LinkType = {
    id: string,
    label: string,
    url: string,
    type: "github" | "linkedin" | "twitter" | "other"
  }
export type AvatarType = string;
export type Name = string;
export interface NamesType {
    name: Name,
    canBeUpdated: boolean
}
export type DescriptionType = string;

export interface Field {
  id: string,
  show: boolean
}
export interface ShowPublicType {
    competitions: Field,
    events: Field,
    giveaways: Field
}
export interface UserProfile {
  avatar: AvatarType;
  displayName: NamesType,
  userName: NamesType,
  description?: DescriptionType,
  links: LinkType[],
  showPublic: ShowPublicType
}


export interface GeneralSettings {
  something: true
}


export interface UserSettings {
  userProfile: UserProfile,
  general?: GeneralSettings
}