import { ReactNode, createContext, useContext, useEffect, useState } from "react";


const STORAGE_KEY = 'themeContextKey'

type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const [theme, setTheme] = useState(
    savedTheme !== null ? savedTheme : 'light'
  )


useEffect(() => {
  localStorage.setItem(STORAGE_KEY, theme)
},[theme])

return (
  <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
)

}

export const useTheme = () => useContext(ThemeContext)