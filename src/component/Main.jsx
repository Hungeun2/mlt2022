import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ItemList, Item } from 'style/MainStyle';
import Header from './common/Header';

const Main = () => {
  const API = process.env.REACT_APP_END_POINT;

  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.get(API);
        setSongList(res.data.songlist);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    get();
  }, [API]);

  return (
    <>
      <Header />
      <ItemList>
        {songList.map((data, index) => (
          <Item>
            <Link to={`/${data.Num}`} key={data.Num}>
              <p>
                {index + 1}. {data.Name}
              </p>
              <p>{data.Artist}</p>
            </Link>
          </Item>
        ))}
      </ItemList>
    </>
  );
};

export default Main;
