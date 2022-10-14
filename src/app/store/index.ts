import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from '../../modules/reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



