import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Head, Table } from 'style/DetailStyle';
import { PageStyle } from 'style/PageStyle';
import ErrorPage from './common/ErrorPage';
import LoadingPage from './common/LoadingPage';

import { addSign, nToS, sToN } from 'utill/utills';

const DetailPage = () => {
  const { songNum } = useParams();
  const API = process.env.REACT_APP_END_POINT + songNum;
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [checkErr, setCheckErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
                <th>좋아요</th>
                <th>증가</th>
                <th>데일리 수</th>
                <th>스트리밍</th>
                <th>감상자</th>
              </tr>
            </thead>
            <tbody>
              {data.map((res, index) => (
                <tr
                  key={index}
                  className={`${res.Time.slice(0, 2) === '00' || res.Time.slice(0, 2) === '12' ? 'halfDay' : ''}`}
                >
                  <td>{res.Date}</td>
                  <td>{res.Time.slice(0, 2)}시 </td>
                  <td>{res.Cnt}개</td>
                  <td>{addSign(Number(res.Cnt) - Number(data[index + 1]?.Cnt)) || 0}</td>
                  <td
                    className={`${res.listnerCnt !== data[index + 1]?.listnerCnt ? 'listnerCnt change' : 'listnerCnt'}`}
                  >
                    {res.listnerCnt || ''}

                    <span
                      className={`${
                        (res.listnerCnt - data[index + 1]?.listnerCnt || 0) >= 0 ? 'changeAmount' : 'changeAmount minus'
                      }`}
                    >
                      {addSign(res.listnerCnt - data[index + 1]?.listnerCnt || res.listnerCnt)}
                    </span>
                  </td>
                  <td
                    className={`${
                      res.StreamCount !== data[index + 1]?.StreamCount ? 'streamCount change' : 'streamCount'
                    }`}
                  >
                    {res.StreamCount || ''}
                    <span className="changeAmount">
                      +{nToS(sToN(res.StreamCount) - sToN(data[index + 1]?.StreamCount || 0), 1)}
                    </span>
                  </td>
                  <td
                    className={`${res.StreamUser !== data[index + 1]?.StreamUser ? 'streamUser change' : 'streamUser'}`}
                  >
                    {res.StreamUser || ''}
                    <span className="changeAmount">
                      +{nToS(sToN(res.StreamUser) - sToN(data[index + 1]?.StreamUser || 0), 1)}
                    </span>
                  </td>
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
