import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const LoginComponent = () => {
  return (
    <>
    <html lang="en">
    <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
    </head>

    <body className="login-body">
    <main>
    <section className='all-nav'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
        <div className="container-fluid">
          <a className="navbar-brand text-Kaushan mx-3" href="home.html">Coach Finder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2 nav-item-equalspace">
                <a className="nav-link text-white nav-col-border" href="searchpage.html">Search</a>
              </li>
              <li className="nav-item mx-2 nav-item-equalspace">
                <a className="nav-link text-white nav-col-border" href="traineeprofile.html">Profile</a>
              </li>
              <li className="nav-item mx-2 nav-item-equalspace">
                <a className="nav-link text-white nav-col-border" href="appointmentscreen.html">Appointments</a>
              </li>
              <li className="nav-item mx-2 nav-item-equalspace">
                <a className="nav-link text-white nav-col-border" href="message.html">Messages</a>
              </li>
              <li className="nav-item mx-2 nav-item-equalspace">
                <a className="nav-link text-white nav-col-border" href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </section>

      <section className="login">
        <div className="container">
            <div className="container-fluid pb-1 mt-5 mb-5 login-div">
            <h1 className="fw-bold">System Login</h1>
            <div className="mb-3">
                <label htmlFor="Useremail" className="form-label lead">Email:</label>
                <input className="form-control" type="email" id="Useremail" name="Useremail" placeholder="xx@xx.com" required />
                <div className="invalid-feedback">Please enter a valid email</div>
            </div>
            <div className="mb-3">
                <label htmlFor="Userpassword" className="form-label lead">Password:</label>
                <input className="form-control" type="password" id="Userpassword" name="Userpassword" required minLength={8}/>
                <div className="invalid-feedback">Password must be at least 8 characters</div>
            </div>
            <div className="text-center mt-5">
                <button className="w-50 btn btn-lg btn-primary btn-orange" type="submit">Log in</button>
            </div>
            <div className="mt-3 mb-0 text-center">
                <p>Don't have an account? <a href="register.js" className="text-start text-lightorange">Register</a></p>
            </div>
            </div>
        </div>
      </section>

      <footer className="login-footer">
        <div className="container text-white">
          <p className="text-center mt-0 mb-0">This website was created by ...</p>
          <address className="text-center mt-0 mb-0">
            Contact us at <a href="mailto:me@here.com">me@here.com</a>, or at <a href="tel:555-123-4567">(555) 123-4567</a>.
          </address>
          <p className="text-center mt-0 mb-0">&copy; 2024 The Author.</p>
        </div>
      </footer>

      </main>
      </body>

      </html>
    </>
  );
};

export default LoginComponent;