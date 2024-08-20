/* eslint-disable react/prop-types */
const TruckInfoCard = ({ truck, setTruck }) => {
  return (
    <div className="col col-md-6 col-xl-4 d-flex p-3">
      <div className="card flex-grow-1 text-bg-dark" style={{ width: "20em" }}>
        <img src="https://images.contentstack.io/v3/assets/blte891c850d5781579/blt53faefb3dffea48c/6452c0632beffe356089eb86/why-is-it-called-a-semi-truck.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{truck.name}</h5>
          <div></div>
          <p className="mb-0">
            <span>Brand: {truck.brand}</span>
          </p>

          <div className="mt-3">
            <button
              className="btn btn-primary"
              onClick={() => {setTruck(truck)}}
              data-bs-toggle="modal"
              data-bs-target="#truckInfoModal"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckInfoCard;
