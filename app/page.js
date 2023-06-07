export const metadata = {
  title: `Home`,
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   siteId: "1467726470533754880",
  //   creator: "@nextjs",
  //   creatorId: "1467726470533754880",
  //   images: ["https://nextjs.org/og.png"],
  // },
};
export default async function Home() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/wp/v2/pages/33`);
   const data = await res.json();
   
  return (
    <>
      <section id="hero" className="d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
      <h1>Better Solutions For Your Business</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="#" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
      <img src="../images/hero-img.png" className="img-fluid animated" alt="" />
    </div>
  </div>
</div>

</section>

<div className="container">
  <div className="row">
 
     <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>

    </div>
  </div>
    </>
  );
}
