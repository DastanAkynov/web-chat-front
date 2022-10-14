import React from 'react'
import styles from './Card.module.scss';
import UserAvatar from '../../shared/assets/img/user-avatar.png'
import { Link } from 'react-router-dom';
import { IUser } from '../../modules/user/user.interface';
import { Status } from '../status/Status';

type CardProps = {
  user: IUser
}

export const Card: React.FC<CardProps> = ({user}) => {
  const {_id, name} = user

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.user}>
          <img className={styles.avatar} src={UserAvatar} alt="avatar" />
          <div className={styles.user_info}>
            <div className={styles.user_title}>{name}</div>
            {/* <div className={styles.user_status}>...writes</div> */}
          </div>
        </div>
        <Status status={user.online}/>
      </div>
      <div className={styles.description}>
          Most of its text is made up from sections 1.10.32–3 of Cicero's 
          De finibus bonorum et malorum (On the Boundaries of Goods and Evils;
          finibus may also be translated as purposes). 
      </div>
      <Link className={styles.message_link} to={`/chat/${_id}`}>Написать</Link>
    </div>
  )
}

