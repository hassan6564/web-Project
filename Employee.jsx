import "bootstrap/dist/css/bootstrap.min.css";

function Employee() {
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
        Employee Management
      </h1>

      <div className="card shadow mb-4 bg-dark text-white">

        <div className="card-body">

          <h3 className="mb-3">Add Employee</h3>

          <div className="row">

            <div className="col-md-4 mb-3">
              <label className="form-label">Employee Name</label>
              <input
                type="text"
                className="form-control bg-secondary text-white"
                placeholder="Enter employee name"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control bg-secondary text-white"
                placeholder="Enter phone number"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control bg-secondary text-white"
                placeholder="e.g. Cashier"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control bg-secondary text-white"
                placeholder="Enter salary"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input
                type="date"
                className="form-control bg-secondary text-white"
              />
            </div>

          </div>

          <button className="btn btn-light">
            Add Employee
          </button>

        </div>

      </div>

      <div className="card shadow bg-dark text-white">

        <div className="card-body">

          <h3 className="mb-3">Employee List</h3>

          <table className="table table-dark table-bordered table-striped">

            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Ali</td>
                <td>03001234567</td>
                <td>Cashier</td>
                <td>Rs. 35,000</td>
                <td>01-01-2026</td>
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
                <td>Ahmed</td>
                <td>03111234567</td>
                <td>Salesman</td>
                <td>Rs. 40,000</td>
                <td>15-02-2026</td>
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

export default Employee;