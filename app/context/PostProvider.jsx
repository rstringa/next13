"use client"
import { useState, createContext } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [categoryId, setCategoryId] = useState("");

  return (
    <PostContext.Provider
      value={[categoryId, setCategoryId ]}
    >
      {children}
    </PostContext.Provider>
  );
};
