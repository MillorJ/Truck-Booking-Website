/* eslint-disable react/prop-types */
const FeaturedTruckCard = ({ truck, handleClick }) => {
  return (
    <div className="col col-md-6 col-xl-4 d-flex p-3">
      <div className="card flex-grow-1 text-bg-dark" style={{ width: "20em" }}>
        {/* <img src={truck.imageUrl} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{truck.name}</h5>
          <div></div>
          <p className="mb-0">
            <span>Brand: {truck.brand}</span>
          </p>

          <div className="mt-3">
            <button
              className="btn btn-outline-danger float-end"
              onClick={handleClick}
            >
              Rent This Truck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTruckCard;
