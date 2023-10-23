import {ReactNode, createContext, useState } from "react"

type CountContextType = {
  onlineCount:number
  setOnlineCount:(n: number) => void
}
export const CountContext = createContext<CountContextType | null>(null)

type Props = {
  children: ReactNode
}

export const CountProvider = ({children}:Props) => {
  const [onlineCount, setOnlineCount] = useState(100)
  return(
    <CountContext.Provider value={{onlineCount, setOnlineCount}}>
      {children}
    </CountContext.Provider>
  )
} 