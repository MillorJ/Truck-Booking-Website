import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLeftNavigation } from "../../hooks/useLeftNavigation";
import LeftNavigationMenu from "./LeftNavigationMenu";
import Navbar from "./Navbar";
import Offcanvas from "./Offcanvas";
import Footer from "../Footer";
import Api from "../../lib/api";


const AdminLayout = ({user}) => {

  const navigate = useNavigate();
  const { isLeftNavigationOpen, handleLeftNavigation } = useLeftNavigation();
  const token = localStorage.getItem("token");
  const handleLogout = async() => {
    // Handle Logout here!!!!
    // localStorage.removeItem("token");
    // await Api().post("logout", token)
    // .then(response => console.log(response))
    // .catch(error => console.error(error));
    // navigate("/login");

    console.log("Logging out...");
  };

  return (
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
  );
};

export default AdminLayout;
