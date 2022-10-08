import React from 'react';
import { Link } from 'react-router-dom';
import { HeadStyle } from 'style/HeaderStyle';

const Header = () => {
  return (
    <HeadStyle>
      <Link to="/"> 전체보기 </Link>
      <Link to="/artist">가수별보기</Link>
      <Link to="/register">등록하기</Link>
    </HeadStyle>
  );
};

export default Header;
