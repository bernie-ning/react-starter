import * as React from 'react';

export default function StepB() {
  return (
    <>
      <p>
        <code>useEffect</code> runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
      </p>
    </>
  );
}
