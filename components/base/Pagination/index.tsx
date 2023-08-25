import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import Pagination from "react-js-pagination";
export interface IPaginationComponent {
  activePage: number;
  onChange: Function;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  className?: string;
}
const PaginationComponent = ({
  activePage,
  onChange,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  className,
}) => {
  return (
    <div className={className || ""}>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
        hideFirstLastPages
        prevPageText={
          <>
            <BiChevronLeft />
            Prev
          </>
        }
        nextPageText={
          <>
            Next
            <BiChevronRight />
          </>
        }
        itemClass="pagination-item"
        itemClassPrev="pagination-prev"
        itemClassNext="pagination-next"
        disabledClass="pagination-disabled"
        activeClass="pagination-active"
      />
    </div>
  );
};

export default PaginationComponent;
