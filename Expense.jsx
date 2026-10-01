import "bootstrap/dist/css/bootstrap.min.css";

function Expense() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "30px",
        borderRadius: "15px"
      }}
    >

      <h1 className="text-center mb-4">
        Expense Management
      </h1>

      <div className="card shadow mb-4 bg-dark text-white">

        <div className="card-body">

          <h3 className="mb-3">Add Expense</h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Expense Title</label>
              <input
                type="text"
                className="form-control bg-secondary text-white"
                placeholder="e.g. Electricity Bill"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Expense Type</label>
              <select className="form-control bg-secondary text-white">
                <option>Electricity</option>
                <option>Rent</option>
                <option>Salary</option>
                <option>Transport</option>
                <option>Maintenance</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control bg-secondary text-white"
                placeholder="Enter amount"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control bg-secondary text-white"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-control bg-secondary text-white">
                <option>Cash</option>
                <option>Card</option>
                <option>Bank Transfer</option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control bg-secondary text-white"
                rows="3"
                placeholder="Enter expense details"
              ></textarea>
            </div>

          </div>

          <button className="btn btn-light">
            Add Expense
          </button>

        </div>

      </div>

      <div className="card shadow bg-dark text-white">

        <div className="card-body">

          <h3 className="mb-3">Expense List</h3>

          <table className="table table-dark table-bordered table-striped">

            <thead>
              <tr>
                <th>Expense ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Electricity Bill</td>
                <td>Electricity</td>
                <td>Rs. 15,000</td>
                <td>30-09-2026</td>
                <td>Cash</td>
                <td>
                  <button className="btn btn-light btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>002</td>
                <td>Shop Rent</td>
                <td>Rent</td>
                <td>Rs. 50,000</td>
                <td>01-09-2026</td>
                <td>Bank Transfer</td>
                <td>
                  <button className="btn btn-light btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>003</td>
                <td>Transport</td>
                <td>Transport</td>
                <td>Rs. 5,000</td>
                <td>28-09-2026</td>
                <td>Cash</td>
                <td>
                  <button className="btn btn-light btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Expense;