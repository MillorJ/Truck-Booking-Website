import { useEffect, useState } from "react";
import DeleteModal from "../../../components/admin/DeleteModal";
import Pagination from "../../../components/admin/Pagination";
import { CLIENT_BOOKINGS_DATA } from "../../../lib/data";
import RentalsList from "../../../components/admin/TruckList";
import { usePagination } from "../../../hooks/usePagination";
import { Link } from "react-router-dom";
import EditRentalModal from "../../../components/admin/EditRentalModal";

const TruckIndex = () => {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { currentItems, pageCount, handlePageClick } = usePagination(data);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Fetch your Rental here!!!!
    setData(CLIENT_BOOKINGS_DATA);
  }, []);

  const handleDelete = () => {
    // Handle the deletion of the booking here!!!!
    console.log(deleteId);
  };

  const handleCreate = () => {
    // Handle the creationg of the booking here!!!!
    console.log(deleteId);
  };

  const handleClose = () => {
    setDeleteId(null);
  };

  const handleCreateModalClose = () => {
    setShowCreateModal(false);
  };

  const handleSearch = () => {
    // Handle the searching of the booking heree!!!
    console.log(searchInput);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="py-4">Manage Trucks</h2>
        <Link
          role="button"
          className="btn btn-success text-decoration-none"
          to="create"
        >
          Create Truck
        </Link>
      </div>
      <div className="row bg-dark mx-auto pt-3 mb-4 rounded">
        <div className="col-11">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search Rental"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="col-1">
          <button
            type="submit"
            className="btn btn-danger mb-3 w-100"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <RentalsList currentItems={currentItems} setDeleteId={setDeleteId} />
      <Pagination
        handlePageClick={handlePageClick}
        totalPages={pageCount}
        currentPage={0}
      ></Pagination>
      <DeleteModal handleClose={handleClose} handleDelete={handleDelete} />
      <EditRentalModal
        handleClose={handleCreateModalClose}
        handleDelete={handleCreate}
      />
    </>
  );
};

export default TruckIndex;
