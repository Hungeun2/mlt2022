import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { songnum } = useParams();
  const [time, setTime] = useState([]);
  const [info, setInfo] = useState([]);

  const API = process.env.REACT_APP_END_POINT + songnum;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API);
        console.log(res);
        setTime(res.data.data.reverse());
        setInfo(res.data.Info);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [API]);

  return (
    <div>
      <span>{info.Num} </span>
      <span>{info.Name} </span>
      <span>{info.Artist} </span>

      {time.map((data, index) => (
        <div key={index}>
          <span>{data.Date} </span>
          <span>{data.Time}시 </span>
          <span>{data.Cnt}개</span>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
