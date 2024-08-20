import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Api from "../../lib/api";
const EditRentalModal = ({truckId}) => {
  const [data, setData] = useState(null);



  const handleValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    console.log(truckId)
    data.id = truckId;
    data.capacity = parseInt(data.capacity);
    const response = await Api().put(`trucks/${truckId}`, data)
    .then(response => console.log(response))
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
                    <h4 className="mb-0 mt-4">Update Truck</h4>

                    <div className="col-md-6 col-12">
                      <label htmlFor="rental-date" className="form-label mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="name"
                        aria-label="name"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label
                        htmlFor="rental-owner"
                        className="form-label mb-1"
                      >
                        Brand
                      </label>
                      <input
                        id="rental-owner"
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="brand"
                        aria-label="rental-owner"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label
                        htmlFor="trailer-used"
                        className="form-label mb-1"
                      >
                        Type
                      </label>
                      <input
                        id="trailer-used"
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="type"
                        aria-label="trailer-used"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label
                        htmlFor="trailer-used"
                        className="form-label mb-1"
                      >
                        Plate Number
                      </label>
                      <input
                        id="trailer-used"
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="plate"
                        aria-label="trailer-used"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label
                        htmlFor="trailer-used"
                        className="form-label mb-1"
                      >
                        Capacity
                      </label>
                      <input
                        id="trailer-used"
                        type="Number"
                        className="form-control"
                        placeholder=""
                        name="capacity"
                        aria-label="trailer-used"
                        onChange={handleValueChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label
                        htmlFor="trailer-used"
                        className="form-label mb-1"
                      >
                        Status
                      </label>
                      <select name="status"className="col-md-6 col-12" onChange={handleValueChange}>
                        <option value="AVAILABLE">Available</option>
                        <option value="UNAVAILABLE">Unavailable</option>
                        <option value ="FOR_REPAIR">For Repair</option>
                      </select>
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

export default EditRentalModal
