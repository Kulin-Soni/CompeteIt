/* Profile */
export type LinkType = {
    id: string,
    label: string,
    url: string,
    type: "github" | "linkedin" | "twitter" | "other"
  }
export type AvatarType = string;
export type Name = string;
export type Description = string;
export interface NamesType {
    name: Name,
    canBeUpdated: boolean
}
export interface ShowPublicType {
  id: string,
  show: boolean
  displayName: string,
}
export interface UserProfile {
  avatar: AvatarType;
  displayName: NamesType,
  userName: NamesType,
  description?: Description,
  links: LinkType[],
  showPublic: ShowPublicType[]
}
export interface UserSettings {
  userProfile: UserProfile,
}
/* Profile */



/* Privacy */
// export interface PrivacyAndSecuritySettings {}
/* Privacy */



