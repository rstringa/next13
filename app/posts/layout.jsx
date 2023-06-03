"use client"
import { PostProvider } from '../context/PostProvider';
import './posts.css'

export default function PostsLayout({children}){

  return (
    <>
    <PostProvider>   
      {children}
    </PostProvider>
    </>
  )
}
