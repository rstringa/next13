import styles from './posts.module.css';
import Vermas from './Vermas';

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
        <Vermas
         link = {post.slug} 
        />
      </div>
      ))}
    </>
  )
}