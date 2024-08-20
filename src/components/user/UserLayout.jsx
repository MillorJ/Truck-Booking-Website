import { Outlet } from "react-router-dom";
import { useLeftNavigation } from "../../hooks/useLeftNavigation";
import LeftNavigationMenu from "./LeftNavigationMenu";
import Navbar from "./Navbar";
import Offcanvas from "./Offcanvas";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Api from "../../lib/api";

const UserLayout = ({user}) => {
  const { isLeftNavigationOpen, handleLeftNavigation } = useLeftNavigation();

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleLogout = async() => {
    // Handle Logout here!!!!
  
    const response = await Api().post("/logout", token,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.data)
    .catch(error => console.error(error));

    localStorage.removeItem('token');
    navigate("/login");
    console.log(response);
    alert("Logging out...");
  };

  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-between">
        <LeftNavigationMenu isLeftNavigationOpen={isLeftNavigationOpen} />
        <div
          id="pg-content"
          className="pg-content relative"
          style={{ marginLeft: "250px" }}
        >
          <Navbar
            handleLeftNavigation={handleLeftNavigation}
            isLeftNavigationOpen={isLeftNavigationOpen}
          />
          <div className="container mt-4 py-4">
            <div className="pt-4">
              <Outlet />
            </div>
          </div>
        </div>

        <Offcanvas handleLogout={handleLogout} user={user}></Offcanvas>
        <div style={{ marginLeft: isLeftNavigationOpen ? "250px" : "0px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
