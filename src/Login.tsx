import * as React from 'react';

function Login() {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.username);
  };

  const login = () => {
    localStorage.setItem('isLogin', 'true');
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <div style={{ width: '100%' }}>
          <h3 className="text-center m-5">Login</h3>
          <div className="row mb-3" style={{ lineHeight: '38px' }}>
            <label htmlFor="username" className="form-label col-3 text-end">
              User Name
            </label>
            <div className="col-7">
              <input
                className="form-control"
                type="text"
                name="username"
                value={inputs.username || ''}
                onChange={handleChange}
              />
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
                name="inputPassword"
                value={inputs.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-7">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                //onClick={login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
  );
}

export default Login;
