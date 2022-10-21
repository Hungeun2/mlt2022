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
                  {/* day */}
                  {data[index - 1]?.Date !== res.Date ? (
                    <td rowSpan={Number(res.Time.slice(0, 2)) + 1}>{res.Date}</td>
                  ) : null}
                  {/* time */}
                  <td>{`${res.Time.slice(0, 2)}시`} </td>
                  {/* likes */}
                  <td>{res.Cnt}</td>
                  {/* delta */}
                  <td>{addSign(Number(res.Cnt) - Number(data[index + 1]?.Cnt)) || 0}</td>
                  {/* daily stream */}
                  {res.listnerCnt !== data[index + 1]?.listnerCnt ? (
                    <td className="change">
                      {res.listnerCnt}
                      <span
                        className={`${
                          sToN(res.listnerCnt) - sToN(data[index + 1]?.listnerCnt) > 0
                            ? 'changeAmount'
                            : 'changeAmount minus'
                        }`}
                      >
                        {addSign(sToN(res.listnerCnt) - sToN(data[index + 1]?.listnerCnt), 1)}
                      </span>
                    </td>
                  ) : (
                    <td className="none"></td>
                  )}
                  {/* Total streaming */}
                  {res.StreamCount !== data[index + 1]?.StreamCount ? (
                    <td className="change">
                      {res.StreamCount}
                      <span className="changeAmount">
                        +{nToS(sToN(res.StreamCount) - sToN(data[index + 1]?.StreamCount || 0), 1)}
                      </span>
                    </td>
                  ) : (
                    <td className="none"></td>
                  )}
                  {/* Total User */}
                  {res.StreamUser !== data[index + 1]?.StreamUser ? (
                    <td className="change">
                      {res.StreamUser}{' '}
                      <span className="changeAmount">
                        +{nToS(sToN(res.StreamUser) - sToN(data[index + 1]?.StreamUser || 0), 1)}
                      </span>
                    </td>
                  ) : (
                    <td className="none"></td>
                  )}
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
