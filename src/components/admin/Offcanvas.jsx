import { Link } from "react-router-dom";
import * as routes from "../../lib/routes";
import { FaUserCircle } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Offcanvas = ({ handleLogout , user}) => {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      info: "View your dashboard.",
      path: routes.ADMIN_DASHBOARD,
      color: "text-danger",
    },
    {
      id: 2,
      name: "Bookings",
      info: "View all user bookings.",
      path: routes.ADMIN_BOOKINGS,
      color: "text-primary",
    },
    {
      id: 3,
      name: "Truck Management",
      info: "Manage your trucks.",
      path: routes.ADMIN_RENT_A_TRUCK,
      color: "text-success",
    },
    {
      id: 4,
      name: "Settings",
      info: "Update your account information.",
      path: routes.ADMIN_SETTINGS,
      color: "text-warning",
    },
  ];

  return (
    <div
      className="offcanvas offcanvas-end bg-dark text-white"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header" style={{ zIndex: "1000" }}>
        <h5 id="offcanvasRightLabel">User Profile</h5>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          <div className="row mb-4">
            <div className="col-5">
              <FaUserCircle style={{ width: "128px", height: "128px" }}/>
            </div>
            <div className="col-7">
              <p className="fw-bold mb-1 fs-5">{user.name}</p>
              <p className="mb-0 text-secondary mb-1">{user.role=='admin'?"ADMIN":"CLIENT"}</p>
              <p className="mb-2 text-secondary mb-3">
                <i className="bi bi-envelope-check-fill text-secondary"></i>{user.email}
              </p>

              <a
                className="btn btn-outline-danger fs-7 py-1 px-2"
                onClick={handleLogout}
              >
                Sign Out
              </a>
            </div>
          </div>

          <hr />

          <div className="mb-4">
            {links.map((link) => (
              <Link
                to={link.path}
                key={link.id}
                className="text-decoration-none text-white"
              >
                <div
                  className="row offcanvas-link-hover"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <div className="col-2">
                    <i
                      className={`bi bi-${link.id}-square-fill fs-1 ${link.color}`}
                    ></i>
                  </div>
                  <div className="col-10 d-flex flex-column justify-content-center">
                    <h6 className="mb-0 align-middle">{link.name}</h6>
                    <p className="mb-0 align-middle text-secondary fs-7">
                      {link.info}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <hr />
        </div>

        <div>
          <p className="fs-7 text-secondary text-center mb-0">
            Copyright ©2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
