import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
  const API = 'https://py-test-wvbi.run.goorm.io/';
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.get(API);
        console.log(res.data.songlist);
        setSongList(res.data.songlist);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    get();
  }, []);

  return (
    <div>
      {songList.map((data) => (
        <button>
          <Link to={`/${data.Num}`} key={data.Num}>
            {/* <p>{data.Num}</p> */}
            <p>{data.Name}</p>
            <p>{data.Artist}</p>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default Main;
