import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryIndex } from '../redux/slices/filterSlice'

function Categories() {
  
  const categoryIndex = useSelector(state => state.filter.categoryIndex);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li key={value}
            onClick={() => dispatch(setCategoryIndex(index))}
            className={index === categoryIndex ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
