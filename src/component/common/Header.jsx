import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ sort, setSort }) => {
  const changeSort = () => {
    setSort(() => !sort);
  };
  return (
    <>
      <Link to="/"> Home </Link>
      <button onClick={changeSort}>{sort ? 'All' : 'Artist'}</button>
    </>
  );
};

export default Header;
