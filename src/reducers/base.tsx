import { useState } from "react"
import { Item } from "../components/List/types"



const Base = () => {
  const [list, setList] = useState<Item[]>([])

  const addNewItem = (text: string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    }])
  }

  const editItem = (id:number, newText: string) => {
    setList(
      list.map(li => {
        if(li.id === id) li.text = newText
        return li
      })
    )
  }

  const toogleItemDone = (id:number) => {
    setList(
      list.map(item => {
      if(item.id === id) item.done = !item.done
      return item
    }))

  const removeItem = (id:number) => {
    setList(
      list.filter(li => li.id !== id)
    )
  }
 
  return (
    <></>
  )
}}

export default Base