import { useEffect, useState } from "react";
import DeleteModal from "../../../components/user/DeleteModal";
import Pagination from "../../../components/user/Pagination";
import { CLIENT_BOOKINGS_DATA } from "../../../lib/data";
import UserBookingList from "../../../components/user/UserBookingList";
import { usePagination } from "../../../hooks/usePagination";
import { UserEditModal } from "../../../components/user/EditModal";
import axios from "axios";
import Api from "../../../lib/api";

const BookingsIndex = ({user}) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const { currentItems, pageCount, handlePageClick } = usePagination(data);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/bookings", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setData(response.data))
    .catch(error => console.error(error));
  }, [data, token]);


  const handleDelete = () => {
    // Handle the deletion of the booking here!!!!
    const response = Api().delete(`bookings/${deleteId}`)
    .then(response => response.data)
    .catch(error => console.error(error));
    console.log(response);
    
  };

  const handleClose = () => {
    setDeleteId(null);
  };

  const handleSearch = () => {
    // Handle the searching of the booking heree!!!
    axios.get(`http://localhost:3000/bookings/search?search=${searchInput}`)
    .then(response => setData(response.data))
    .catch(error => console.error(error));
    console.log(data.bookingId);
  };

  return (
    <>
      <h2 className="py-4">Manage Bookings</h2>
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
      <UserEditModal editId = {editId} user={user}/>
    </>
  );
};

export default BookingsIndex;
