import React, { useContext, useEffect, useState } from 'react'
import { WebsocketContext } from '../../app/context/WebSocketContext'

const HomePage = () => {
  const [message, setMessage] = useState<string>('')
  const [messageList, setMessageList] = useState<string[]>([])
  const socket = useContext(WebsocketContext)


  const sendMessage = () => {
    socket.emit('send:message', message)
  }

  return (
    <div>
      <h1>Home</h1>
      <input onChange={e => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send message</button>
      <ul>
        {messageList.map((el, idx) => <li key={idx}>{el}</li>)}
      </ul>
    </div>
  )
}

export default HomePage