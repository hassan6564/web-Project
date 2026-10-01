import "bootstrap/dist/css/bootstrap.min.css";

function Sales() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Sales Management
      </h1>

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">Add Sale</h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter customer name"
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
              <label className="form-label">Price</label>
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
                <option>Card</option>
                <option>Online Payment</option>
              </select>
            </div>

          </div>

          <button className="btn btn-success">
            Add Sale
          </button>

        </div>

      </div>


      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-3">Recent Sales</h3>

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>Sale ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Payment</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Ali</td>
                <td>Laptop</td>
                <td>1</td>
                <td>Rs. 85,000</td>
                <td>Cash</td>
              </tr>

              <tr>
                <td>002</td>
                <td>Ahmed</td>
                <td>Keyboard</td>
                <td>2</td>
                <td>Rs. 7,000</td>
                <td>Card</td>
              </tr>

              <tr>
                <td>003</td>
                <td>Usman</td>
                <td>Mouse</td>
                <td>3</td>
                <td>Rs. 6,000</td>
                <td>Online Payment</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Sales;