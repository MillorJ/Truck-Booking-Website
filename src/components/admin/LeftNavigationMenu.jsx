/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/react.svg";
import * as routes from "../../lib/routes";

const LeftNavigationMenu = () => {
  const currentLocation = useLocation();

  const userNavMenu = [
    {
      link: routes.ADMIN_DASHBOARD,
      name: "Dashboard",
      icon: "bi bi-speedometer2",
    },
    {
      link: routes.ADMIN_BOOKINGS,
      name: "Bookings",
      icon: "bi bi-journal-text",
    },
    {
      link: routes.ADMIN_RENT_A_TRUCK,
      name: "Truck Management",
      icon: "bi bi-truck",
    },
    {
      link: routes.ADMIN_SETTINGS,
      name: "Settings",
      icon: "bi bi-gear",
    },
  ];

  return (
    <div
      id="side-menu"
      className={`d-flex flex-column justify-content-between sidemenu bg-dark`}
      style={{ width: "250px" }}
    >
      <div>
        <div className="row mb-4">
          <div className="col px-0 d-flex justify-content-center">
            <img
              src={Logo}
              className="bg-light rounded-circle"
              width={90}
              height={90}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="text-white">
              <div className="list-group">
                {userNavMenu.map((nav, index) => (
                  <Link
                    to={nav.link}
                    key={index}
                    className={`list-group-item list-group-item-action py-4 border-top rounded-0 ${
                      nav.link === currentLocation.pathname ? "menu-active" : ""
                    }`}
                    aria-current="true"
                  >
                    <span>
                      <i className={`${nav.icon} me-4`}></i>
                    </span>
                    {nav.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavigationMenu;
