import { Link } from "react-router-dom";

function Pagination({ blogs, currentPage, onPageChange, pageSize }) {
  console.log("Pagination render");

  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(`🚀 ~ Pagination ~ totalPages:`, totalPages);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={
            pageNumber === currentPage
              ? "activePagination disabled"
              : "cursor-pointer"
          }
          onClick={() => onPageChange(pageNumber)}
        >
          <a
            href="#"
            className={
              pageNumber === currentPage
                ? "activePagination disabled"
                : "cursor-pointer"
            }
          >
            {/* <a href="#" onClick={() => onPageChange(pageNumber)}> */}
            {pageNumber}
          </a>
        </li>
      ),
    );
  };
  console.log("KKK = ", currentPage === 1);
  console.log("MMM = ", currentPage === totalPages);

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

/** DESC : If currentPage is 1 and we want if you click on 1 again then don't do anything */
