'use client'
import React, { useReducer, useState, useRef, useContext } from "react"
import { ListReducer } from "../../reducers/listReducer"
import { CountContext } from "@/contexts/CountContext"

const List = () => {
  const [list, dispatch] = useReducer(ListReducer, []) // recebo o meu reducer e uma list inicial array vazio
  const [newItem, setNewItem] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);


  function handleClick() {
    if (newItem.trim() === '') return false
    dispatch({
      type: 'add',
      payload: {
        text: newItem
      }
    })
    setNewItem('')
    inputRef?.current && inputRef?.current?.focus()
  }

  function handleEdit(id: number) {
    dispatch({
      type: 'editText',
      payload: {
        id,
        newText: newItem
      }
    })
    setNewItem('')
  }

  const handleDone = (id: number) => {
    dispatch({
      type: 'editToogle',
      payload: { id }
    })
  }

  function handleRemove(id: number) {
    if(!window.confirm('Tem certeza que deseja excluir?')) return false
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }

  const countCtx = useContext(CountContext)

  const handleBanir = () => {
    countCtx?.setOnlineCount(0)
  }

  const handleKeyDown = (event: any) => {
    console.log(event.keyCode === 9)
    if(event.keyCode === 9){
      handleClicou(event)
    }
  }

  const handleClicou = (event: any) => {
    const footer = document.querySelector('#footer')
    console.log('footer ', footer)
    return footer?.scrollIntoView({ behavior: 'smooth' });
    

  }
  return (
    <div className="flex gap-4 flex-col">
      <h1>Cadastre-se sua Lista! {countCtx?.onlineCount}</h1>
      <button onClick={handleBanir}>Zerar a contagem!</button>
      <div className="flex flex-row gap-4">
        <input type="text" ref={inputRef} placeholder="Digite ou edit o texto." onChange={(e) => setNewItem(e.target.value)} value={newItem} />
        <button onClick={handleClick} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Adicionar</button>
      </div>
      {list.map(li => (
        <div className="flex gap-5 border-b-4 border-black" key={li.id}>
          <p><strong>ID:</strong>{li.id}</p>
          <input
            type="checkbox"
            checked={li.done}
            onChange={() => handleDone(li.id)}
            className="cursor-pointer"
          />
          <button 
          onClick={() => handleRemove(li.id)} 
          disabled={!li.done}
          className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Remove</button>
          <button 
            onClick={() => handleEdit(li.id)} 
            disabled={!li.done || newItem.length <= 0}
            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Edit Text</button>
          <p><strong>TEXTO:</strong>{li.text}</p>
        </div>
      ))}
      <button 
      onKeyDown={handleKeyDown}
      onClick={handleClicou}
      className="bg-green-50 px-2 py-1 text-xs font-medium">Tab</button>
    </div>
  )
}

export default List