"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import styles from "../header.module.css";

export default function SearchBar() {
const [searchQuery, setSearchQuery] = useState("")
const router = useRouter();

const onSearch = (event) =>{
  event.preventDefault();
  const encodedSearchQuery = encodeURI(searchQuery);
  router.push(`/search?q=${encodedSearchQuery}`)

}

return (
  <form onSubmit={onSearch}>
    <input
    //  style={{ backgroundColor: '#011737' }}
    className={`form-control ${styles.header_search}`}
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)} 
    placeholder="Buscar..."
    />
  </form>
)
  
}