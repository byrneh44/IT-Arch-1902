const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
