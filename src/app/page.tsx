"use client"

import List from '@/components/List'
import Footer from '@/components/footer'
import Post from '@/components/post'
import { CountProvider } from '@/contexts/CountContext'
import { PostProvider } from '@/contexts/PostContext'

export default function Home() {

  return (
    <PostProvider>
      <div className="container">
        <Post/>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CountProvider>
          <List />
          <Footer />
        </CountProvider>
      </main >
    </PostProvider>
  )
}
