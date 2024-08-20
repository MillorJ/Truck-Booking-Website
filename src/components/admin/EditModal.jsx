import { useState } from "react";
import Api from "../../lib/api";

const EditModal = ({editId}) => {

  const [data, setData] = useState({});

  const handleValueChange = (e) => {
    setData( {BookingStatus: e.target.value})
  }
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    console.log(data)
    console.log(editId)

    const response = await Api().put(`bookingsadmin/${editId}`, data)
    .then(response => console.log(response))
    .catch(error => console.error(error));

    console.log(response);


    // Handle form submit here!!!!!
  };

  return (
    <div
      className="modal fade"
      id="editModal"
      data-bs-theme="dark"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmitForm}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="card text-bg-dark border-0">
                <div className="card-body">
                  <div className="row g-3 pb-2">
                    <h4 className="mb-0 mt-4">Update Booking Status</h4>

                    <div className="col-12">
                      <label htmlFor="BookingStatus" className="form-label mb-1">
                        Status
                      </label>
                      <select name="BookingStatus" onChange={handleValueChange}>
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="FINISHED">Finished</option>
                      </select>
                    </div>
                  </div>

                  <hr className="my-4" />

                  
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={handleSubmitForm}>
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal
