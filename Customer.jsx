import "bootstrap/dist/css/bootstrap.min.css";

function Customer() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Customer Management
      </h1>

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">Add Customer</h3>

          <div className="row">

            <div className="col-md-4 mb-3">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter customer name"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Customer Type</label>
              <select className="form-control">
                <option>Regular</option>
                <option>Wholesale</option>
              </select>
            </div>

          </div>

          <button className="btn btn-success">
            Add Customer
          </button>

        </div>

      </div>


      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-3">Customer List</h3>

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Ali</td>
                <td>03001234567</td>
                <td>ali@gmail.com</td>
                <td>Islamabad</td>
                <td>Regular</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
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
                <td>ahmed@gmail.com</td>
                <td>Rawalpindi</td>
                <td>Wholesale</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>003</td>
                <td>Usman</td>
                <td>03221234567</td>
                <td>usman@gmail.com</td>
                <td>Lahore</td>
                <td>Regular</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
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

export default Customer;