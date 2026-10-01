import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-2">
        Shop Management Dashboard
      </h1>

      <p className="text-center text-muted mb-5">
        Welcome to your shop management system
      </p>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h5>Total Products</h5>
            <h2 className="text-primary">250</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h5>Total Sales</h5>
            <h2 className="text-success">Rs. 125,000</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h5>Total Purchases</h5>
            <h2 className="text-warning">Rs. 85,000</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-3">
            <h5>Low Stock</h5>
            <h2 className="text-danger">12</h2>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;