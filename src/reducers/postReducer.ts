import { Post } from "@/components/types/Post";

type AddAction = {
  type: 'add';
  payload: {
    title: string;
    body: string
  }
}

type RemoveAction = {
  type: 'remove';
  payload: {
    id: number;
  }
}
type PostActions = AddAction | RemoveAction

export const postReducer = (posts: Post[], action: PostActions) => {
  switch(action.type) {
    case 'add':
      const lastId = posts.length > 0 ? posts[posts.length - 1].id : 0
      return[...posts, {
        id: lastId + 1,
        title: action.payload.title,
        body:action.payload.body
      }]
    case 'remove':
      return posts.filter(p => p.id !== action.payload.id)
    default:
      return posts;
  }
}