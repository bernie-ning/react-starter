import * as React from 'react';

export default function UseRef() {
  const [name, setName] = React.useState('');
  const count = React.useRef(0);

  React.useEffect(() => {
    count.current += 1;
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>{count.current}</h3>
    </>
  );
}
