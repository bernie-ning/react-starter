import * as React from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const Logout = () => {
    navigate('/Logout');
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/StepA">StepA</Link>
                </li>
                <li className="nav-item">
                  <Link to="/StepB">StepB</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button onClick={Logout}>Logout</button>
      </div>

      <div className="body">
        <Outlet />
      </div>
      <footer>footer</footer>
    </>
  );
}
