import { useEffect, useState } from "react";
import axios from "axios";
import { TRUCKING_LIST } from "../../lib/data";
import FeaturedTruckCard from "../../components/user/FeaturedTruckCard";
import { useNavigate } from "react-router-dom";
import { USER_CREATE_A_BOOKING } from "../../lib/routes";

const UserDashboard = ({user}) => {
  const [truckList, setTruckList] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => setTruckList(response.data))
    .catch(error => console.error(error));
  }, [token]);

  return (
    <>
      <h2 className="py-4">Featured Trucks</h2>
      <div className="row gx-0">
        {truckList.map((truck) => (
          <FeaturedTruckCard
            truck={truck}
            handleClick={() => navigate(USER_CREATE_A_BOOKING)}
            key={truck.id}
          />
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
