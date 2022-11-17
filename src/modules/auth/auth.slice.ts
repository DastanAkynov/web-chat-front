import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IUser } from '../user/user.interface';
import { AuthApi } from './auth.api';
import { IAuthResponse, ILoginData, IRegisterData } from './auth.interface';

export const register = createAsyncThunk<IAuthResponse, IRegisterData, {rejectValue: string}>(
  'auth/register',
  async function (data, {rejectWithValue, dispatch}) {
    return await AuthApi.register(data)
    .then(res => {
      dispatch(setAuth(res.data))
      return res.data
    })
    .catch((err: AxiosError<Error>) => rejectWithValue(err.response?.data.message || 'Ошибка при регистрации'))
  }
)

export const login = createAsyncThunk<IAuthResponse, ILoginData, {rejectValue: string}>(
  'auth/login',
  async function (data, {rejectWithValue, dispatch}) {
    return await  AuthApi.login(data)
    .then(res => {
      dispatch(setAuth(res.data))
      return res.data
    })
    .catch((err: AxiosError<Error>) => {
      return rejectWithValue(err.response?.data.message || 'Ошибка при логине')
    })
  }
)

// export const refresh = createAsyncThunk(
//   'auth/refresh',
//    function (_, { dispatch }) {

//     return true
//   }
// )

type AuthState = {
  isAuth: boolean,
  user: IUser | null,
  token: string | null,
  loading: boolean,
  error: string | null,
  online: boolean
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  token: null,
  loading: false,
  error:  null,
  online: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout(state) {
      state.isAuth = false
      state.user =  null
      state.token = null
      state.loading = false
      state.error =  null
      localStorage.removeItem('isAuth')
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    setAuth(state, action) {
      state.isAuth = Boolean(action.payload.token)
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('isAuth', JSON.stringify(Boolean(action.payload.token)))
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
    },
     setMeOnline: (state) => {
      state.online = true
    },
  },
  extraReducers: (builder) => {
    builder    
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


export const {setLogout, setAuth, setMeOnline}  = authSlice.actions
export default authSlice.reducer