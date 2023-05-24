export interface User {
  first_name?: string,
  last_name?: string,
  image?: string,
  phone?:string,
  email?:string,
  country?:string,
  sale_code?:string,
  rank?:string,
  roles: number[],
  new_token?:string,
  old_token?:string,
  created_at?: string,
  updated_at?:string
}

export interface Users {
  users: User[]
}