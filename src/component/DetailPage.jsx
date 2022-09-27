import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Head, Table } from 'style/DetailStyle';

const DetailPage = () => {
  const { songnum } = useParams();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  const API = process.env.REACT_APP_END_POINT + songnum;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data.data.reverse());
        setInfo(res.data.Info);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [API]);

  return (
    <>
      <Head>
        <span>{info.Name} </span>
        <span> {info.Artist}</span>
      </Head>

      <Table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>갯수</th>
            <th>증가</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, index) => (
            <tr
              key={index}
              className={`
            ${res.Time === '0000' ? 'otherDay' : ''}`}
            >
              <td>{res.Date}</td>
              <td>{res.Time.slice(0, 2)}시 </td>
              <td>{res.Cnt}개</td>
              <td>{data[index + 1] !== undefined ? Number(res.Cnt) - Number(data[index + 1].Cnt) : 0}개</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DetailPage;
