import Link from "next/link"

export default function Vermas(link) {
 
  return (
    <Link 
    className="btn btn-outline-info"
    href={`/posts/${link.link}`}>Ver mas</Link>
  )
}
