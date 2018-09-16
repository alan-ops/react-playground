import React from 'react';

const People = props => {
  let people = <p>Nenhuma pessoa adicionada</p>;

  if (props.list && props.list.length > 0) {
    people = (
      <ul>
        {props.list.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    );
  }

  return <div>{people}</div>;
};

export default People;
