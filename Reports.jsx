import "bootstrap/dist/css/bootstrap.min.css";

function Reports() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Business Reports
      </h1>

      <div className="row mb-4">

        <div className="col-md-3">
          <div className="bg-primary text-white p-3 rounded">
            <h6>Total Sales</h6>
            <h3>Rs. 125,000</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-success text-white p-3 rounded">
            <h6>Total Profit</h6>
            <h3>Rs. 40,000</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-warning p-3 rounded">
            <h6>Total Purchases</h6>
            <h3>Rs. 85,000</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-danger text-white p-3 rounded">
            <h6>Total Expenses</h6>
            <h3>Rs. 45,000</h3>
          </div>
        </div>

      </div>

      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-4">
            Monthly Report
          </h3>

          <table className="table table-bordered table-striped">

            <thead className="table-dark">
              <tr>
                <th>Month</th>
                <th>Sales</th>
                <th>Purchases</th>
                <th>Expenses</th>
                <th>Profit</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>July</td>
                <td>Rs. 100,000</td>
                <td>Rs. 65,000</td>
                <td>Rs. 30,000</td>
                <td className="text-success">Rs. 35,000</td>
              </tr>

              <tr>
                <td>August</td>
                <td>Rs. 115,000</td>
                <td>Rs. 75,000</td>
                <td>Rs. 35,000</td>
                <td className="text-success">Rs. 40,000</td>
              </tr>

              <tr>
                <td>September</td>
                <td>Rs. 125,000</td>
                <td>Rs. 85,000</td>
                <td>Rs. 45,000</td>
                <td className="text-success">Rs. 40,000</td>
              </tr>

            </tbody>

          </table>

          <div className="text-center mt-4">

            <button className="btn btn-primary me-2">
              Generate Report
            </button>

            <button className="btn btn-secondary">
              Print Report
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;