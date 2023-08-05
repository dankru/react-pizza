import React from 'react';

const PizzaType = ({ types }) => {
  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);

  return (
    <ul>
      {types.map((typeId, index) => (
        <li key={typeId}
          onClick={() => {
            setActiveTypeIndex(index);
          }}
          className={activeTypeIndex === index ? 'active' : ''}>
          {typeId === 0 ? 'тонкое' : 'традиционное'}
        </li>
      ))}
    </ul>
  );
};

export default PizzaType;
