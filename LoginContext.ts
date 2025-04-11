'use client';
import { createContext } from 'react';

interface LoginContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextType>({
  username: '',
  setUsername: () => {},
  showProfile: false,
  setShowProfile: () => {},

});

export default LoginContext;