/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate"; // https://www.npmjs.com/package/react-paginate

const Pagination = ({
  handlePageClick,
  totalPages,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Prev"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      className="pagination justify-content-end"
      previousClassName="page-item"
      pageClassName="page-item"
      breakClassName="page-item"
      nextClassName="page-item"
      activeClassName="active footer-active"
      activeLinkClassName="active footer-active"
      previousLinkClassName="page-link footer-inactive text-white py-2"
      nextLinkClassName="page-link footer-inactive text-white py-2"
      pageLinkClassName="page-link footer-inactive text-white py-2"
      breakLinkClassName="page-link bg-dark text-white py-2"
      disabledLinkClassName="footer-disabled"
    />
  );
};

export default Pagination;
