import React, { useContext, useEffect } from 'react'
import styles from './ChatPage.module.scss'
import { Card, ChatBlock, ChatButton } from '../../components'
import { useParams } from 'react-router-dom'
import { getUserList, setUserListOnline } from '../../modules/actions'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { WebsocketContext } from '../../app/context/WebSocketContext'



const ChatPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const userList = useAppSelector(state => state.user.userList)
  const {id} = useParams()
  const socket = useContext(WebsocketContext);


  // const handlerFunc = (dispatch: any) => (data: string[]) => {
  //   dispatch(setUserListOnline(data))
  // }
  
  useEffect(() => {
    dispatch(getUserList()).then(() => {
      socket.emit('get:onlineUsers', null, (data: string[]) => {
        dispatch(setUserListOnline(data))
      })
    })
  }, [])

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