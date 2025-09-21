/* User Data While Actions (Auth) */
export interface UserProtectedData {
  token: string
}
export type UserProtect<K = unknown> = {
    user: UserProtectedData,
    actionData: K
}
//