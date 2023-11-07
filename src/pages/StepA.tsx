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
    console.log(event.target);
    setUser((values) => {
      return { ...values, [name]: value };
    });
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
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="age" className="col-sm-2 col-form-label">
          Age
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            value={user.age || ''}
            id="inputPassword"
            name="age"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="man" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-10">
          <label htmlFor="man" className="col-sm-2 col-form-label">
            <input
              type="radio"
              className="form-check-inline"
              value="man"
              name="gender"
              onClick={handleChange}
              checked={user.gender === 'man'}
            />
            Man
          </label>

          <label htmlFor="female" className="col-sm-2 col-form-label">
            <input
              type="radio"
              className="form-check-inline"
              value="female"
              name="gender"
              style={{ marginLeft: '25px' }}
              onClick={handleChange}
              checked={user.gender === 'female'}
            />
            Female
          </label>
        </div>
      </div>
      <div className="row" style={{ marginLeft: 10 }}>
        your input: {user.name} - {user.age} - {user.gender}
      </div>
    </>
  );
}
