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
        setTime(res.data.data.reverse());
        setInfo(res.data.Info);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [API]);

  return (
    <>
      <span>{info.Name} </span>
      <span> {info.Artist}</span>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>갯수</th>
          </tr>
        </thead>
        <tbody>
          {time.map((data, index) => (
            <tr key={index}>
              <td>{data.Date} </td>
              <td>{data.Time}시 </td>
              <td>{data.Cnt}개</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DetailPage;
