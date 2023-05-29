import Link from "next/link"

export default function Vermas(link) {
 
  return (
    <Link 
    href={`/posts/${link.link}`}>Ver mas</Link>
  )
}
