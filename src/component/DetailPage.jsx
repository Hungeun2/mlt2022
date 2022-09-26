import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { songnum } = useParams();
  const [time, setTime] = useState([]);

  const API = 'https://py-test-wvbi.run.goorm.io/' + songnum;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API);
        setTime(res.data.data.reverse());
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [API]);

  return (
    <div>
      {time.map((data) => (
        <div>
          <span>{data.Date} </span>
          <span>{data.Time}시 </span>
          <span>{data.Cnt}개</span>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
