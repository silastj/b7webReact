import { PostContext } from "@/contexts/PostContext"
import { useContext, useState } from "react"

const Header = () => {
  const [titleInput, setTitleInput] = useState<string>('')
  const [bodyInput, setBodyInput] = useState<string>('')

  const postCtx =  useContext(PostContext)

  const handleAddPost = () => {
    if(titleInput.length > 0 && bodyInput.length > 0){
      postCtx?.addPost(titleInput,bodyInput)
      setBodyInput('')
      setTitleInput('')
    }
  }
  return (
    <header>
      <h1>My Website</h1>
      <div className="header">
        <input type="text" placeholder="Digite um título" value={titleInput}
          onChange={e => setTitleInput(e.target.value)} />
        <textarea name="area" id="area" cols={30} rows={10}
          value={bodyInput}
          onChange={e => setBodyInput(e.target.value)}
          placeholder="Digite um texto" ></textarea>
        <button className="btnHeader"
        onClick={handleAddPost}>Adicionar</button>
      </div>
    </header>
  )
}

export default Header