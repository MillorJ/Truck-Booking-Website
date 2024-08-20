import { useState } from "react";
import { usePassword } from "../../hooks/usePassword";
import Api from "../../lib/api";

const DEFAULT = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const PasswordTab = ({user}) => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [data, setData] = useState({ ...DEFAULT });
  const [userData, setUserData] = useState(user);


  const { showPasswordField, handleShowPassword, setShowPasswordField } =
    usePassword(DEFAULT);

  const handleInputChange = (e) => {
    setData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateForm = async(e) => {
    // handle update password here!!!!
    e.preventDefault();

    setEnableEdit(false);
    setData({ ...DEFAULT });

    userData.password = data.newPassword;

    const response = await Api().put(`account/${user.id}`, userData)
    .then(response => response.data)
    .catch(error => console.error(error));

    console.log(response);
    
  };

  const handleCancel = () => {
    setEnableEdit(false);
    setData({ ...DEFAULT });
    setShowPasswordField(DEFAULT);
  };

  return (
    <>
      <h4 className="mb-4">Account Passsword</h4>
      <form onSubmit={handleUpdateForm}>
        <div className="row g-3 pb-2">
          <div className="col-12">
            <label htmlFor="oldPassword" className="form-label mb-1">
              Old Password
            </label>
            <div className="input-group mb-3">
              <input
                id="oldPassword"
                name="oldPassword"
                type={showPasswordField["oldPassword"] ? "text" : "password"}
                className="form-control"
                placeholder=""
                aria-label="email"
                disabled={!enableEdit}
                value={data.oldPassword}
                onChange={handleInputChange}
              />
              <span
                className="input-group-text"
                onClick={() => handleShowPassword("oldPassword")}
                role="button"
              >
                <i
                  className={
                    showPasswordField["oldPassword"]
                      ? "bi bi-eye-fill"
                      : "bi bi-eye-slash-fill"
                  }
                ></i>
              </span>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="newPassword" className="form-label mb-1">
              New Password
            </label>
            <div className="input-group mb-3">
              <input
                id="newPassword"
                name="newPassword"
                type={showPasswordField["newPassword"] ? "text" : "password"}
                className="form-control"
                placeholder=""
                aria-label="newPassword"
                disabled={!enableEdit}
                value={data.newPassword}
                onChange={handleInputChange}
              />
              <span
                className="input-group-text"
                onClick={() => handleShowPassword("newPassword")}
                role="button"
              >
                <i
                  className={
                    showPasswordField["newPassword"]
                      ? "bi bi-eye-fill"
                      : "bi bi-eye-slash-fill"
                  }
                ></i>
              </span>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="confirmPassword" className="form-label mb-1">
              Confirm Password
            </label>
            <div className="input-group mb-3">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showPasswordField["confirmPassword"] ? "text" : "password"
                }
                className="form-control"
                placeholder=""
                aria-label="confirmPassword"
                disabled={!enableEdit}
                value={data.confirmPassword}
                onChange={handleInputChange}
              />
              <span
                className="input-group-text"
                onClick={() => handleShowPassword("confirmPassword")}
                role="button"
              >
                <i
                  className={
                    showPasswordField["confirmPassword"]
                      ? "bi bi-eye-fill"
                      : "bi bi-eye-slash-fill"
                  }
                ></i>
              </span>
            </div>
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
            Update Pasword
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
          <button role="submit" className="btn btn-danger mt-4 flex-grow-1" onClick={handleUpdateForm}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordTab;
