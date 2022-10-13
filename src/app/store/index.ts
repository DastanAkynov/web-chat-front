import { configureStore } from '@reduxjs/toolkit';
import { authRefucer } from '../../modules/reducers';

const store = configureStore({
  reducer: {
    auth: authRefucer
  },
  devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



