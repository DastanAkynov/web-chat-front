export interface IUser {
  _id: string,
  name: string,
  alias: string,
  description?: string,
  online: boolean,
  createdAt?: string,
  updatedAt?: string
}

export interface IUserListReponse {
  userList: IUser[],
  total?: number
}