import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ItemList, Item } from 'style/MainStyle';
import ArtistView from './ArtistView';

const API = process.env.REACT_APP_END_POINT;

const Main = ({ sort }) => {
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
  }, []);

  return (
    <>
      {console.log(sort)}

      <ItemList>
        {sort ? (
          <ArtistView />
        ) : (
          songList.map((data, index) => (
            <Item>
              <Link to={`/${data.Num}`} key={data.Num}>
                <p>
                  {index + 1}. {data.Name}
                </p>
                <p>{data.Artist}</p>
              </Link>
            </Item>
          ))
        )}
      </ItemList>
    </>
  );
};

export default Main;
