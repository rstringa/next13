"use client"
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import { PostContext } from "../context/PostProvider";
import styles from "../posts/posts.module.css"

export default function CategoriesNav() {
  const [navCategories, setNavCategories] = useState([""]);
  const [categoryId, setCategoryId] = useContext(PostContext);

  const activeLinkRef = useRef(null); 

  async function getCategoriesNav() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/categories`,
      {
        next: {
          revalidate:60
        }
      });
      const data = await res.json();
      setNavCategories(data)
  }

  useEffect(() => {
    getCategoriesNav()
  }, [])


  const handleCategoryChange = (e, categoryId) => {
    e.preventDefault();

    // Agregar la clase "activo" al li del Link actual
     e.currentTarget.parentNode.classList.add('active')
     
    // Quitar la clase "activo" de los demás Links
    if (activeLinkRef.current && activeLinkRef.current !== e.currentTarget) {
      activeLinkRef.current.parentNode.classList.remove('active');
    }

    // Actualizar la referencia al Link activo
    activeLinkRef.current = e.currentTarget;

    // Actualiza categoryId en page.jsx
    setCategoryId(categoryId);

  };


  return (
    <>
    <div className={`${styles.nav_categories} full_width mb-5`}>
      <ul>
        <li key="0">
          <Link href="#" onClick={(e) => handleCategoryChange(e, "")}>
            Todas
          </Link>
        </li>
        {
          navCategories.map(category => (
            <li 
            key={category.id}
            >
              <Link
                
                href="#"
                onClick={(e) => handleCategoryChange(e, category.id)}
              >
                {category.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </>
  )
}
