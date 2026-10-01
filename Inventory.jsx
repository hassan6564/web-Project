import "bootstrap/dist/css/bootstrap.min.css";

function Inventory() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Inventory / Stock Management
      </h1>

      <div className="row mb-4">

        <div className="col-md-3">
          <div className="card text-center p-3 shadow">
            <h5>Total Products</h5>
            <h2>250</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 shadow">
            <h5>In Stock</h5>
            <h2>220</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 shadow">
            <h5>Low Stock</h5>
            <h2>20</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 shadow">
            <h5>Out of Stock</h5>
            <h2>10</h2>
          </div>
        </div>

      </div>


      <div className="card shadow">

        <div className="card-body">

          <h3 className="mb-3">Current Stock</h3>

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>Product No.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Minimum Stock</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>Laptop</td>
                <td>Electronics</td>
                <td>10</td>
                <td>5</td>
                <td className="text-success">In Stock</td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    Update
                  </button>
                </td>
              </tr>

              <tr>
                <td>002</td>
                <td>Keyboard</td>
                <td>Accessories</td>
                <td>4</td>
                <td>10</td>
                <td className="text-warning">Low Stock</td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    Update
                  </button>
                </td>
              </tr>

              <tr>
                <td>003</td>
                <td>Mouse</td>
                <td>Accessories</td>
                <td>0</td>
                <td>5</td>
                <td className="text-danger">Out of Stock</td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    Update
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

export default Inventory;