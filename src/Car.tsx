import * as React from 'react';

export default function Car(props) {
  return (
    <li>
      {props.car.id} - {props.car.brand}
    </li>
  );
}
