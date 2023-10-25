import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div>
        <nav>
          <ul className="list-unstyled list-inline">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/StepA">StepA</Link>
            </li>
            <li>
              <Link to="/StepB">StepB</Link>
            </li>
          </ul>
        </nav>
        <button>Logout</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
