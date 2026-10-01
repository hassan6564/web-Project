import "bootstrap/dist/css/bootstrap.min.css";

function ProductManagement() {
  return (
    <div className="container mt-5">

      <h1 className="mb-4">Product Management</h1>

      <div className="card shadow mb-4">
        <div className="card-header">
          <h4>Add Product</h4>
        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
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
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter quantity"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Supplier</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter supplier"
              />
            </div>

          </div>

          <button className="btn btn-primary">
            Add Product
          </button>

        </div>
      </div>


      <div className="card shadow">

        <div className="card-header">
          <h4>Product List</h4>
        </div>

        <div className="card-body">

          <table className="table table-striped table-hover">

            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Supplier</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>Electronics</td>
                <td>Rs. 85,000</td>
                <td>10</td>
                <td>ABC Computers</td>
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
                <td>2</td>
                <td>Keyboard</td>
                <td>Accessories</td>
                <td>Rs. 3,500</td>
                <td>25</td>
                <td>Tech Supplier</td>
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
                <td>3</td>
                <td>Mouse</td>
                <td>Accessories</td>
                <td>Rs. 2,000</td>
                <td>30</td>
                <td>Tech Supplier</td>
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

export default ProductManagement;