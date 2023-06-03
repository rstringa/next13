"use client"
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import { PostContext } from "../context/PostProvider";


export default function CategoriesNav() {
  const [navCategories, setNavCategories] = useState([""]);
  const [categoryId, setCategoryId] = useContext(PostContext);

  const activeLinkRef = useRef(null); 
  const navLinksUl = useRef();

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

    // Quitar la clase "activo" de los Links
    const li = navLinksUl.current.children
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("active");
    }
    // Agregar la clase "activo" al li del Link actual
     e.currentTarget.parentNode.classList.add('active')
     
    // Actualizar la referencia al Link activo
    activeLinkRef.current = e.currentTarget;

    // Actualiza categoryId en page.jsx
    setCategoryId(categoryId);

  };


  return (
    <>
    <div className="nav_categories mb-5">
      <ul ref={navLinksUl}>
        <li key="li-0" className="active">
          <Link href="#" onClick={(e) => handleCategoryChange(e, "")}>
            Todas
          </Link>
        </li>
        {
          navCategories.map(category => (
            <li 
            key={`li-${category.id}`}
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
