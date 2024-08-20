import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../lib/api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({user}) => {

  const navigate = useNavigate();
  const [truckList, setTruckList] = useState([]);
  const [truck, setTruck] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userId, setUserId] = useState(user.id);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setTruckList(response.data))
    .catch(error => console.error(error));
  }, [token]);
  const handleSubmitForm = async(e) => {
    e.preventDefault();

    const booking = {
      truckId: truck,
      startDate: startDate,
      endDate: endDate,
      userId: userId,
    };

    const response = await Api().post("/bookings/create", booking)
    .then(response => response.data)
    .catch(error => console.error(error));

    console.log(response);
    alert("Booking created successfully!");
    navigate("/client/bookings");

    // Handle form submit here!!!!!
  };

  return (
    <div className="card text-bg-dark " style={{ width: "500px" }}>
      <div className="card-body p-4">
        <form onSubmit={handleSubmitForm}>
          <div className="row g-3 pb-2">
            <h4 className="mb-0 mt-4">Set your Booking</h4>

            <div className="col-12">
              <label htmlFor="truck" className="form-label mb-1">
                Truck:
              </label>
              <select onChange={(e) => setTruck(e.target.value)}>
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
                id="startDate"
                type="date"
                className="form-control"
                placeholder=""
                aria-label="pick-up-date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="pick-up-date" className="form-label mb-1">
                Return Date
              </label>
              <input
                id="endDate"
                type="date"
                className="form-control"
                placeholder=""
                aria-label="pick-up-date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-end">
            <button className="btn btn-danger mt-4">Submit Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
