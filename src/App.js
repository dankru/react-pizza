import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
