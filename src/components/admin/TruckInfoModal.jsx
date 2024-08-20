/* eslint-disable react/prop-types */
const TruckInfoModal = ({ truck, handleBooking }) => {
  return (
    <div
      className="modal fade"
      data-bs-theme="dark"
      id="truckInfoModal"
      tabIndex="-1"
      aria-labelledby="truckInfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog text-white">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="truckInfoModalLabel">
              Truck Details
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src="https://images.contentstack.io/v3/assets/blte891c850d5781579/blt53faefb3dffea48c/6452c0632beffe356089eb86/why-is-it-called-a-semi-truck.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title mt-3">{truck?.name}</h5>
              <p className="mb-0 mt-2">
                <span>Brand: {truck?.brand}</span>
              </p>
              <p className="mb-0">
                <span>Truck Type: {truck?.type}</span>
              </p>
              <p className="mb-0">
                <span>Plate Number: {truck?.plate}</span>
              </p>
              <p className="mb-0">
                <span>Capacity: {truck?.capacity} TON</span>
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => handleBooking(truck?.id)}
            >
              Make Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckInfoModal;
