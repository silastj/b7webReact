import { CountContext } from "@/contexts/CountContext"
import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"



const Footer = () => {
  const countCtx = useContext(CountContext)
  const postCtx = useContext(PostContext)
  return (
    <footer id="footer">
      <p>Aqui é o footer:</p>
      {countCtx?.onlineCount}
    </footer>
  )
}

export default Footer