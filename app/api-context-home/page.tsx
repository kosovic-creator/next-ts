'use client'
import LoginContext from '@/LoginContext';
import Mail from '../mail/page';
// import { useContext } from 'react';
import React, { useState } from 'react'
import Login from '../login/page';
import Profile from '../profile/page';

export default function ApiKontextHome() {
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
