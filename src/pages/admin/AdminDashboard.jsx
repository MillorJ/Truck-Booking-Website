import BookingsList from "../../components/admin/BookingsList";
import TruckList from "../../components/admin/TruckList";

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="py-3"><strong>Dashboard View</strong></h2>
      <div className="p-3"></div>
      <TruckList/>
    </div>
  );
};

export default AdminDashboard;
