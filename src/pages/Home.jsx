import React from 'react';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/pagination';
import { useNavigate } from 'react-router';
import { SearchContext } from '../App';
import { setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filterIndex, filter, categoryIndex, currentPage} = useSelector(
    state => state.filter,
  );
  const filterString = '&sortBy=' + filter[filterIndex].sortProperty;

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  const category = categoryIndex > 0 ? `&category=${categoryIndex}` : '';

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://64bf7dbb5ee688b6250d802e.mockapi.io/items?page=${currentPage}&limit=4${category}${filterString}&order=desc`,
      )
      .then(res => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryIndex, filterIndex, searchValue, currentPage]);

  

  const pizzas = items
    .filter(obj => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map(obj => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
