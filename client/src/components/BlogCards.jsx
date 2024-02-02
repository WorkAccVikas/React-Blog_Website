import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import EachBlogCard from "./EachBlogCard";

function BlogCards({ blogs, currentPage, selectedCategory, pageSize }) {
  console.log("BlogCards render");
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(`🚀 ~ BlogCards ~ filteredBlogs:`, filteredBlogs.length);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {filteredBlogs.map((blog) => {
        return <EachBlogCard blog={blog} key={blog.id} />;
      })}
    </div>
  );
}

export default BlogCards;
