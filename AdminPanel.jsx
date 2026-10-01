import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Admin Panel
      </h1>

      <div className="row">

        <div className="col-md-4">

          <div className="list-group shadow">

            <button className="list-group-item list-group-item-action active">
              Admin Dashboard
            </button>

            <button className="list-group-item list-group-item-action">
              Manage Users
            </button>

            <button className="list-group-item list-group-item-action">
              System Settings
            </button>

            <button className="list-group-item list-group-item-action">
              Security
            </button>

            <button className="list-group-item list-group-item-action">
              Backup
            </button>

          </div>

        </div>


        <div className="col-md-8">

          <div className="border rounded p-4 shadow-sm">

            <h3 className="mb-4">
              Admin Information
            </h3>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Admin Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value="Shop Admin"
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  value="admin@shop.com"
                  readOnly
                />
              </div>

            </div>


            <h4 className="mt-4 mb-3">
              System Settings
            </h4>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked
              />

              <label className="form-check-label">
                Enable Notifications
              </label>
            </div>


            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked
              />

              <label className="form-check-label">
                Automatic Backup
              </label>
            </div>


            <button className="btn btn-primary me-2">
              Save Settings
            </button>

            <button className="btn btn-danger">
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminPanel;