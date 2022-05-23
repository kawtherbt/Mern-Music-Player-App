import React from 'react'
import { Navigate } from 'react-router'

const ForceNavigate=({user,children})=> {
    if(user.isConnected){
       

        return <Navigate to="/profile" replace/>
      }
      return children
  
}

export default ForceNavigate