import { createContext, useContext, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { setMeOnline, setUserOnline } from '../../modules/actions';

import { config } from '../config';
import store from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';

// const {getState} = store

// const socket: Socket = io(
//   config.API || 'http://localhost:8000', 
//   {
//   autoConnect: false,
//   extraHeaders: {
//     Authorization: `${getState().auth.token || JSON.parse(localStorage.getItem('token') as string)  || ''}`
//   }
// });

const socket: Socket = io(
  config.API || 'http://localhost:8000',
  { autoConnect: false }                  // Отключает коннект
  );

export const WebsocketContext = createContext<Socket>(socket);


export const WebsocketGlobalEvents = (props: any) => {

  const token = useAppSelector(state => state.auth.token)
  const dispatch = useAppDispatch()
  const socket = useContext(WebsocketContext)

  useEffect(() => {
    socket.connect().auth = { token }                     // Включает коннект и добавляет токен
    socket.on('connect', () => {
     dispatch(setMeOnline())
    })
    socket.on('notify:online', (data) => {
      dispatch(setUserOnline({alias: data}))
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  return props.children
};


export const WebsocketProvider = (props: any) => ((
  <WebsocketContext.Provider value={socket}><WebsocketGlobalEvents>{props.children}</WebsocketGlobalEvents></WebsocketContext.Provider>
))
