import * as React from 'react';

export default function UseRef() {
  const [user, setUser] = React.useState({ name: '', age: 18 });
  const oldUser = React.useRef({ name: 'nxg', age: 18 });
  console.log(1);
  React.useEffect(() => {});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser((values) => {
      return { ...values, [name]: value };
    });
  };

  return (
    <>
      <div>
        name:
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        age:
        <input
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <h3>
        new user: name:{user.name} age:{user.age}
      </h3>
      <h3>
        old user: name:{oldUser.current.name} age:{oldUser.current.age}
      </h3>
    </>
  );
}
