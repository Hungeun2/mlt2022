import React from 'react';
import axios from 'axios';

const Main = () => {
  const API = '';

  const songListReq = () => {
    axios
      .get(API)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  songListReq();
  return <div>a</div>;
};

export default Main;
