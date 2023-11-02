import * as React from 'react';

export default function StepA() {
  const [user, setUser] = React.useState({
    name: 'nxg',
    age: 10,
    gender: 'man',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="mt-3 mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            value={user.name || ''}
            className="form-control"
            id="name"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Age
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            value={user.age || ''}
            id="inputPassword"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="man" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-10">
          <input
            type="radio"
            className="form-check-inline"
            value={user.gender}
            id="man"
            name="gender"
            onChange={handleChange}
          />
          <label htmlFor="man" className="col-sm-2 col-form-label">
            Man
          </label>
          <input
            type="radio"
            className="form-check-inline"
            value={user.gender}
            id="female"
            name="gender"
            style={{ marginLeft: '25px' }}
            onChange={handleChange}
          />
          <label htmlFor="female" className="col-sm-2 col-form-label">
            Female
          </label>
        </div>
      </div>
      <div className="row">
        your input: {user.name} - {user.age} - {user.gender}
      </div>
    </>
  );
}
