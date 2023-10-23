import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

const PostList = () => {
  const postCtx =  useContext(PostContext)
  return (
    <div>
      {postCtx?.posts.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList