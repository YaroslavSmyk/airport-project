import React, { useState } from 'react';
import './search.scss';

const Search = ({ setSearchValue }) => {
  const [valueInput, setValueInput] = useState('');

  const onHandlerSearch = (event) => {
    setValueInput(event.target.value);
  };

  const handlerSearchFlightsList = () => {
    setSearchValue(valueInput.toLowerCase());
    setValueInput('');
  };

  return (
    <div className="flights-search">
      <h1 className="flights-search__header">Search flight</h1>
      <div className="flights-search__container">
        <i className="fa-solid fa-magnifying-glass flights-search__icon" />
        <input
          className="flights-search__input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={valueInput}
          onChange={onHandlerSearch}
        />
      </div>

      <button
        className="button flights-search__button"
        onClick={handlerSearchFlightsList}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
