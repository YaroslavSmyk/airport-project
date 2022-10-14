import React from 'react';
import './search.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import qs from 'qs';

const Search = () => {
  const { search, pathname } = useLocation();
  console.log(search);

  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  const queryParams = querySearch ? querySearch : '';

  const [dataSearch, setDataSearch] = useState(queryParams);

  const onHandleSearch = (event) => {
    event.preventDefault();
    setDataSearch(event.target.value);
  };

  let path =
    pathname === '/departures'
      ? `/departures?search=${dataSearch}`
      : `/arrivals?search=${dataSearch}`;

  return (
    <>
      <div className="search__header">SEARCH FLIGHT</div>
      <div className="search">
        <i className="fas fa-search search__loop"></i>
        <input
          type="text"
          className="search__input"
          placeholder="Flight #"
          value={dataSearch.value}
          onChange={onHandleSearch}
        ></input>
        <Link to={path}>
          <button className="search__btn" type="submit">
            SEARCH
          </button>
        </Link>
      </div>
    </>
  );
};

export default Search;
