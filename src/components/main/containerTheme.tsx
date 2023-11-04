import { useTheme } from "@/contexts/ThemeContext"
import { ReactNode } from "react"


type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  const themeCtx = useTheme()
  const toogleTheme = () => {
    if (themeCtx) {
      themeCtx?.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark')
    }
  }
  return (
    <div className={`${themeCtx?.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div>
        <button onClick={toogleTheme} className="bg-white cursor-pointer">
          <img src="/lua.svg" alt="icon do tema" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Container