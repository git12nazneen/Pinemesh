'use client'
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({children}) => {
  return (
    <div>
      <SessionProvider session={null}>
        {children}
      </SessionProvider>
    </div>
  )
}

export default AuthProvider
