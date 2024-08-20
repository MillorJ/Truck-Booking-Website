/* eslint-disable react/prop-types */
const UserBookingList = ({ currentItems, setDeleteId, setEditId }) => {
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th className="p-4">Booking ID</th>
            <th className="p-4">Truck Name:</th>
            <th className="p-4">Booking Date</th>
            <th className="p-4">Return Date</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((item) => (
              <tr key={item.id}>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.truck.name}</td>
                <td className="p-4">{item.startDate.toString().slice(0,10)}</td>
                <td className="p-4">{item.endDate.toString().slice(0,10)}</td>
                <td 
                  className={`p-4 
                    ${
                      item.status === 0
                        ? "text-warning"
                        : item.status === 1
                        ? "text-success"
                        : "text-danger"
                    }`}
                >
                  {item.status === "PENDING"
                    ? "Pending"
                    : item.status === "APPROVED"
                    ? "Approved"
                    : "Finished"  
                  }
                </td>
                <td className="p-4 text-center">
                  <div className="d-flex justify-content-around">
                    <a
                      role="button"
                      className="text-success text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={()=> setEditId(item.id)}
                    >
                      Edit
                    </a>
                    <span>|</span>
                    <a
                      role="button"
                      className="text-danger text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                      onClick={() => setDeleteId(item.id)}
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="h-100">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "250px" }}
                >
                  <p className="text-center">You have no available bookings.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserBookingList;
