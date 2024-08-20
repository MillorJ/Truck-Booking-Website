/* eslint-disable react/prop-types */
const DeleteModal = ({ handleDelete, handleClose }) => {
  return (
    <div
      className="modal fade"
      data-bs-theme="dark"
      id="delete"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog text-white">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Delete Booking?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this booking? This action cannot be
            undone.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              No, Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleDelete}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
