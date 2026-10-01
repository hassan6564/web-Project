import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Shop Management System</h1>
        <h2>Login</h2>

        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;