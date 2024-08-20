import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../lib/api";
const RentalOrder = () => {
  const [data, setData] = useState({});
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    data.capacity = parseInt(data.capacity);
    const response = await Api().post('truckregister', data)
    .then(response => console.log(response))
    .catch(error => console.error(error));

    console.log(response);



    // Handle form submit here!!!!!
  };

  const handleValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="card text-bg-dark ">
      <div className="card-body p-4">
        <form onSubmit={handleSubmitForm}>
          <div className="row g-3 pb-2">
            <h4 className="mb-0 mt-4">Create Truck</h4>

            <div className="col-md-4">
              <label htmlFor="name" className="form-label mb-1">
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
            <div className="col-md-4 col-6">
              <label htmlFor="brand" className="form-label mb-1">
                Brand
              </label>
              <input
                id="brand"
                type="text"
                className="form-control"
                placeholder=""
                name="brand"
                aria-label="brand"
                onChange={handleValueChange}
              />
            </div>
            <div className="col-md-4 col-6">
              <label htmlFor="type" className="form-label mb-1">
                Truck Type
              </label>
              <input
                id="type"
                type="text"
                className="form-control"
                placeholder=""
                name="type"
                aria-label="type"
                onChange={handleValueChange}
              />
            </div>
            <div className="col-md-4 col-6">
              <label htmlFor="plate" className="form-label mb-1">
                Plate Number
              </label>
              <input
                id="plate"
                type="text"
                className="form-control"
                placeholder=""
                name="plate"
                aria-label="type"
                onChange={handleValueChange}
              />
            </div>
            <div className="col-md-4 col-6">
              <label htmlFor="capacity" className="form-label mb-1">
                Trailer Capacity
              </label>
              <input
                id="capacity"
                type="number"
                className="form-control"
                defaultValue={1}
                name="capacity"
                aria-label="capacity"
                onChange={handleValueChange}
              />
            </div>
            
            
          </div>

          <hr className="my-4" />

          

          <div className="d-flex justify-content-end">
            <button className="btn btn-danger mt-4">Create Truck</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentalOrder;
