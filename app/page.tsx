'use client'
import React, { useState } from 'react'
import Login from './login/page'
import LoginContext from '@/LoginContext'
import Profile from './profile/page';
import Mail from './mail/page';


export default function Home() {
    const [username, setUsername] = useState("");
    const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div className="App">
        <LoginContext.Provider value={{ username, setUsername, showProfile, setShowProfile }}>
          {showProfile ? <Profile /> : <Login />}
          {showProfile ? <Mail /> : null}

        </LoginContext.Provider>
      </div>
    </>
  )
}

