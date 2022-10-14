import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Sidebar } from '../../components';
import { updateUserInList } from '../../modules/actions';
import { setAuth } from '../../modules/auth/auth.slice';
import { IUser } from '../../modules/user/user.interface';
import socket from '../socket';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import styles from './Layout.module.scss';

const Layout = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth) {
      const isAuthFromStrorage =  JSON.parse(localStorage.getItem('isAuth') as string)
      const userFromStrorage =  JSON.parse(localStorage.getItem('user') as string);
      const tokenFromStrorage = JSON.parse(localStorage.getItem('token') as string)
      const authData = {isAuth: isAuthFromStrorage, user: userFromStrorage, token: tokenFromStrorage}
      if(!isAuthFromStrorage) navigate('/auth/login')
      dispatch(setAuth(authData))
    }
  }, [isAuth, navigate])


  useEffect(() => {
    socket.connect()
    socket.on('updateUser', (data: IUser) => {
    console.log('updateUser', data)
     dispatch(updateUserInList(data))
    })
    return () => {
      socket.disconnect()
    }
  }, [isAuth])


  
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar}/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
