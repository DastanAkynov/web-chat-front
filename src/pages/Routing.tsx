import { Route, Routes } from 'react-router-dom'
import { ChatPage, HomePage, Login, Register } from '.'
import Layout from '../app/layout/Layout'

const Routing = () => {
  return (
      <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route element={<Layout/>} >
              <Route index element={<HomePage />}/>
              <Route path="/chat" element={<ChatPage />}/>
              <Route path="/chat/:id" element={<ChatPage />} /> 
          </Route>
    </Routes>
  )
}

export default Routing