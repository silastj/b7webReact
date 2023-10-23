import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"


const ResultadoPost = () => {
  const postCtx = useContext(PostContext)
  
  return (
    <div>
      <p>Posts enviados:</p>
      {postCtx?.posts.map(post => (
        <ul key={post.id}>
          <br />
          <li><strong>Título:</strong> {post.title}</li>
          <li><strong>Conteúdo:</strong> {post.body}</li>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => postCtx.removePost(post.id)}>Remover</button>
          <br />
        </ul>
      ))}
    </div>
  )
}
export default ResultadoPost