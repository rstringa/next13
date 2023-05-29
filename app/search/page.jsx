'use client';
 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default async function SearchPage(){
const search = useSearchParams();
const searchQuery = search ? search.get('q') : null;
const encodedSearchQuery = encodeURI(searchQuery || "");
// console.log(encodedSearchQuery);

const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/custom/v2/search?search=${encodedSearchQuery}`);
const data = await res.json();

function renderPage(post) {
    return (
      <div key={post.id}>
         <h1>{post.title}</h1>
          <Link href={`posts/${post.slug}`}>Ver mas</Link>  
      </div>
    );
  }

  return (
    <>
    <div>Search Page</div>
    {data.map(post => renderPage(post))}
    </>
  )
}


