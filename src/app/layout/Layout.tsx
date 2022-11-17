import axios, { AxiosRequestConfig } from 'axios';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components';
import { setAuth } from '../../modules/auth/auth.slice';
import { Login } from '../../pages';
import { api } from '../api';
import { WebsocketProvider } from '../context/WebSocketContext';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import styles from './Layout.module.scss';

const Layout = () => {
  const dispatch = useAppDispatch()
  const {isAuth, token} = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  

  useEffect(() => {
    if(!isAuth) {
      const isAuthFromStrorage =  JSON.parse(localStorage.getItem('isAuth') as string)
      const userFromStrorage =  JSON.parse(localStorage.getItem('user') as string);
      const tokenFromStrorage = JSON.parse(localStorage.getItem('token') as string)
      const authData = {isAuth: isAuthFromStrorage, user: userFromStrorage, token: tokenFromStrorage}
      if(!isAuthFromStrorage) navigate('/login')
      dispatch(setAuth(authData))
    }

    api.interceptors.request.use(function (config: AxiosRequestConfig) {
      const accessToken = token ||  JSON.parse(localStorage.getItem('token') as string) || '';
      if (config.headers) config.headers.Authorization = accessToken;
      return config;
    });
  }, [isAuth, navigate])
  
  return isAuth ? 
    <WebsocketProvider>
      <div className={styles.wrapper}>
        <Sidebar className={styles.sidebar}/>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </WebsocketProvider>
  : <Login />
}

export default Layout;
