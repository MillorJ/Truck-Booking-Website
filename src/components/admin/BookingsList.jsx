import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BookingsList = () => {

  return (
    <section className="bookings-list">
      <div className="card border-dark pb-3">
        <div className="card-header bg-dark d-flex justify-content-between align-items-center">
          <h3 className="text-warning">Bookings List</h3>
          <Link to={"/admin/bookings"} className="btn btn-success text-white">
            Manage Bookings
          </Link>
        </div>
        <div
          className="card-body bg-light rounded"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <ul className="list-group">
            <li className=" rounded mb-3 list-group-item list-group-item-dark bg-dark text-light d-flex justify-content-between">
              <span className="inline-block lead text-monospace">
                #ID - Booker Name - Location - Month 01, year
              </span>
              <a
                role="button"
                className="card-link text-primary text-decoration-none "
              >
                Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookingsList;
