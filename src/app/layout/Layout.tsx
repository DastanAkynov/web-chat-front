import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components';
import { setAuth } from '../../modules/auth/auth.slice';
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
