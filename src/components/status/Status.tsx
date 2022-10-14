import React from 'react'
import styles  from './Status.module.scss'

type StatusProps = {
  status: boolean
}

export const Status: React.FC<StatusProps> = ({status}) => {
  if(status) return <p className={styles.online}>Online</p>
  return <p className={styles.offline}>Offline</p>
}
