import React from 'react';

const PizzaSize = ({ sizes }) => {
  const [sizeIndex, setSizeIndex] = React.useState(0);

  return (
    <ul>
      {sizes.map((size, index) => (
        <li key={index}
          onClick={() => {
            setSizeIndex(index);
          }}
          className={sizeIndex === index ? 'active' : ''}>
          {size} см.
        </li>
      ))}
    </ul>
  );
};

export default PizzaSize;
