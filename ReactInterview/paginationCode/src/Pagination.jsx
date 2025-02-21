export default function Pagination({ currentPage, noOfPages, handlePageChange, goToPreviousPage, goToNextPage }) {
    return (
      <div className="pagination-number">
        <button
          disabled={currentPage === 0}
          className="page-Number"
          onClick={() => goToPreviousPage()}
        >
          ◀️
        </button>
  
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={"page-Number" + (n === currentPage ? " active" : "")}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
  
        <button
          disabled={currentPage === noOfPages - 1}
          className="page-Number"
          onClick={() => goToNextPage()}
        >
          ▶️
        </button>
      </div>
    );
}