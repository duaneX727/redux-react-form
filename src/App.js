import React from 'react'
import Login from './Components/Login'
import Logout from './Components/Logout'

import './App.css'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector(selectUser)
  return (
    <div>{user ? <Logout />: <Login />}</div>
  )
}

export default App
