import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">ALL</Link>
      <button>Artist</button>
    </>
  );
};

export default Header;
