import React, { useEffect } from 'react'
import styles from './ChatPage.module.scss'
import UserAvatar from '../../shared/assets/img/user-avatar.png'
import FileIcon from '../../shared/assets/icons/file-icon.svg'
import MoreIcon from '../../shared/assets/icons/more-icon.svg'
import SendIcon from '../../shared/assets/icons/send-icon.svg'
import { Card, ChatBlock, ChatButton } from '../../components'
import socket from '../../app/socket'
import { Route, Routes, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserList } from '../../modules/actions'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'

const ChatPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const userList = useAppSelector(state => state.user.userList)
  const {id} = useParams()
  
  // useEffect(() => {
  //   socket.connect()
  //   socket.on('connect', () => {
  //     console.log('CONNECTED')
  //   });
    
  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  useEffect(() => {
    dispatch(getUserList())
  }, [])

  useEffect(() => {
    // console.log('userList', userList)
  }, [userList])

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
        {
          userList?.length &&  userList.map(user => (
            <div key={user._id}>
              <Card user={user}/>
            </div>
          ))
        }
        
        
      </div>
      {id ? <ChatBlock userId={id}/> : null}
    </section>
  )
}

export default ChatPage;