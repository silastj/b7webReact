"use client"

import List from '@/components/List'
import Footer from '@/components/footer'
import Post from '@/components/post'
import { CountProvider } from '@/contexts/CountContext'
import { PostProvider } from '@/contexts/PostContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Container from '@/components/main/containerTheme'
import Chat from '@/components/chat'
import { UserProvider } from '@/contexts/UserContext'
import { ChatProvider } from '@/contexts/ChatContext'

export default function Home() {

  return (
    <ThemeProvider>
      <UserProvider>
        <ChatProvider>
          <Container>
            <PostProvider>
              <div className="container">
                <Chat />
                <Post />
              </div>
              <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <CountProvider>
                  <List />
                  <Footer />
                </CountProvider>
              </main >
            </PostProvider>
          </Container>
        </ChatProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
