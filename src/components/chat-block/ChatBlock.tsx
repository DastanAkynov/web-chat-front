import React, { useEffect, useState } from 'react'
import styles from './ChatBlock.module.scss'
import UserAvatar from '../../shared/assets/img/user-avatar.png'
import FileIcon from '../../shared/assets/icons/file-icon.svg'
import MoreIcon from '../../shared/assets/icons/more-icon.svg'
import SendIcon from '../../shared/assets/icons/send-icon.svg'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { useParams } from 'react-router-dom'
import { IUser } from '../../modules/user/user.interface'
import { Status } from '../status/Status'

type ChatBlockProps = {
  userId: string
}

export const ChatBlock: React.FC<ChatBlockProps> = () => {
  const {id} = useParams()
  const user = useAppSelector(state => state.user.userList.find(user => user._id === id)) as IUser

  if(!user) return null
  console.log(user)

  return (
      <div className={styles.chat_block}>
        <div className={styles.chat_info}>
          <div className={styles.user}>
            <img className={styles.user_img} src={UserAvatar} alt="user-avatar" />
            <div className={styles.user_info}>
              <h5 className={styles.user_name}>{user.name}</h5>
              <Status status={user.online}/>
            </div>
          </div>
          <div className={styles.btns}>
            <img className={styles.file_btn} src={FileIcon} alt="add-file" />
            <img className={styles.more_btn} src={MoreIcon} alt="more-info" />
          </div>
        </div>
        <div className={styles.chat_messages}>
            <div className={styles.message}>
              <h1>Message</h1>
            </div>
            <div className={styles.send}>
              <input className={styles.send_input} placeholder="Type a message here" type="text" />
              <img src={SendIcon} className={styles.send_btn} />
            </div>
        </div>
      </div>
  )
}
