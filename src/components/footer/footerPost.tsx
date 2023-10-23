import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

const FooterPost = () => {

  const postCtx = useContext(PostContext)
  return (
    <footer>
      <p><strong>Contagem de POSTS:</strong>{postCtx?.posts.length}</p>
    </footer>
  )
}

export default FooterPost