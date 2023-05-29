import Link from "next/link";
import styles from './posts.module.css';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts`, 
  {
    next: {
      revalidate:60
    }
  }
  );
  return res.json();
}


export default async function ListPosts(){
  const data = await getData()

  // function handleClickPostId(id){
  //   localStorage.setItem("postId", id)
  // }

  return (
    <>
    { data.map(post => (
      <div className={styles.card} key={post.id}>
        <h2>{post.title.rendered}</h2>
        <Link href={`/posts/${post.slug}`}
        >Ver mas</Link>
      </div>
      ))}
    </>
  )
}