import { IUser } from '../user/user.interface';

export interface IAuthResponse{
  user: IUser | null;
  token: string
} 

export interface IRegisterData {
  name: string
  alias: string;
  password: string
} 

export interface ILoginData {
  alias: string;
  password: string
} 




