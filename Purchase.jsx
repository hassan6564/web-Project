import "bootstrap/dist/css/bootstrap.min.css";

function Purchase() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Purchase Management
      </h1>

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">Add Purchase</h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter supplier name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Product</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter quantity"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Purchase Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter price"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-control">
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>Credit</option>
              </select>
            </div>

          </div>

          <button className="btn btn-primary">
            Add Purchase
          </button>

        </div>

      </div>


      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-3">Recent Purchases</h3>

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>Purchase ID</th>
                <th>Supplier</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Payment</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>ABC Computers</td>
                <td>Laptop</td>
                <td>10</td>
                <td>Rs. 800,000</td>
                <td>Bank Transfer</td>
              </tr>

              <tr>
                <td>002</td>
                <td>Tech Supplier</td>
                <td>Keyboard</td>
                <td>20</td>
                <td>Rs. 60,000</td>
                <td>Cash</td>
              </tr>

              <tr>
                <td>003</td>
                <td>Tech Supplier</td>
                <td>Mouse</td>
                <td>30</td>
                <td>Rs. 45,000</td>
                <td>Credit</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Purchase;