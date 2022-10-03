import './App.css';
import { Routes, Route } from 'react-router-dom';
import DetailPage from 'component/DetailPage';
import Header from 'component/common/Header';
import React, { useState, useEffect } from 'react';
import ArtistView from 'component/ArtistView';
import axios from 'axios';
import AllView from 'component/AllView';
import ArtistDetailPage from 'component/ArtistDetailPage';

const API = process.env.REACT_APP_END_POINT;

const App = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.get(API);
        setSongList(res.data.songlist);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    get();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AllView songList={songList} />} />
        <Route path="/artist" element={<ArtistView songList={songList} />} />
        <Route path="/artist/:artistName" element={<ArtistDetailPage />} />
        <Route path="/detail/:songNum" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;
