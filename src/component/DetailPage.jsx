import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Head, Table } from 'style/DetailStyle';
import { PageStyle } from 'style/PageStyle';
import ErrorPage from './common/ErrorPage';
import LoadingPage from './common/LoadingPage';

const DetailPage = () => {
  const { songNum } = useParams();
  const API = process.env.REACT_APP_END_POINT + songNum;
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [checkErr, setCheckErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const addSign = (cnt) => {
    if (cnt > 0) {
      return '+' + String(cnt);
    } else {
      return cnt;
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        setData(res.data.data.reverse());
        setInfo(res.data.Info);
      } catch (e) {
        console.error(e);
        setCheckErr(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [API]);

  return (
    <>
      {checkErr ? (
        <ErrorPage />
      ) : isLoading ? (
        <LoadingPage />
      ) : (
        <PageStyle>
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
            ${res.Time === '0000' || res.Time === '1200' ? 'otherDay' : ''}`}
                >
                  <td>{res.Date}</td>
                  <td>{res.Time.slice(0, 2)}시 </td>
                  <td>{res.Cnt}개</td>
                  <td>{data[index + 1] !== undefined ? addSign(Number(res.Cnt) - Number(data[index + 1].Cnt)) : 0}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </PageStyle>
      )}
    </>
  );
};

export default DetailPage;
