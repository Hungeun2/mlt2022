import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DetailPage from 'component/DetailPage';
import Header from 'component/common/Header';
import ArtistView from 'component/ArtistView';
import AllView from 'component/AllView';
import ArtistDetailPage from 'component/ArtistDetailPage';
import Register from 'component/Register';
import ErrorPage from 'component/common/ErrorPage';
import NewAlbum from 'component/NewAlbum';

import axios from 'axios';
import LoadingPage from 'component/common/LoadingPage';

const API = process.env.REACT_APP_END_POINT;

const App = () => {
  const [songList, setSongList] = useState([]);
  const [checkErr, setCheckErr] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        setSongList(res.data.songlist);
      } catch (err) {
        console.error('Error : ', err);
        setCheckErr(true);
      }
      setIsLoading(false);
    };
    get();
  }, []);

  return (
    <>
      <Header />
      {checkErr ? (
        <ErrorPage />
      ) : (
        <Routes>
          <Route path="/" element={isLoading ? <LoadingPage /> : <AllView songList={songList} />} />
          <Route path="/artist" element={isLoading ? <LoadingPage /> : <ArtistView songList={songList} />} />
          <Route path="/artist/:artistName" element={<ArtistDetailPage />} />
          <Route path="/detail/:songNum" element={<DetailPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newalbum" element={<NewAlbum />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
};

export default App;
