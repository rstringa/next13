'use client'
import React, { useState, useEffect, useRef } from "react";
import styles from './posts.module.css';
import Vermas from './Vermas';
import Link from "next/link";
// import CategoriesNav from '../components/CategoriesNav'

export default function Page() {
  const [categoryId, setCategoryId] = useState("");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const activeLinkRef = useRef(null);


  const handleChangeCategory = (e, categoryId) => {
    e.preventDefault();

    // Agregar la clase "activo" al Link actual
    e.currentTarget.classList.add('activo');

    // Quitar la clase "activo" de los demás Links
    if (activeLinkRef.current && activeLinkRef.current !== e.currentTarget) {
      activeLinkRef.current.classList.remove('activo');
    }

    // Actualizar la referencia al Link activo
    activeLinkRef.current = e.currentTarget;

    // Cargar Posts para ésta categoría
    setCategoryId(categoryId);
  };


  function getFirstPosts() {

    fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }
  function getCategoriesNav() {
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
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
    getFirstPosts()
    getCategoriesNav()
  }, [])

  useEffect(() => {
    getCategoriesPosts()
  }, [categoryId]);


  return (
    <>
      {/* <CategoriesNav onChangeCategory={handleChangeCategory} /> */}
      <ul>
        <li>
          <Link
            href="#"
            onClick={(e) => handleChangeCategory(e, "", "")}
            ref={activeLinkRef}
          >
            Todas
          </Link>
        </li>
        {
          categories.map(category => (
            <li key={category.id}>
              <Link

                href="#"
                onClick={(e) => handleChangeCategory(e, category.id)}
                ref={activeLinkRef}

              >
                {category.name}</Link>
            </li>
          ))
        }
      </ul>
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
