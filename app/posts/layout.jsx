"use client"
import { PostProvider } from '../context/PostProvider';

export default function PostsLayout({children}){

  return (
    <>
    <PostProvider>   
      {children}
    </PostProvider>
    </>
  )
}
