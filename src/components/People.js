import React from 'react';

const People = props => {
  let people = <p>Nenhuma pessoa adicionada</p>;

  if (props.list && props.list.length > 0) {
    people = (
      <ul className="people__list">
        {props.list.map((person, index) => (
          <li className="people__item" key={index}>
            {person}
          </li>
        ))}
      </ul>
    );
  }

  return <div className="people">{people}</div>;
};

export default People;
