'use client'
import React, { useState, useEffect, useRef } from "react";
import styles from './posts.module.css';
import Vermas from './Vermas';
import CategoriesNav from '../components/CategoriesNav'

export default function Page() {
  const [categoryId, setCategoryId] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFirstPosts()
  }, [])

  function getFirstPosts() {

    fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }


 
 function getCategoriesPosts() {
    if (categoryId === "") {

      fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    } else {

      fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts?categories=${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }

  useEffect(() => {
    getCategoriesPosts()
  }, [categoryId]);


  const handleCategoryChange = (categoryId) => {
    setCategoryId(categoryId);
  };


  return (
    <>
      <CategoriesNav onCategoryChange={handleCategoryChange}/>
    
      {posts.map(post => (
        <div className={styles.card} key={post.id}>
          <h2>{post.title.rendered}</h2>
          <Vermas
            link={post.slug}
          />
        </div>
      ))}
    </>
  );
}
