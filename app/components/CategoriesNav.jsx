"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function CategoriesNav({ onCategoryChange }) {
  const [navCategories, setNavCategories] = useState([]);
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

    // Agregar la clase "activo" al Link actual
    e.currentTarget.classList.add('activo');

    // Quitar la clase "activo" de los demás Links
    if (activeLinkRef.current && activeLinkRef.current !== e.currentTarget) {
      activeLinkRef.current.classList.remove('activo');
    }

    // Actualizar la referencia al Link activo
    activeLinkRef.current = e.currentTarget;

    // Actualiza categoryId en page.jsx
    onCategoryChange(categoryId);
  };


  return (
    <>
      <ul>
        <li>
          <Link href="#" onClick={(e) => handleCategoryChange(e, "")}>
            Todas
          </Link>
        </li>
        {
          navCategories.map(category => (
            <li key={category.id}>
              <Link
                href="#"
                onClick={(e) => handleCategoryChange(e, category.id)}
              >
                {category.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
