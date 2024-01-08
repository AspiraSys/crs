import React from "react";

const Paginations = ({
  className,
  activePage,
  onPageChange,
  itemCount,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(itemCount / itemsPerPage);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-button ${i === activePage ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={`pagination-container ${className}`}>
      {renderPageNumbers()}
    </div>
  );
};

export default Paginations;
