import { io } from 'socket.io-client';
import { config } from '../config';
import store from '../store';

const {getState} = store


const socket = io(config.API || 'http://localhost:8000', {
  extraHeaders: {
    Authorization: `${getState().auth.token || JSON.parse(localStorage.getItem('token') as string)  || ''}`
  }
})

export default socket;