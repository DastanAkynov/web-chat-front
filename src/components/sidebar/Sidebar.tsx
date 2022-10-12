import React from 'react'
import styles from './Sidebar.module.scss'
import { SidebarProps } from './types'
import UserImage from '../../shared/assets/img/profile.png'
import LogoutIcon from '../../shared/assets/icons/logout-icon.svg'
import { Link } from 'react-router-dom'
import { MenuList } from './Sidebar.data'

export const Sidebar: React.FC<SidebarProps> = ({className, ...props}) => {
  return (
    <section className={`${className} ${styles.sidebar}`}>
      <div className={styles.top_menu}>
        <div className={styles.profile}>
          <img className={styles.profile_img} src={UserImage} />
          <h5 className={styles.profile_text}>Henry Jabbawockiez</h5>
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
        <div className={styles.logout}>
            <img src={LogoutIcon} alt="logout" className={styles.nav_icon} />
            <Link to="#" className={styles.nav_link}>LOG OUT</Link>
        </div>
      </div>
    </section>
  )
}
