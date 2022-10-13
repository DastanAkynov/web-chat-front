import { Route, Routes } from 'react-router-dom'
import { ChatPage, HomePage, Login, Register } from '.'
import Layout from '../app/layout/Layout'

const Routing = () => {
  return (
      <Routes>
        <Route path="/">
          <Route element={<Layout/>} >
            <Route path="/" element={<HomePage />}/>
            <Route path="/chat" element={<ChatPage />}/>
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