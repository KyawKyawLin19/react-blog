import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> } */}
      { isPending && <p>Loading...</p>  }
      { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div>
  );
}
 
export default Home;