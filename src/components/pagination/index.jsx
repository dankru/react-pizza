import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import styles from './pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  const { currentPage } = useSelector(state => state.filter);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => {
        onChangePage(event.selected + 1);
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
