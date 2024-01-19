import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPaginationItems = () => {
    const paginationItems = [];
    const maxVisiblePages = 4;
    const ellipsis = <span key="ellipsis">...</span>;

    paginationItems.push(
      <button key="first" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        &lt;&lt;
      </button>
    );

    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      paginationItems.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxVisiblePages) {
      if (currentPage > Math.floor(maxVisiblePages / 2) + 1) {
        paginationItems.push(ellipsis);
      }
    }

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      if (i > Math.min(maxVisiblePages, totalPages)) {
        break;
      }
      paginationItems.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxVisiblePages) {
      if (currentPage < totalPages - Math.floor(maxVisiblePages / 2)) {
        paginationItems.push(ellipsis);
      }
    }

    paginationItems.push(
      <button
        key="last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    );

    return paginationItems;
  };

  return <div className="pagination">{getPaginationItems()}</div>;
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;