import React from 'react'
import styles from './Sidebar.module.scss'
import { SidebarProps } from './types'
import UserImage from '../../shared/assets/img/profile.png'
import LogoutIcon from '../../shared/assets/icons/logout-icon.svg'
import { Link } from 'react-router-dom'
import { MenuList } from './Sidebar.data'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { setLogout } from '../../modules/auth/auth.slice'

export const Sidebar: React.FC<SidebarProps> = ({className, ...props}) => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const {user, online} = useAppSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(setLogout())
  }

  return (
    <section className={`${className} ${styles.sidebar}`}>
      <div className={styles.top_menu}>
        <div className={styles.profile}>
          <img className={styles.profile_img} src={UserImage} />
          <h5 className={styles.profile_text}>{user?.name}</h5>
          <b>{online ? 'Online' : 'Offline'}</b>
        </div>
        <nav className={styles.nav}>
          {
            MenuList.map(el => (
            <div key={el.alt} className={styles.nav_item}>
              <Link to={el.link} className={styles.nav_link}>
                <img src={el.img} alt={el.alt} className={styles.nav_icon} />
                {el.text}
              </Link>
            </div>
            ))
          }
        </nav>
        {isAuth ?
          <div className={styles.logout}>
              <img src={LogoutIcon} alt="logout" className={styles.nav_icon} />
              <Link to="#" onClick={logoutHandler} className={styles.nav_link}>Выйти</Link>
          </div>
        :
          <div className={styles.logout}>
              <img src={LogoutIcon} alt="login" className={styles.nav_icon} />
              <Link to="/login" className={styles.nav_link}>Ввойти</Link>
          </div>
        }
      </div>
    </section>
  )
}
