import * as React from 'react';

export default function DropDownList(props) {
  return (
    <>
      <label htmlFor={props.labelId}>{props.labelName}</label>
      <select
        id={props.labelId}
        value={props.selectedValue}
        onChange={props.onChange}
      >
        {props.lovs.map((lov) => (
          <option value={lov.code}>{lov.name}</option>
        ))}
      </select>
    </>
  );
}
