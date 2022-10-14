import { AxiosPromise } from 'axios';
import { api } from '../../app/api';
import { IUserListReponse } from './user.interface';

export const UserApi = {
  list: (): AxiosPromise<IUserListReponse> => api.get('user-list'),
  // getUserById: (id: string): AxiosPromise<IUserReponse<IUser[]>> => api.post('auth/login', id),
}