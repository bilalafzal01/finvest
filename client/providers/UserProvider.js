import { useCallback, useState } from 'react'
import { UserContext } from '../context/UserContext'

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
