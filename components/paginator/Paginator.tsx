import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginatePros {
  itemsPerPage: number;
  totalItems: number;
  page: number;
  form: {};
  setForm: React.Dispatch<React.SetStateAction<{}>>;
  setPage: React.Dispatch<React.SetStateAction<{}>>;
  setDisabledPaginator: React.Dispatch<React.SetStateAction<{}>>;
  disabledPaginator: boolean;
}

export default function Paginator({
  itemsPerPage,
  totalItems,
  page,
  setPage,
  form,
  setForm,
  setDisabledPaginator,
  disabledPaginator,
}: PaginatePros) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = async (event: any) => {
    setDisabledPaginator(true);
    setForm({ ...form, page: event.selected + 1 });
    if (event.selected + 1 !== page) {
      setPage(event.selected + 1);
    }
  };
  if (totalItems > 0) {
    return (
      <div className="containerPagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Sig. "
          onPageChange={handlePageClick}
          forcePage={page - 1}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Ant."
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    );
  }
}
