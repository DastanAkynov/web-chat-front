import { Route, Routes } from 'react-router-dom'
import { ChatPage, HomePage, Login, Register } from '.'
import Layout from '../app/layout/Layout'
import { ChatBlock } from '../components'

const Routing = () => {
  return (
      <Routes>
        <Route path="/">
          <Route element={<Layout/>} >
            <Route path="/" element={<HomePage />}/>
            <Route path="/chat" element={<ChatPage />}/>
            <Route path="/chat/:id" element={<ChatPage />} /> 
          </Route>
          <Route path="auth" >
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default Routing