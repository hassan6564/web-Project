import "bootstrap/dist/css/bootstrap.min.css";

function Supplier() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Supplier Management
      </h1>

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">Add Supplier</h3>

          <div className="row">

            <div className="col-md-4 mb-3">
              <label className="form-label">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter supplier name"
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
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter company name"
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

          </div>

          <button className="btn btn-primary">
            Add Supplier
          </button>

        </div>

      </div>


      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-3">Supplier List</h3>

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>Supplier ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Ali Traders</td>
                <td>ABC Computers</td>
                <td>03001234567</td>
                <td>ali@abc.com</td>
                <td>Islamabad</td>
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
                <td>Tech Supplier</td>
                <td>Tech World</td>
                <td>03111234567</td>
                <td>tech@gmail.com</td>
                <td>Rawalpindi</td>
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
                <td>Computer House</td>
                <td>Computer House Ltd.</td>
                <td>03221234567</td>
                <td>info@computerhouse.com</td>
                <td>Lahore</td>
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

export default Supplier;