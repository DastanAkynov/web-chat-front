import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChatPage, HomePage } from '.'
import Layout from '../app/layout/Layout'

const Routing = () => {
  return (
      <Routes>
        <Route path="/">
          <Route element={<Layout/>} >
            <Route path="/" element={<HomePage />}/>
            <Route path="/chat" element={<ChatPage />}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default Routing