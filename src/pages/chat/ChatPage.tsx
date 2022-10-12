import React from 'react'
import styles from './ChatPage.module.scss'
import UserAvatar from '../../shared/assets/img/user-avatar.png'
import FileIcon from '../../shared/assets/icons/file-icon.svg'
import MoreIcon from '../../shared/assets/icons/more-icon.svg'
import SendIcon from '../../shared/assets/icons/send-icon.svg'
import { Card, ChatButton } from '../../components'

const ChatPage = () => {
  return (
    <section className={styles.chat_page}>
      <div className={styles.chatList_block}>
        <div className={styles.chatList_head}>
          <div className={styles.head_info}>
            <h2 className={styles.head_title}>Chats</h2>
            <p className={styles.head_subtitle}>Recent Chats</p>
          </div>
          <ChatButton>Create New Chat</ChatButton>
        </div>
        
        <form className={styles.search}>
          <input type="text" placeholder="Search by name" className={styles.search_input} />
          <div className={styles.search_btn}>Search</div>
        </form>

        <Card />
        
      </div>


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
            <div className={styles.message}>
              <h1>Message</h1>
            </div>
            <div className={styles.send}>
              <input className={styles.send_input} placeholder="Type a message here" type="text" />
              <img src={SendIcon} className={styles.send_btn} />
            </div>
        </div>

      </div>
    </section>
  )
}

export default ChatPage;