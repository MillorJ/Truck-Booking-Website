/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import EditRentalModal from "./EditRentalModal";
import Api from "../../lib/api";

const TruckList = () => {

  const [trucks, setTrucks] = useState([]);
  const token = localStorage.getItem("token");
  const [editId, setEditId] = useState({});
  const [deleteId, setDeleteId] = useState({});

  const handleUpdate = (id) => {
    setEditId(id);
  };

  const handleDelete = async(id) => {
    // Handle the deletion of the booking here!!!!
    setDeleteId(id);
    await Api().delete(`trucks/${id}`, deleteId)
    .then(response => console.log(response))
    .catch(error => console.error(error));
    

  };

  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setTrucks(response.data))
    .catch((error) => console.error(error));
  }, [trucks, token]);
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th className="p-4">Truck ID</th>
            <th className="p-4">Truck Name</th>
            <th className="p-4">Brand</th>
            <th className="p-4">Plate</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {trucks && trucks.length > 0 ? (
            trucks.map((item) => (
              <tr key={item.id}>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.brand}</td>
                <td className="p-4">{item.plate}</td>
                <td
                  className={`p-4 ${
                    item.status === "AVAILABLE" ? "text-success" : "UNAVAILABLE" === 1? "text-danger": "text-warning"
                  }`}
                >
                  {item.status === "AVAILABLE" ? "AVAILABLE" : "UNAVAILABLE" === 1? "UNAVAILABLE": "FOR REPAIR"}
                </td>
                <td className="p-4 text-center">
                  <div className="d-flex justify-content-around">
                    <a
                      role="button"
                      className="text-success text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Edit
                    </a>
                    <EditRentalModal truckId={editId} />
                    <span>|</span>
                    <a
                      role="button"
                      className="text-danger text-decoration-none"
                      data-bs-target="#delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="h-100">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "250px" }}
                >
                  <p className="text-center">You have no available bookings.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TruckList;
