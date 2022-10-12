import React from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import styles from './Layout.module.scss';

const Layout = () => {
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
