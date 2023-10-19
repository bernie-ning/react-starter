import * as React from 'react';
import Body from './Body';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const logOut = () => {
  localStorage.removeItem('isLogin');
};

export default function MyHeader() {
  return (
    <>
      <div className="d-flex h3">
        <span>Logo</span>
        <span>setting</span>
      </div>
      <div>
        <input type="button" value="logout" onClick={logOut} />
      </div>

      <Body></Body>
    </>
  );
}
