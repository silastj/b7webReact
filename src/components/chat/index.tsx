import Input from './components/input'
import styles from './index.module.css'
import { useUser } from '@/contexts/UserContext'

const Chat = () => {  
  const userCtx = useUser()

  return (
    <div>
      <h2>Chat</h2>
      <div className={styles.centerChat}>
        <div className={styles.chat}>
          <p>User 01</p>
          <p>User 01</p>       
          <p>User 02</p>
          <p>User 02</p>
          <footer className={styles.footer}>
            <Input
              type="text"
              placeholder={`${userCtx?.user ? userCtx.user : 'New user'}, digite sua frase e ENTER!`}
            />
            <Input 
              type="text" 
              placeholder='Boot, digite sua frase e ENTER!'
            />
          </footer>
        </div>       
      </div>
    </div>
  )
}

export default Chat