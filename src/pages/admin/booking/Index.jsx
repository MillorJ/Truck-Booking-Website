import { useEffect, useState } from "react";
import DeleteModal from "../../../components/admin/DeleteModal";
import EditModal from "../../../components/admin/EditModal";
import Pagination from "../../../components/admin/Pagination";
import { CLIENT_BOOKINGS_DATA } from "../../../lib/data";
import UserBookingList from "../../../components/user/UserBookingList";
import { usePagination } from "../../../hooks/usePagination";
import { Link } from "react-router-dom";
import axios from "axios";
import Api from "../../../lib/api";
// import EditModal from "../../../components/admin/EditModal";

const BookingsIndex = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { currentItems, pageCount, handlePageClick } = usePagination(data);
  const [searchInput, setSearchInput] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch your bookings here!!!!
    

    axios.get("http://localhost:3000/bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));

  }, [data, token]);

  const handleDelete = async() => {
    // Handle the deletion of the booking here!!!!
    console.log(deleteId);
    await Api().delete(`bookingsadmin/${deleteId}`)
    .then (response => console.log(response))
    .catch(error => console.error(error));
    

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
        <h2 className="py-4">Manage Bookings</h2>
        
      </div>
      <div className="row bg-dark mx-auto pt-3 mb-4 rounded">
        <div className="col-11">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search bookings"
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

      <UserBookingList currentItems={currentItems} setDeleteId={setDeleteId} setEditId={setEditId}/>
      <Pagination
        handlePageClick={handlePageClick}
        totalPages={pageCount}
        currentPage={0}
      ></Pagination>
      <DeleteModal handleClose={handleClose} handleDelete={handleDelete} />
      <EditModal handleClose={handleCreateModalClose} handleDelete={handleCreate} editId={editId}/>
      {/* <EditModal /> */}
    </>
  );
};

export default BookingsIndex;
