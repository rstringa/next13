"use client"
import Link from "next/link";

async function getCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/categories`
    );

    return res.json();
  }

export default async function CategoriesNav({ onChangeCategory }) {

    const categories = await getCategories()
    const handleChangeCategory = (e, categoryId) => {
        e.preventDefault();
        onChangeCategory(categoryId);
      };

    return (
    <>
    <ul>
    <li>
          <Link href="#" onClick={(e) => handleChangeCategory(e, "")}>
            Todas
          </Link>
        </li>
    {
        categories.map(category=>(
            <li key={category.id}>
                <Link
                     
                     href="#"
                     onClick={ (e) => handleChangeCategory(e, category.id) }
                >              
                {category.name}</Link>
            </li>
        ))
    }
    </ul>
    </>
  )
}
