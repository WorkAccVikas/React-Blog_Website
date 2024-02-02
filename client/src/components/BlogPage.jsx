import { useEffect } from "react";
import { useState } from "react";
import BlogCards from "./BlogCards";

function BlogPage() {
  console.log("BlogPage render");

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let URL = "http://localhost:5000/blogs";
      const response = await fetch(URL);
      const data = await response.json();
      console.log(`🚀 ~ fetchBlogs ~ data:`, data);
      setBlogs(data);
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Category Section */}
      <div>Page Category</div>

      {/* blogCards Section */}
      <div>
        <BlogCards blogs={blogs} />
      </div>

      {/* Pagination Section */}
      <div>Pagination</div>
    </div>
  );
}

export default BlogPage;
