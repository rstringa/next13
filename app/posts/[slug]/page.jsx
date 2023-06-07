import {Comments} from '../../components/Comments';

export default async function Post({params}) {

      const postSlug = params.slug
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/posts/?slug=${postSlug}`,
      {
        next: {
          revalidate:60
        }
      });
      const data = await res.json();
     

      function renderPage(post) {
        return (
          <div className='container pt-5 pb-5'>
             <h1>{post.title.rendered}</h1>
             <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
             <Comments 
                postId = {post.id }
              />
          </div>
         
        );
      }

  return (
    <>
    {data.map(post => renderPage(post))}
    
    </>
   
  )
}
