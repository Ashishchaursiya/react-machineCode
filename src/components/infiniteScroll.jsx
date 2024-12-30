import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${count}&limit=5`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
      setLoading(false);
    };
    loadImages();
  }, [count]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(lastImage);
          setCount((prevCount) => prevCount + 1);
        }
      },
      { threshold: 1 }
    );
    const lastImage = document.querySelector(".infiniteScrollItem:last-child");
    if (lastImage) {
      observer.observe(lastImage);
    }
    return () => observer?.current?.disconnect();
  }, [images]);

  return (
    <>
      <div className="infiniteScrollContainer">
        {images.map((image) => (
          <div className="infiniteScrollItem" key={image.id}>
            <img src={image.download_url} alt={image.author} />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </>
  );
}
