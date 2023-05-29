export const metadata = {
  title: 'Nosotros',
};
async function getData() {
  const res = await fetch('https://dummyjson.com/posts/1');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}
export default async function Page() {
  const data = await getData();
  return (
    <>
    <h1>Nosotros</h1>
   
    <h3>{data.title}</h3>
    <ul>
    { data.tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
    </ul>
       
    </> 
  );
}