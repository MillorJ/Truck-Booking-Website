/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import userCircle from "../../assets/user-circle.svg";

const Navbar = ({ handleLeftNavigation, isLeftNavigationOpen }) => {
  return (
    <>
      <nav
        id="nav"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        style={{ marginLeft: isLeftNavigationOpen ? "250px" : "0px" }}
      >
        <div className="container-fluid d-flex justify-content-sm-between">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-danger me-4 fs-4"
              onClick={() => handleLeftNavigation()}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-center">
              <Link
                to="/admin"
                className="navbar-brand fs-2 d-none d-md-block"
              >
                Book N&apos; Truck
              </Link>
            </div>
          </div>
          <div>
            <a
              id="user-drop-down"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img src={userCircle} alt="user-icon" className="avatar" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
