import React from 'react'
import styles from './ChatBlock.module.scss'
import UserAvatar from '../../shared/assets/img/user-avatar.png'
import FileIcon from '../../shared/assets/icons/file-icon.svg'
import MoreIcon from '../../shared/assets/icons/more-icon.svg'

export const ChatBlock: React.FC = () => {
  return (
    <div className={styles.chat_block}>
        <div className={styles.chat_info}>
          <div className={styles.user}>
            <img className={styles.user_img} src={UserAvatar} alt="user-avatar" />
            <div className={styles.user_info}>
              <h5 className={styles.user_name}>Nika Jerrardo</h5>
              <p className={styles.user_status}>last online 5 hours ago</p>
            </div>
          </div>
          <div className={styles.btns}>
            <img className={styles.file_btn} src={FileIcon} alt="add-file" />
            <img className={styles.more_btn} src={MoreIcon} alt="more-info" />
          </div>
        </div>
        <div className={styles.chat_messages}>

        </div>

      </div>
  )
}
