import axios from "axios";
import { useState, useEffect } from "react";
import Api from "../../lib/api";

const EditModal = ({editId}) => {
  const [data, setData] = useState(null);
  const [truckList, setTruckList] = useState([]);
  const [bookings, setBookings] = useState(null)
  const token = localStorage.getItem('token');

  const handleValueChange = (e) => {
    setBookings({ ...bookings, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setTruckList(response.data))
    .catch(error => console.error(error));
  }, [token]);

  useEffect(() => {
    if (editId) {
      axios.get(`http://localhost:3000/bookings/${editId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
    }
  }, [data, token]);
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    
    if (bookings.truckId === null) {
      booking.truckId = data.truckId;
    }
    if (bookings.startDate === "") {
      booking.startDate = data.startDate;
    }
    if (bookings.endDate === "") {
      booking.endDate = data.endDate;
    }
    const response = await Api().put(`bookings/${editId}`, bookings)
    .then(response => response.data)
    .catch(error => console.error(error));
    console.log(response);
    // Handle form submit here!!!!!
  };
  
  return (
    <div
      className="modal fade"
      id="editModal"
      data-bs-theme="dark"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmitForm}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="card text-bg-dark border-0">
                <div className="card-body">
                  <div className="row g-3 pb-2">
                    <h4 className="mb-0 mt-4">Update Your Booking</h4>

                    <div className="col-12">
                      <label htmlFor="truck" className="form-label mb-1">
                        Truck:
                      </label>
                      <select name="truckId" onChange={handleValueChange}>
                        {truckList.map((truck) => (
                          <option key={truck.id} value={truck.id}>{truck.name}</option>
                        ))}
                      </select>   
                    </div>
                    <div className="col-12">
                      <label htmlFor="pick-up-date" className="form-label mb-1">
                        Pick Up Date
                      </label>
                      <input
                        id="pick-up-date"
                        type="date"
                        className="form-control"
                        placeholder=""
                        name="startDate"
                        aria-label="pick-up-date"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="pick-up-date" className="form-label mb-1">
                        Return Date
                      </label>
                      <input
                        id="pick-up-date"
                        type="date"
                        className="form-control"
                        placeholder=""
                        name="endDate"
                        aria-label="return-date"
                        onChange={handleValueChange}
                      />
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={handleSubmitForm}>
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { EditModal as UserEditModal };
