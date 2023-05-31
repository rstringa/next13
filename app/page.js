export const metadata = {
  title: `Home`,
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};
export default async function Home() {
  // const res = await fetch(`http://wordpress-pwa.local/wp-json/wp/v2/posts/?slug=${postSlug}`);
  // const data = await res.json();

  return (
    <>
      <h1>Página de inicio</h1>
    </>
  );
}
