import "./Logout.css";
import React from 'react'
import { useAuth } from "../../../contexts/AuthProvider";

export const Logout = () => {

    const {handleLogout} = useAuth()
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

