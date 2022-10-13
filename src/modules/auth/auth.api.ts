import { AxiosPromise } from 'axios';
import { api } from '../../app/api';
import { IAuthResponse, ILoginData, IRegisterData } from './auth.interface';

export const AuthApi = {
  register: (data: IRegisterData): AxiosPromise<IAuthResponse> => api.post('auth/register', data),
  login: (data: ILoginData): AxiosPromise<IAuthResponse> => api.post('auth/login', data),
}