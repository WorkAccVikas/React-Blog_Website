import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      {/* Latest Blogs */}
      <div>
        <h3 className="px-4 text-2xl font-semibold">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-spacing-2 border-b-2 px-4"
            >
              <h3 className="mb-2 font-medium">{blog.title}</h3>
              <Link
                to="/"
                className="inline-flex items-center gap-2 py-1 pb-2 text-base hover:text-orange-500"
              >
                Learn More <FaArrowRight className="" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div className="mt-20">
        <h3 className="px-4 text-2xl font-semibold">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-spacing-2 border-b-2 px-4"
            >
              <h3 className="mb-2 font-medium">{blog.title}</h3>
              <Link
                to="/"
                className="inline-flex items-center gap-2 py-1 pb-2 text-base hover:text-orange-500"
              >
                Learn More <FaArrowRight className="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
