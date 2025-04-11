import React, { useContext } from 'react'
import LoginContext from '@/LoginContext';

export default function Profile() {
   const { username } = useContext(LoginContext);
    return (
      <>
        <h2>Profile</h2>
        <h2>UserName: {username} </h2>
      </>
    )
  }

