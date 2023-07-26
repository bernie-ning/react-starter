import * as React from 'react';

function Login() {
  const showIndexPage = React.useState(true);
  const login = () => {
    localStorage.setItem('isLogin', 'true');
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <h3 className="text-center m-5">Login</h3>
        <div className="row mb-3" style={{ lineHeight: '38px' }}>
          <label htmlFor="uname" className="form-label col-3 text-end">
            User Name
          </label>
          <div className="col-7">
            <input className="form-control" type="text" id="uname" />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputPassword"
            className="col-3 text-end"
            style={{ lineHeight: '38px' }}
          >
            Password
          </label>
          <div className="col-7">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
