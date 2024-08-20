/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginAdmin from "./pages/LoginAdmin";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { useState } from "react";
import AddTruck from "./pages/admin/truck/AddTruck";
import EditTruck from "./pages/admin/truck/EditTruck";
import TruckIndex from "./pages/admin/truck/Index";
import Settings from "./pages/admin/Settings";
import { default as UserSettings } from "./pages/user/Settings";
import BookingsIndex from "./pages/user/booking/Index";
import AdminBookingsIndex from "./pages/admin/booking/Index";
import AddBooking from "./pages/user/booking/AddBooking";
import AdminAddBooking from "./pages/admin/booking/AddBooking";
import AdminDetailBooking from "./pages/admin/booking/DetailBooking";
import AdminEditBooking from "./pages/admin/booking/EditBooking";
import UserLayout from "./components/user/UserLayout";
import AdminLayout from "./components/admin/AdminLayout";

const ProtectedRoutes = ({ user }) => {
  const isUserLoggedIn = (user !== null)? true : false;
  if (isUserLoggedIn === false) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

function App() {
  // const [user, setUser] = useState({}); //logged in
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginAdmin" element={<LoginAdmin setUser={setUser}/>} />
        {/* apply redirection if user is not loggedIn */}
        <Route path="/" element={user?<Navigate to= '/client'/>:<Navigate to='/login'/>}/>
        <Route element={<AdminLayout user={user}/>}>
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="admin" element={<Outlet />}>
              <Route index element={<AdminDashboard user={user}/>} />
              <Route path="trucks" element={<Outlet />}>
                <Route index element={<TruckIndex />} />
                <Route path="create" element={<AddTruck />} />
                <Route path=":truckId/edit" element={<EditTruck />} />
              </Route>
              <Route path="bookings" element={<Outlet />}>
                <Route index element={<AdminBookingsIndex />} />
                <Route path="create" element={<AdminAddBooking />} />
                <Route path=":bookingId" element={<AdminDetailBooking />} />
                <Route path=":bookingId/edit" element={<AdminEditBooking />} />
              </Route>
              {/* search page ? */}
              <Route path="settings" element={<Settings user={user}/>} />
            </Route>
          </Route>
        </Route>
        <Route element={<UserLayout user={user} />}>
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="client" element={<Outlet />}>
              <Route index element={<UserDashboard user={user}/>} />
              <Route path="bookings" element={<Outlet />}>
                <Route index element={<BookingsIndex user={user}/>} />
                <Route path="create" element={<AddBooking user={user}/>} />
              </Route>
              <Route path="settings" element={<UserSettings user={user} />} />
            </Route>
          </Route>
        </Route>

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
