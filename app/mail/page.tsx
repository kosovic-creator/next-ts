import LoginContext from '@/LoginContext';
import React, { useContext } from 'react'

export default function Mail() {
    const { username } = useContext(LoginContext);
    return (
      <>
        <h2>Mail</h2>
        <h2>UserName: {username} </h2>
      </>
    )
}
