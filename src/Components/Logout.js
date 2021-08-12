import "./Logout.css";
import React from 'react'
import { logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch() 
  const handleLogout = e => {
    e.preventDefault()
    dispatch(logout()) 
  }
  return (
    <div className="logout">
      <h1>
        Welcome
        <span className="user__name"> {user.name}</span>
      </h1>{" "}
      <button  className="logout__button" onClick={ e => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
