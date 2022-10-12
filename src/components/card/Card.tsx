import React from 'react'
import styles from './Card.module.scss';
import UserAvatar from '../../shared/assets/img/user-avatar.png'

export const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.user}>
          <img className={styles.avatar} src={UserAvatar} alt="avatar" />
          <div className={styles.user_info}>
            <div className={styles.user_title}>Luy Robin</div>
            <div className={styles.user_status}>...writes</div>
          </div>
        </div>
        <div className={styles.head_status}>1 minute ago</div>
      </div>
      <div className={styles.description}>
          Most of its text is made up from sections 1.10.32–3 of Cicero's 
          De finibus bonorum et malorum (On the Boundaries of Goods and Evils;
          finibus may also be translated as purposes). 
      </div>
    </div>
  )
}

