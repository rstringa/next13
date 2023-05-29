"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
 
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
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)} 
    placeholder="Buscar..."
    />
  </form>
)
  
}