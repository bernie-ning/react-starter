import * as React from 'react';
import Car from './Car';

export default function Body() {
  const cars = [
    { id: '1', brand: 'baoma' },
    { id: '2', brand: 'daben' },
  ];
  return (
    <>
      <ul>
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </ul>
    </>
  );
}
