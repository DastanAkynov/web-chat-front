import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IUser, IUserListReponse } from '../user/user.interface';
import { UserApi } from './user.api';

export const getUserList = createAsyncThunk<IUserListReponse, void, {rejectValue: string}>(
  'auth/getUserList',
  async function (_, {rejectWithValue}) {
    return await UserApi.list()
    .then(res => {
      return res.data
    })
    .catch((err: AxiosError<Error>) => rejectWithValue(err.response?.data.message || 'Ошибка при получении пользователей'))
  }
)

type UserState = {
  currentUser: IUser | null,
  userList: IUser[],
  total: number,
  loading: boolean,
  error: string | null,
}

const initialState: UserState = {
  currentUser: null,
  userList: [],
  total: 0,
  loading: false,
  error:  null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserOnline(state, action: PayloadAction<Pick<IUser, 'alias'>>) {
      state.userList.forEach(user => {
        if(user.alias === action.payload.alias) {
          user.online = true
        }
      })
    },
    setUserListOnline(state, action: PayloadAction<string[]>) {
      state.userList.forEach(el => {
        if(action.payload.includes(el.alias)) {
          el.online = true
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.fulfilled, (state, action) => {
        state.userList = action.payload.userList
      })  
      .addMatcher((action: AnyAction) => action.type.endsWith('/pending'), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((action: AnyAction) => action.type.endsWith('/rejected'), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addMatcher((action: AnyAction) => action.type.endsWith('/fulfilled'), (state) => {
        state.loading = false;
      })
  }
})


export const {setUserOnline, setUserListOnline}  = userSlice.actions
export default userSlice.reducer