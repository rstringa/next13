'use client'
import React, { useState, useEffect, useContext } from "react";
import styles from './posts.module.css';
import Vermas from './Vermas';
import { PostContext } from "../context/PostProvider";
import CategoriesNav from '../components/CategoriesNav'


export default function Page() {  
  const [categoryId, setCategoryId] = useContext(PostContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFirstPosts()
  
  }, [])

  function getFirstPosts() {

    fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`, 
    {
      next: {
        revalidate:60
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }

 function getCategoriesPosts() {
    if (categoryId === "") {

      fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`, 
      {
        next: {
          revalidate:60
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    } else {

      fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts?categories=${categoryId}`,
      {
        next: {
          revalidate:60
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }

  useEffect(() => {
    getCategoriesPosts()
  }, [categoryId]);

  return (
    <>
      <CategoriesNav/>

      <div className="row">
           
      {posts.map(post => (
        <div className="col-lg-4"> 
        <div className="card" key={post.id}>
          { post.featured_image_url.featured_media !== 0 &&
            <img src={post.featured_image_url.featured_image_url} className="card-img-top" alt={post.featured_image_url.title.rendered} />
          }
            <div className="card-body">
          <h3
            className="card-title mb-3"
          >{post.title.rendered}</h3>
          <Vermas
           
            link={post.slug}
          />
          </div>
        </div>
       
        </div>
      ))}
      
      </div>
    </>
  );
}
