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
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React Practise
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
                  <Link className="nav-link" to="/Form">
                    UseState-Form
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/DropDownList">
                    UseEffect
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/UseRef">
                    UseRef
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/UseReducer">
                    UseReducer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/UseCallback">
                    UseCallback
                  </Link>
                </li>
              </ul>
              <button onClick={Logout}>Logout</button>
            </div>
          </div>
        </nav>
      </div>

      <div className="body">
        <Outlet />
      </div>
      <footer>footer</footer>
    </>
  );
}
