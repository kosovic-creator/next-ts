import React, { useState, useContext } from 'react'
import LoginContext from '@/LoginContext'
function Login() {

  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input type="text" placeholder="Username"
        onChange={(e) => { setUsername(e.target.value) }}
      />
      {/* <input type="password" placeholder="Password" /> */}
      <button onClick={() => { setShowProfile(true) }}>Login
      </button>

    </>
  )
}

export default Login