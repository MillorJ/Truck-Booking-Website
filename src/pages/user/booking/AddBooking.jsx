import { useState, useEffect } from "react";
import axios from "axios";
import { TRUCKING_LIST } from "../../../lib/data";
import BookingForm from "../../../components/user/BookingForm";
import TruckInfoCard from "../../../components/user/TruckInfoCard";
import TruckInfoModal from "../../../components/user/TruckInfoModal";

const AddBooking = ({user}) => {
  const [truckList, setTruckList] = useState([]);
  const token = localStorage.getItem('token');
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setTruckList(response.data))
    .catch(error => console.error(error));
  }, [token]);

  const handleBooking = (id) => {
    // Make Booking button of available truck services.
    // Handle it here...

    console.log("Selected truck: ", id);
  };

  return (
    <>
      <h2 className="py-4">Create a Booking</h2>
      <div className="d-flex justify-content-center">
        <BookingForm user={user}/>
      </div>

      <section>
        <h2 className="py-4">Available Trucking Services</h2>
        <div className="row gx-0">
          {truckList.map((truck) => (
            <TruckInfoCard
              truck={truck}
              setTruck={setTruck}
              handleBooking={handleBooking}
              key={truck.id}
            />
          ))}
        </div>
      </section>

      <TruckInfoModal truck={truck} />
    </>
  );
};

export default AddBooking;
