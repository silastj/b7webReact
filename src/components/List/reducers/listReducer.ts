import { Item } from "../types"

type AddAction = {
  type: 'add';
  payload: {
    text: string
  }
}

type EditTextAction = {
  type: 'editText';
  payload: {
    id: number;
    newText: string;
  }
}

type EditToogleAction = {
  type: 'editToogle'
  payload: {
    id: number;
  }
}

type RemoveAction = {
  type: 'remove';
  payload: {
    id: number
  }
}

type ListActions = AddAction | EditTextAction | EditToogleAction | RemoveAction

//executar uma função e retorna ela atualizada.
export const ListReducer = (list: Item[], action: ListActions): Item[] => {
  // action.type // ação a ser feita
  // action.payload // carga que será passado na ação

  switch (action.type) {
    case 'add':
      return [...list, {
        id: list.length,
        text: action.payload.text,
        done: false
      }]
    case 'editText':
      return list.map(li => {
        if (li.id === action.payload.id && action.payload.newText !== '')  {
          li.text = action.payload.newText
        }
        return li
      })
    case 'editToogle':
      return list.map(li => {
        if (li.id === action.payload.id) li.done = !li.done
        return li
      })
    case 'remove':
      return list.filter(li => li.id !== action.payload.id)

    default:
      return list
  }
}