import React from 'react';

const People = props => {
  return (
    <ul>
      {props.list.map(person => (
        <li key={person}>{person}</li>
      ))}
    </ul>
  );
};

export default People;
