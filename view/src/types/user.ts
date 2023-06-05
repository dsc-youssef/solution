export interface UserPagesRoles {
  pages_roles: string[],
}

export interface UserActionsRoles {
  actions_roles: string[],
}

export interface UserModalsRoles {
  modals_roles: string[],
}

export interface UserPublicData extends UserModalsRoles, UserActionsRoles, UserPagesRoles {
  first_name: string,
  last_name: string,
  image: string|null,
  phone: string,
  email: string,
  country: string,
  sale_code:string,
  token: string
}

export interface UserPrivateData {
  username: string,
  password: string|number,
  created_at: string,
  updated_at:string
}

export interface UserLoginRequest {
  username: string,
  password: string,
  stayLogin?: boolean
}

export interface User extends UserPublicData, UserPrivateData {}



