import { useEffect } from "react";
import { useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

function BlogPage() {
  console.log("BlogPage render");

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let URL = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // filter by category
      if (selectedCategory) {
        URL += `&category=${selectedCategory}`;
      }

      const response = await fetch(URL);
      const data = await response.json();
      console.log(`🚀 ~ fetchBlogs ~ data:`, data);
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // page changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* blogCards Section */}
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Blog Card Component */}
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        {/* Sidebar Component */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Pagination Section */}
      <div>
        <Pagination
          blogs={blogs}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default BlogPage;
