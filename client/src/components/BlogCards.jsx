import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function BlogCards({ blogs, currentPage, selectedCategory, pageSize }) {
  console.log("BlogCards render");
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(`🚀 ~ BlogCards ~ filteredBlogs:`, filteredBlogs.length);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {filteredBlogs.map((blog) => {
        return (
          <Link key={blog.id} className="cursor-pointer rounded p-5 shadow-lg">
            <div>
              <img src={blog.image} alt="" className="w-full" />
            </div>
            <h3 className="mb-2 mt-4 cursor-pointer hover:text-blue-600">
              {blog.title}
            </h3>
            <p className="mb-2 inline-flex items-center text-gray-600">
              <FaUser className="mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Published : {blog.published_date}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogCards;