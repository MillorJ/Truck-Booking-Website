import { useState, useEffect } from "react";
import Api from "../../lib/api";
import axios from "axios";

const PersonalInfoTab = ({user}) => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [originalUserData, setOriginalUserData] = useState(null);
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(user);

  const handleInputChange = (e) => {
    setUserData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateForm = async(e) => {
    // handle update profile here!!!!
    e.preventDefault();

    setOriginalUserData({ ...userData });
    setEnableEdit(false);


    const response = await Api().put(`account/${user.id}`, userData)
    .then(response => console.log(response))
    .catch(error => console.error(error));

    alert("Profile Updated Successfully");
  };

  const handleCancel = () => {
    setEnableEdit(false);
    setUserData({ ...originalUserData });
  };

  return (
    <>
      <h4 className="mb-4">Profile Information</h4>
      <form onSubmit={handleUpdateForm}>
        <div className="row g-3 pb-2">
          <div className="col-12">
            <label htmlFor="name" className="form-label mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="name"
              value={userData.name}
              disabled={!enableEdit}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder=""
              aria-label="email"
              value={userData.email}
              disabled={!enableEdit}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="contact" className="form-label mb-1">
              Contact Number
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="contact"
              value={userData.contact}
              disabled={!enableEdit}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div
          className={`${enableEdit ? "d-none" : "d-flex"} justify-content-end`}
        >
          <button
            type="button"
            className="btn btn-danger mt-4 flex-grow-1"
            onClick={() => setEnableEdit(true)}
          >
            Update Profile
          </button>
        </div>

        <div
          className={`${
            enableEdit ? "d-flex" : "d-none"
          } justify-content-end gap-3`}
        >
          <button
            type="button"
            className="btn btn-secondary mt-4 flex-grow-1"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button role="submit" className="btn btn-danger mt-4 flex-grow-1">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfoTab;
