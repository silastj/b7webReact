'use client'
import React, { useReducer, useState, useRef } from "react"
import { ListReducer } from "./reducers/listReducer"

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
    
  }

  const handleDone = (id: number) => {
    dispatch({
      type: 'editToogle',
      payload: { id }
    })
  }

  function handleRemove(id: number) {
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }
  return (
    <div className="flex gap-4 flex-col">
      <h1>Cadastre-se sua Lista!</h1>
      <div className="flex flex-row gap-4">
        <input type="text" ref={inputRef} onChange={(e) => setNewItem(e.target.value)} value={newItem} />
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
          <button onClick={() => handleRemove(li.id)} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Remove</button>
          <button 
            onClick={() => handleEdit(li.id)} 
            disabled={!li.done}
            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Edit Text</button>
          <p><strong>TEXTO:</strong>{li.text}</p>
        </div>
      ))}
    </div>
  )
}

export default List