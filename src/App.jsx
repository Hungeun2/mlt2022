import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from 'component/Main';
import DetailPage from 'component/DetailPage';
import Header from 'component/common/Header';
import { useState } from 'react';

const App = () => {
  const [sort, setSort] = useState(false);

  return (
    <>
      <Header sort={sort} setSort={setSort} />

      <Routes>
        <Route path="/" element={<Main sort={sort} />} />
        <Route path="/:songnum" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;
