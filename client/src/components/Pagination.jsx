import { Link } from "react-router-dom";

function Pagination({ blogs, currentPage, onPageChange, pageSize }) {
  console.log("Pagination render");
  console.log("Blogs Length in Pagination = ", blogs);

  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(`🚀 ~ Pagination ~ totalPages:`, totalPages);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "activePagination" : ""}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      ),
    );
  };

  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          First
        </button>
      </li>

      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>

      {renderPaginationLinks()}

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>

      <li>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
