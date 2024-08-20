import { useEffect,useState } from "react";
import RentalOrder from "../../../components/admin/RentalOrder";
import TruckInfoCard from "../../../components/admin/TruckInfoCard";
import TruckInfoModal from "../../../components/admin/TruckInfoModal";
import { ADMIN_TRUCKING_LIST } from "../../../lib/data";
import axios from "axios";

const AddTruck = () => {
  const [truck, setTruck] = useState(null);
  const [truckList, setTruckList] = useState([]); // [
  const token = localStorage.getItem("token");


  useEffect(() => {
    axios.get("http://localhost:3000/trucks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => setTruckList(response.data))
    .catch((error) => console.error(error));
  })
  // const handleDetails = () => {
    

  // };
  const handleMakeRentalOrder = () => {
    // communicate to server
    return;
  };
  return (
    <div className="">
      <h1 className="py-3">
        <strong>Create Truck</strong>
      </h1>
      <RentalOrder />
      <div className="p-3"></div>
      <h2 className="py-3 text-monospace ">
        <strong>Trucks</strong>
      </h2>
      <div className="row ">
        {truckList.map((truck) => {
          return (
            <TruckInfoCard
              key={truck.id}
              truck={truck}
              setTruck={setTruck}
            />
          );
        })}
      </div>
      <TruckInfoModal truck={truck} />
    </div>
  );
};

export default AddTruck;
