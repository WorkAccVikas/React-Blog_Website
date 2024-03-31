import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function EachBlogCard({ blog }) {
  console.log("EachBlogCard render");

  return (
    <Link
      className="relative cursor-pointer rounded p-5 shadow-lg"
      to={`/blogs/${blog.id}`}
    >
      <div className="absolute bg-red-500 p-5">{blog.id}</div>
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
      <p className="text-sm text-gray-500">Published : {blog.published_date}</p>
    </Link>
  );
}

// export default EachBlogCard;
const areEqual = (prevProps, nextProps) => {
  // Only re-render if the 'item' prop changes
  return prevProps.blog === nextProps.blog;
};

const MemoizedEachBlogCard = React.memo(EachBlogCard, areEqual);

export default MemoizedEachBlogCard;
